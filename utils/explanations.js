// Common field explanations for all forms
export const fieldExplanations = {
  age: {
    title: "Age",
    description: "Why: Many schemes have age eligibility criteria. For example, youth schemes (18-30), senior citizen accounts (60+), education loans (16-45), etc. This helps us match you with age-appropriate schemes."
  },
  
  income: {
    title: "Monthly Income",
    description: "Why: Different schemes cater to different income groups. Lower income individuals may qualify for subsidized schemes, while higher income earners get premium benefits. Income also determines loan eligibility and interest rates."
  },
  
  monthlyIncome: {
    title: "Monthly Income",
    description: "Why: Different schemes cater to different income groups. Lower income individuals may qualify for subsidized schemes, while higher income earners get premium benefits. Income also determines loan eligibility and interest rates."
  },

  gender: {
    title: "Gender",
    description: "Why: Many banks have special schemes for women (lower interest rates, fee waivers) and some schemes are gender-neutral. Gender helps us find schemes with special offers available to you."
  },

  category: {
    title: "Category (SC/ST/OBC/General)",
    description: "Why: Indian government reserves certain benefits for SC/ST/OBC categories in government-backed schemes. This helps us identify if you're eligible for reserved category schemes with additional benefits."
  },

  occupation: {
    title: "Occupation/Employment Type",
    description: "Why: Different occupations have different schemes. Self-employed get MSME loans, salaried employees get special salary accounts, farmers get agricultural schemes, etc. This helps find your occupation-specific benefits."
  },

  loanAmount: {
    title: "Loan Amount Required",
    description: "Why: Different schemes have different loan limits. Micro loans go up to ₹25 lakhs, home loans up to ₹1 crore+. This helps us show schemes that match your borrowing needs without exceeding limits."
  },

  savingsGoal: {
    title: "Savings Goal",
    description: "Why: Are you saving for emergency, education, retirement, or children's future? Different goals suit different account types. Emergency funds need liquid accounts, while retirement needs long-term fixed deposits."
  },

  cibilScore: {
    title: "CIBIL Score (Credit Score)",
    description: "What is it? Your CIBIL score (0-900) is like a financial report card based on your loan/credit card repayment history. Why we ask: Banks use this to decide if they'll approve your loan and at what interest rate. Higher score = lower interest rate. Minimum 600-650 needed for most loans."
  },

  educationLevel: {
    title: "Course Level",
    description: "Why: Education loan schemes have different benefits for undergraduate vs postgraduate studies. Some schemes cover only tuition, others include hostel fees. Course level affects loan amount and repayment terms."
  },

  businessType: {
    title: "Business Type",
    description: "Why: Different sectors have different government schemes. Manufacturing gets equipment loans, services get working capital loans, startups get special subsidy schemes. Matching your business type helps find relevant benefits."
  },

  farmingType: {
    title: "Farming Type",
    description: "Why: Crop farmers, dairy farmers, and poultry farmers have different needs and different schemes. Crop insurance, animal husbandry loans, equipment subsidies vary by farming type. This helps match you with specific agricultural schemes."
  },

  accountType: {
    title: "Preferred Account Type",
    description: "Why: Regular savings for anyone, salary accounts for employees (better interest), senior citizen accounts (higher rates + benefits). Choosing your type helps find accounts with maximum benefits for your situation."
  },

  depositAmount: {
    title: "Deposit Amount",
    description: "Why: Fixed deposit schemes have minimum and maximum limits. Some schemes give special rates for larger deposits (₹10 lakh+). Amount also affects tax treatment and returns. This helps find FD schemes matching your investment size."
  },

  beneficiaryType: {
    title: "Beneficiary Type",
    description: "Why: Government schemes often have reserved benefits for women, senior citizens, farmers, students, and SC/ST categories. This helps identify schemes with special subsidies and advantages for your group."
  }
};

