const schemes = [
  {
    name: 'Pradhan Mantri Awas Yojana (PMAY)',
    category: 'Loan',
    eligibility: 'Indian citizens from EWS, LIG, or MIG income groups with no pucca house ownership.',
    benefits: 'Interest subsidy on home loan and reduced EMI burden for eligible families.',
  },
  {
    name: 'SBI Green Car Loan',
    category: 'Loan',
    eligibility: 'Indian residents with stable income and eligible credit profile.',
    benefits: 'Lower interest rates for electric vehicle purchase and longer repayment tenure.',
  },
  {
    name: 'Sukanya Samriddhi Yojana',
    category: 'Savings',
    eligibility: 'Parents or legal guardians of a girl child below 10 years.',
    benefits: 'High interest savings with tax benefits under Section 80C and long-term corpus growth.',
  },
  {
    name: 'Public Provident Fund (PPF)',
    category: 'Savings',
    eligibility: 'Any Indian resident individual can open an account.',
    benefits: 'Government-backed long-term savings with tax-free returns and capital protection.',
  },
  {
    name: 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)',
    category: 'Insurance',
    eligibility: 'Individuals aged 18 to 50 years with a savings bank account.',
    benefits: 'Affordable life insurance cover with annual renewal at low premium.',
  },
  {
    name: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY)',
    category: 'Insurance',
    eligibility: 'Individuals aged 18 to 70 years with a savings bank account.',
    benefits: 'Accident insurance cover at a nominal annual premium.',
  },
]

export default function handler(req, res) {
  const { category } = req.query

  if (!category) {
    return res.status(200).json(schemes)
  }

  const filteredSchemes = schemes.filter(
    (scheme) => scheme.category.toLowerCase() === String(category).toLowerCase()
  )

  return res.status(200).json(filteredSchemes)
}