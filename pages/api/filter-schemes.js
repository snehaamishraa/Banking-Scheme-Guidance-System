import { readFileSync } from 'fs';
import { join } from 'path';

let schemesCache = null;

function loadSchemes() {
  if (schemesCache) return schemesCache;
  
  try {
    const filePath = join(process.cwd(), 'server/data/bank_schemes.json');
    const fileContent = readFileSync(filePath, 'utf-8');
    schemesCache = JSON.parse(fileContent);
    return schemesCache;
  } catch (error) {
    console.error('Error loading schemes:', error);
    return null;
  }
}

function parseCurrency(amount) {
  if (typeof amount === 'number') return amount;
  if (typeof amount !== 'string') return 0;
  return parseInt(amount.replace(/[₹,]/g, '')) || 0;
}

function parseInterestRate(rateRange) {
  if (!rateRange) return { min: 0, max: 100 };
  
  const match = rateRange.match(/[\d.]+/g);
  if (!match || match.length < 1) return { min: 0, max: 100 };
  
  const min = parseFloat(match[0]);
  const max = match.length > 1 ? parseFloat(match[1]) : min;
  
  return { min, max };
}

function matchesCriteria(scheme, criteria) {
  // Age check
  if (criteria.age) {
    if (scheme.minimum_age && criteria.age < scheme.minimum_age) return false;
    if (scheme.maximum_age && criteria.age > scheme.maximum_age) return false;
  }

  // Income check
  if (criteria.income) {
    if (scheme.minimum_income_required && criteria.income < scheme.minimum_income_required) return false;
  }

  // Loan amount check
  if (criteria.loanAmount && criteria.loanAmount > 0) {
    const minAmount = parseCurrency(scheme.loan_amount_min);
    const maxAmount = parseCurrency(scheme.loan_amount_max);
    if (criteria.loanAmount < minAmount || criteria.loanAmount > maxAmount) return false;
  }

  // Purpose/Category check
  if (criteria.purpose) {
    if (scheme.scheme_category !== criteria.purpose) return false;
  }

  // Bank check
  if (criteria.bank) {
    if (scheme.bank_name !== criteria.bank) return false;
  }

  return true;
}

function calculateMatchScore(scheme, criteria) {
  let score = 50; // Base score

  // Category match (best indicator)
  if (criteria.purpose && scheme.scheme_category === criteria.purpose) {
    score += 30;
  }

  // Age proximity (if applicable)
  if (criteria.age) {
    if (scheme.minimum_age && scheme.maximum_age) {
      const midAge = (scheme.minimum_age + scheme.maximum_age) / 2;
      const ageDiff = Math.abs(criteria.age - midAge);
      if (ageDiff <= 5) score += 15;
      else if (ageDiff <= 15) score += 10;
      else if (ageDiff <= 25) score += 5;
    }
  }

  // Income match
  if (criteria.income && scheme.minimum_income_required) {
    const incomeRatio = criteria.income / scheme.minimum_income_required;
    if (incomeRatio >= 1.5) score += 5;
  }

  return Math.min(100, Math.max(0, score));
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { age, income, purpose, loanAmount, bank, limit = 10 } = req.body;

    // Validate input
    if (age && (age < 18 || age > 100)) {
      return res.status(400).json({ success: false, error: 'Age must be between 18 and 100' });
    }

    const data = loadSchemes();
    if (!data || !data.schemes) {
      return res.status(404).json({ success: false, error: 'No schemes found' });
    }

    const criteria = {
      age: age || null,
      income: income || null,
      purpose: purpose || null,
      loanAmount: loanAmount || 0,
      bank: bank || null
    };

    // Filter schemes
    const matchedSchemes = data.schemes
      .filter(scheme => matchesCriteria(scheme, criteria))
      .map(scheme => ({
        ...scheme,
        matchScore: calculateMatchScore(scheme, criteria)
      }))
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, limit);

    res.status(200).json({
      success: true,
      criteria,
      totalSchemes: data.schemes.length,
      matchedSchemes: matchedSchemes.length,
      schemes: matchedSchemes,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in /api/filter-schemes:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to filter schemes',
      message: error.message 
    });
  }
}
