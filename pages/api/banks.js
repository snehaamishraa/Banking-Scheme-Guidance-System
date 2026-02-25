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

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }
  
  try {
    const data = loadSchemes();
    
    if (!data || !data.schemes) {
      return res.status(404).json({ success: false, error: 'No schemes found' });
    }

    // Get unique banks and sort
    const banks = [...new Set(data.schemes.map(s => s.bank_name))].sort();

    res.status(200).json({ 
      success: true,
      banks,
      count: banks.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error in /api/banks:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to load banks',
      message: error.message 
    });
  }
}
