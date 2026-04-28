import { readFileSync } from 'fs';
import { join } from 'path';

let schemesCache = null;
let bankOfBarodaCache = null;

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

function loadBankOfBarodaSchemes() {
  if (bankOfBarodaCache) return bankOfBarodaCache;

  try {
    const filePath = join(process.cwd(), 'server/data/bank_of_baroda_schemes.json');
    const fileContent = readFileSync(filePath, 'utf-8');
    bankOfBarodaCache = JSON.parse(fileContent);
    return bankOfBarodaCache;
  } catch (error) {
    console.error('Error loading Bank of Baroda schemes:', error);
    return null;
  }
}

function isBankOfBaroda(bankId) {
  return bankId.toLowerCase().includes('baroda');
}

function dedupeSchemes(primarySchemes, secondarySchemes) {
  const seen = new Set();
  const mergedSchemes = [];

  [...primarySchemes, ...secondarySchemes].forEach((scheme) => {
    const dedupeKey = `${scheme.id || ''}::${scheme.scheme_name || ''}::${scheme.scheme_category || ''}`;
    if (seen.has(dedupeKey)) return;
    seen.add(dedupeKey);
    mergedSchemes.push(scheme);
  });

  return mergedSchemes;
}

export default function handler(req, res) {
  const { bankId } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    if (!bankId) {
      return res.status(400).json({ success: false, error: 'Bank ID is required' });
    }

    const data = loadSchemes();
    if (!data || !data.schemes) {
      return res.status(404).json({ success: false, error: 'No schemes found' });
    }

    // Filter schemes by bank
    const bankSchemes = data.schemes.filter(scheme => 
      scheme.bank_name.toLowerCase().includes(bankId.toLowerCase()) ||
      scheme.id.startsWith(bankId.toLowerCase())
    );

    const mergedSchemes = isBankOfBaroda(bankId)
      ? dedupeSchemes(
          bankSchemes,
          (loadBankOfBarodaSchemes()?.schemes || []).filter((scheme) =>
            scheme.bank_name.toLowerCase().includes('bank of baroda')
          )
        )
      : bankSchemes;

    if (mergedSchemes.length === 0) {
      return res.status(404).json({ 
        success: false, 
        error: 'No schemes found for this bank' 
      });
    }

    res.status(200).json({ 
      success: true,
      bank: bankId,
      count: mergedSchemes.length,
      schemes: mergedSchemes,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in /api/schemes/[bankId]:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to load schemes',
      message: error.message 
    });
  }
}
