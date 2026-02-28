import schemesData from '../../../server/data/bank_schemes.json';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { schemeId } = req.query;
  if (!schemeId) {
    return res.status(400).json({ success: false, error: 'Scheme ID is required' });
  }

  try {
    const normalizedId = schemeId.toString().toLowerCase();

    // iterate through all schemes and return the first match
    for (const scheme of schemesData.schemes) {
      if (scheme.id && scheme.id.toString().toLowerCase() === normalizedId) {
        // attach a simple bankId derived from bank_name if possible
        let bankId = '';
        if (scheme.bank_name) {
          const match = scheme.bank_name.match(/\(([^)]+)\)/);
          bankId = match ? match[1] : scheme.bank_name.replace(/\s+/g, '_');
        }
        return res.status(200).json({ success: true, scheme: { ...scheme, bankId } });
      }
    }

    return res.status(404).json({ success: false, error: 'Scheme not found' });
  } catch (error) {
    console.error('Error in /api/scheme/[schemeId]:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch scheme', message: error.message });
  }
}