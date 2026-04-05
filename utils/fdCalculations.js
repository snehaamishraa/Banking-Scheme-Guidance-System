export function toYears(tenureValue, tenureUnit) {
  const value = Number(tenureValue);
  if (!Number.isFinite(value) || value <= 0) return 0;
  return tenureUnit === 'months' ? value / 12 : value;
}

export function getApplicableRate(option, age) {
  const isSeniorCitizen = Number(age) >= 60;
  if (isSeniorCitizen && option.seniorCitizenRate) {
    return Number(option.seniorCitizenRate);
  }
  return Number(option.interestRate);
}

export function calculateMaturity(principal, annualRate, timeInYears) {
  // Simple interest formula requested by product requirement.
  const p = Number(principal);
  const r = Number(annualRate) / 100;
  const t = Number(timeInYears);

  if (!Number.isFinite(p) || !Number.isFinite(r) || !Number.isFinite(t) || p <= 0 || t <= 0) {
    return 0;
  }

  return p + p * r * t;
}

export function compareFdOptions(options, { principal, tenureValue, tenureUnit, age }) {
  const tenureYears = toYears(tenureValue, tenureUnit);
  if (!Array.isArray(options) || options.length === 0 || principal <= 0 || tenureYears <= 0) {
    return [];
  }

  const enriched = options
    .filter((option) => principal >= Number(option.minimumDeposit || 0))
    .map((option) => {
      const appliedRate = getApplicableRate(option, age);
      const maturityAmount = calculateMaturity(principal, appliedRate, tenureYears);
      return {
        ...option,
        appliedRate,
        tenureYears,
        maturityAmount,
        interestEarned: maturityAmount - principal
      };
    })
    .sort((a, b) => b.maturityAmount - a.maturityAmount);

  if (enriched.length === 0) return enriched;

  const maxRate = Math.max(...enriched.map((item) => item.appliedRate));

  return enriched.map((item, index) => ({
    ...item,
    isBestReturn: index === 0,
    isHighestInterest: item.appliedRate === maxRate
  }));
}