// Category-specific field explanations
export const categoryFieldExplanations = {
  'Education Loans': {
    age: {
      title: "Student Age",
      description: "Why: Education loans have age limits (usually 16-45). Younger students get longer repayment periods, while mature students might get faster processing. Age affects eligibility for scholarship-linked schemes and government subsidies."
    },
    income: {
      title: "Co-applicant Monthly Income (Parent/Guardian)",
      description: "Why: Your parent's income determines if you're eligible for education loans. Most schemes have income limits (up to ₹10-20 lakh annually). If parents' income is too high, you might not qualify for subsidized schemes. Lower income = better subsidy benefits."
    },
    educationLevel: {
      title: "Course Level",
      description: "Why: Government-backed education loans have different benefits for undergraduates, postgraduates, and professional courses. Professional courses (engineering, medicine) have higher loan limits. Different levels have different success rates."
    }
  },

  'Home Loans': {
    age: {
      title: "Age",
      description: "Why: Home loan tenure depends on age. A 25-year-old can get 30-year loan, but a 55-year-old might only get 10-year (must repay by age 65). Your age determines repayment period and monthly EMI."
    },
    income: {
      title: "Monthly Income (₹)",
      description: "Why: Banks calculate how much you can borrow using income. General rule: Loan amount should be 5-6x your annual income. Higher income = higher loan eligibility. This determines which home loan schemes you qualify for."
    },
    loanAmount: {
      title: "Required Loan Amount (₹)",
      description: "Why: Home loans range from ₹5 lakhs (small purchases) to ₹1-2+ crores (luxury homes). Different schemes serve different loan sizes. Small loans might get instant approval, large loans need property valuation. Finding your loan amount range."
    }
  },

  'Personal Loans': {
    age: {
      title: "Age",
      description: "Why: Personal loans have age limits (18-65 usually). Younger people can get longer tenure, but older applicants need existing credit history. Age affects your eligibility and repayment timeline."
    },
    income: {
      title: "Monthly Income (₹)",
      description: "Why: Personal loans are unsecured and based on income. Most banks require minimum ₹15,000-25,000 monthly income. Your income determines how much you can borrow - typically 10-12x monthly salary."
    },
    loanAmount: {
      title: "Required Loan Amount (₹)",
      description: "Why: Personal loans range from ₹10,000 to ₹40 lakhs. Smaller loans get instant approval, larger loans need more documentation. Different loan sizes have different interest rates and processing times."
    }
  },

  'MSME / Business Loans': {
    age: {
      title: "Applicant Age",
      description: "Why: Business loans require age 18+. Government schemes often prefer applicants 18-65 for formal consideration. Very young entrepreneurs get startup subsidies, older business owners get growth loans."
    },
    income: {
      title: "Business Monthly Income (₹)",
      description: "Why: Your business income shows capacity to repay. Government checks last 2 years' income via ITR, GST returns. Higher income = higher loan limits and faster approval."
    },
    businessType: {
      title: "Business Type",
      description: "Why: Government has different schemes for different sectors. Manufacturing gets equipment loans, services get working capital, startups get special SIDBI schemes with subsidies. Your sector determines available benefits."
    }
  },

  'Agriculture Loans': {
    age: {
      title: "Age",
      description: "Why: Agricultural loans favor active farmers (usually 18-65). Government insurance covers losses for farmers in this age range. Very young or very old farmers might face stricter eligibility."
    },
    income: {
      title: "Monthly Household Income (₹)",
      description: "Why: Agricultural income is often seasonal. We check total household income to determine subsidy eligibility. Lower income farming families get government subsidies on interest rates (up to 4% instead of 12%)."
    },
    farmingType: {
      title: "Farming Type",
      description: "Why: Each farming type has specific schemes. Crop farmers get crop loans and insurance, dairy farmers get animal husbandry loans, poultry farmers get equipment subsidies. Your farming type determines relevant schemes."
    }
  },

  'Savings Accounts': {
    age: {
      title: "Age",
      description: "Why: Different account types for different ages. Regular savings (18+), senior citizen accounts (60+) with higher interest rates, salary accounts for employees. Your age determines which accounts with best benefits you can open."
    },
    income: {
      title: "Monthly Income (₹)",
      description: "Why: Some accounts need minimum income levels. Salary accounts need ₹50,000+ monthly income, premium accounts need higher deposits. This helps match you with accounts suitable for your income level."
    },
    accountType: {
      title: "Preferred Account Type",
      description: "Why: Regular savings suit casual savers, salary accounts for employees (better interest), senior accounts for 60+ with premium benefits. Choosing your needs helps find accounts with maximum features for you."
    }
  },

  'Fixed Deposits': {
    age: {
      title: "Age",
      description: "Why: Senior citizen (60+) fixed deposits offer 0.5-1% higher interest rates. Some schemes specifically boost savings for elderly. Your age determines special FD rates available to you."
    },
    income: {
      title: "Monthly Income (₹)",
      description: "Why: Fixed deposits don't need minimum income, but income helps show you have capacity to invest. Some high-net-worth schemes need higher incomes. This helps find FD options matching your financial capacity."
    },
    loanAmount: {
      title: "Deposit Amount (₹)",
      description: "What is Deposit Amount? Amount of money you want to invest in a Fixed Deposit. Why: Banks give better interest rates for larger deposits. ₹1,000-₹1 lakh gets standard rate, ₹1+ lakh gets premium rates (up to 0.5% extra). Find rate matching your amount."
    }
  },

  'Government-backed schemes': {
    age: {
      title: "Age",
      description: "Why: Government schemes often have age-specific benefits. Pradhan Mantri Yojanas (PM schemes) might have age limits. Youth schemes (18-35) offer startup subsidies, elderly schemes offer pension benefits. Age determines eligible government schemes."
    },
    income: {
      title: "Monthly Income (₹)",
      description: "Why: Government schemes are mostly for lower-income groups (to reduce inequality). Higher income reduces benefits. Monthly income below ₹50,000 might get bigger subsidies. Income determines your subsidy quantum."
    },
    beneficiaryType: {
      title: "Beneficiary Type",
      description: "Why: Government reserves special benefits for women (₹1+ lakh extra subsidy), senior citizens (pension schemes), farmers (crop insurance), students (education support), and SC/ST (reserved category benefits). Your type determines which government schemes you're eligible for."
    }
  }
};

// Scheme explanations - simple, easy-to-understand explanations
export const schemeExplanations = {
  'Savings Accounts': {
    simple: "A basic account where you put money safely and earn interest (like getting paid to save).",
    detailed: "A savings account is where you keep your daily money safe in a bank. You can withdraw money anytime. Banks pay you interest (extra money) for keeping your money with them - usually 2-4% per year. It's like a piggy bank, but the piggy bank pays you!",
    benefits: "Keep money safe, earn interest, free debit card, free online banking",
    whoNeeds: "Everyone - students, working people, retirees, small business owners"
  },

  'Fixed Deposits': {
    simple: "You give money to a bank for a fixed time period (3 months to 10 years) and get guaranteed higher interest (returns).",
    detailed: "A Fixed Deposit (FD) is like a time-locked savings account. You decide to lock your money for 3 months, 1 year, 5 years etc. In return, the bank guarantees higher interest rates than regular savings - typically 6-8% per year (interest increases with lock-in time). Your money comes back with interest after the time ends.",
    benefits: "Guaranteed high interest, very safe, tax-free interest up to ₹50,000/year, perfect for long-term savings",
    whoNeeds: "People saving for specific goals (education, wedding, house), retirees living on interest, risk-averse investors"
  },

  'Home Loans': {
    simple: "Bank gives you money to buy a house. You pay back monthly with interest over 15-20 years.",
    detailed: "A home loan is money from a bank to buy a house or property. The bank takes the property as security (they own it until you repay). You get the house immediately and repay in monthly installments (EMI) over 15-20 years. The interest you pay makes this loan profitable for the bank.",
    benefits: "Own a home without having all cash upfront, tax deductions on interest, long repayment periods (15-30 years), lower interest rates (7-9%)",
    whoNeeds: "People wanting to buy homes, first-time homebuyers, investors buying properties"
  },

  'Personal Loans': {
    simple: "Quick unsecured loan from bank for any personal need (wedding, travel, medical) - you get money in 2-3 days.",
    detailed: "Personal loans are quick emergency loans. You don't need to pledge property as security. Banks just check your income and credit score. You can use it for anything - wedding, debt payment, medical, education, travel. Interest is higher (10-16%) because it's riskier for banks, but you get money in 2-3 days.",
    benefits: "Very fast approval (2-3 days), unsecured (no property needed), flexible use, quick cash for emergencies",
    whoNeeds: "People with immediate cash needs, emergency situations, debt consolidation, wedding/travel expenses"
  },

  'Education Loans': {
    simple: "Bank funds your studies (tuition, books, hostel) and you repay after getting job. Student-friendly with low interest during studies.",
    detailed: "An education loan covers all your study costs - tuition fee, books, hostel, living expenses. The bank lets you study without paying interest (interest is added later). After you graduate and get a job, you repay in easy monthly installments over 5-7 years. Interest rates are low (5-8%) because education is considered investment in future.",
    benefits: "Covers all education costs, no interest during studies, joint loans for security, employment-linked, government subsidies available",
    whoNeeds: "Students pursuing higher education (graduation, postgraduation, professional courses), parents supporting children's education"
  },

  'MSME / Business Loans': {
    simple: "Bank loans for small-medium businesses to buy equipment, stock, or expand. Government heavily subsidizes these.",
    detailed: "MSME stands for Micro, Small & Medium Enterprises. These loans are specifically for small business owners - to buy machinery, stock products, expand shops, start new ventures. Government subsidizes interest (makes it cheaper) and guarantees loans. Interest as low as 4-8% with government subsidy vs 12-16% normal rates.",
    benefits: "Lower interest due to government subsidy, easier qualification (less strict checks), flexible use, longer repayment, government guarantee reduces risk",
    whoNeeds: "Small business owners, startup founders, traders, manufacturers, service providers wanting to grow"
  },

  'Agriculture Loans': {
    simple: "Special cheap loans for farmers to buy seeds, fertilizer, equipment, livestock. Government pays some interest for you.",
    detailed: "Agricultural loans are for farmers - to buy seeds, fertilizers, equipment, livestock, land development. India's government massively subsidizes these because farming is critical. Interest rates are as low as 4% (government pays rest). It's essentially the government saying 'we'll help you farm better'.",
    benefits: "Ultra-low interest due to subsidy, government insurance covers crop failure, longer repayment (up to 10 years), flexible terms, livestock loans included",
    whoNeeds: "Farmers (crop, dairy, poultry), landowners, agricultural entrepreneurs"
  },

  'Women-specific Loans/Accounts': {
    simple: "Schemes that give women lower interest rates, fee waivers, and special benefits to encourage women entrepreneurship.",
    detailed: "These are accounts and loans designed to empower women. Women get 0.5-1% lower interest on loans, fee waivers on accounts, free insurance, business training. This encourages women to enter business and save money.",
    benefits: "Lower interest rates, fee waivers, free insurance, financial literacy training, easier business loan approval",
    whoNeeds: "Women entrepreneurs, working women, self-employed women, women wanting to build savings"
  },

  'Senior Citizen Accounts': {
    simple: "Special savings accounts for people 60+ with higher interest rates, priority service, and free medical checkups.",
    detailed: "Banks offer special accounts for senior citizens (60+ years). These accounts give 0.5-1.5% higher interest than regular savings. You get priority service, free health checkups, door-step banking, and no minimum balance requirements after 75. It's respect for seniority!",
    benefits: "0.5-1.5% higher interest, free health services, door-step banking, priority service, lower/no minimum balance",
    whoNeeds: "Retired people, senior citizens living on savings, elderly savers"
  },

  'Government-backed Schemes': {
    simple: "Government-run or government-supported schemes with heavy subsidies for specific groups (poor, farmers, students, women).",
    detailed: "These are government programs designed to reduce inequality. Examples: Pradhan Mantri Jan Dhan Yojana (free accounts for poor), Pradhan Mantri Mudra Yojana (loans for small business), Ayushman Bharat (health insurance). Government pays part of the cost to help disadvantaged groups.",
    benefits: "Heavy government subsidy, very low/free interest, free insurance, special benefits for target groups, easy eligibility",
    whoNeeds: "Low-income groups, farmers, students, women entrepreneurs, unorganized sector workers, SC/ST categories"
  }
};
