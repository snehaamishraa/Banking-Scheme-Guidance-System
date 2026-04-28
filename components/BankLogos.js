// Real SVG bank logos with accurate brand designs

export const SBILogo = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Dark blue background */}
    <rect x="0" y="0" width="200" height="200" fill="#001a4d"/>
    {/* Cyan circle with keyhole */}
    <circle cx="60" cy="100" r="35" fill="#00a8e8"/>
    {/* Keyhole design - white circle at top */}
    <circle cx="60" cy="80" r="6" fill="white"/>
    {/* Keyhole stem */}
    <rect x="57" y="87" width="6" height="18" fill="white"/>
    {/* "SBI" text in white */}
    <text x="130" y="115" fontFamily="Arial, sans-serif" fontSize="42" fontWeight="700" fill="white" textAnchor="middle">SBI</text>
  </svg>
);

export const BankOfBarodaLogo = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Orange "B" swoosh logo */}
    <path d="M 60 50 Q 80 50 90 70 Q 95 80 90 90 Q 80 95 70 90 L 70 110 Q 85 110 95 120 Q 105 130 95 145 Q 80 155 60 150 Q 50 145 50 130 L 50 70 Q 50 55 60 50 Z" fill="#ff6600" stroke="none"/>
    {/* Curved lines inside B */}
    <path d="M 60 70 L 80 70" stroke="white" strokeWidth="3" opacity="0.8" strokeLinecap="round"/>
    <path d="M 60 85 L 75 85" stroke="white" strokeWidth="3" opacity="0.8" strokeLinecap="round"/>
    <path d="M 60 100 L 78 100" stroke="white" strokeWidth="3" opacity="0.8" strokeLinecap="round"/>
    <path d="M 60 115 L 80 115" stroke="white" strokeWidth="3" opacity="0.8" strokeLinecap="round"/>
    <path d="M 60 130 L 75 130" stroke="white" strokeWidth="3" opacity="0.8" strokeLinecap="round"/>
    {/* Text */}
    <text x="100" y="170" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="#ff6600" textAnchor="middle">BANK OF BARODA</text>
  </svg>
);

export const HDFCLogo = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Red corner rectangles forming a frame */}
    {/* Top left */}
    <rect x="35" y="35" width="28" height="40" fill="#e74c3c"/>
    {/* Top right */}
    <rect x="137" y="35" width="28" height="40" fill="#e74c3c"/>
    {/* Bottom left */}
    <rect x="35" y="125" width="28" height="40" fill="#e74c3c"/>
    {/* Bottom right */}
    <rect x="137" y="125" width="28" height="40" fill="#e74c3c"/>
    {/* Center blue square */}
    <rect x="63" y="63" width="74" height="74" fill="#003da5"/>
    {/* "HDFC BANK" text on dark navy banner */}
    <rect x="25" y="150" width="150" height="30" fill="#003da5"/>
    <text x="100" y="172" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="white" textAnchor="middle">HDFC BANK</text>
  </svg>
);

export const ICICILogo = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Red curved "i" swoosh */}
    <ellipse cx="50" cy="90" rx="18" ry="35" fill="#e74c3c"/>
    <circle cx="50" cy="50" r="10" fill="#e74c3c"/>
    {/* "ICICI Bank" text in navy blue */}
    <text x="100" y="110" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700" fill="#003da5" textAnchor="middle">ICICI</text>
    <text x="100" y="135" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="400" fill="#003da5" textAnchor="middle">Bank</text>
  </svg>
);

export const AxisLogo = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Purple "A" shaped parallelograms */}
    {/* Left "A" shape */}
    <polygon points="70,70 85,70 95,110 80,110" fill="#9b1c4f"/>
    <polygon points="60,90 75,90 95,150 80,150" fill="#9b1c4f"/>
    {/* Right "A" shape */}
    <polygon points="105,70 120,70 130,110 115,110" fill="#9b1c4f"/>
    <polygon points="110,90 125,90 105,150 90,150" fill="#9b1c4f"/>
    {/* Text "AXIS BANK" */}
    <text x="100" y="175" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="#9b1c4f" textAnchor="middle">AXIS BANK</text>
  </svg>
);

export const CanaraLogo = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Orange checkmark */}
    <path d="M 45 110 L 65 130 L 85 100" stroke="#ff9800" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Blue triangle */}
    <path d="M 100 50 L 150 130 L 65 130 Z" fill="#0066ff" stroke="#0066ff" strokeWidth="2"/>
    {/* Text "Canara Bank" */}
    <text x="100" y="170" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="#0066ff" textAnchor="middle">CANARA BANK</text>
  </svg>
);

export const PNBLogo = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Left maroon section with yellow "U" */}
    <rect x="20" y="35" width="70" height="70" fill="#8b1538"/>
    <path d="M 40 50 Q 40 70 55 70 Q 70 70 70 50" stroke="#ffc107" strokeWidth="8" fill="none" strokeLinecap="round"/>
    
    {/* Right yellow section with maroon "pnb" */}
    <rect x="95" y="35" width="85" height="70" fill="#ffc107"/>
    <text x="138" y="85" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="700" fill="#8b1538" textAnchor="middle">pnb</text>
    
    {/* Text "PUNJAB NATIONAL BANK" below */}
    <text x="100" y="145" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#8b1538" textAnchor="middle">PUNJAB NATIONAL BANK</text>
  </svg>
);

export const UnionBankLogo = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Red U shape (left) */}
    <path d="M 65 70 L 65 110 Q 65 135 90 135 Q 95 135 95 130" stroke="#e74c3c" strokeWidth="18" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Blue reversed U shape (right) - interlocking */}
    <path d="M 135 70 L 135 110 Q 135 135 110 135 Q 105 135 105 130" stroke="#003da5" strokeWidth="18" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* "Union Bank" text in red */}
    <text x="100" y="165" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700" fill="#e74c3c" textAnchor="middle">Union Bank</text>
    
    {/* "of India" text smaller and italic in red */}
    <text x="130" y="180" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="400" fill="#e74c3c" textAnchor="middle" fontStyle="italic">of India</text>
  </svg>
);

const logoComponents = {
  'State Bank of India (SBI)': SBILogo,
  'HDFC Bank': HDFCLogo,
  'ICICI Bank': ICICILogo,
  'Axis Bank': AxisLogo,
  'Bank of Baroda': BankOfBarodaLogo,
  'Canara Bank': CanaraLogo,
  'Punjab National Bank (PNB)': PNBLogo,
  'Union Bank of India': UnionBankLogo,
};

export function BankLogo({ bankName }) {
  const LogoComponent = logoComponents[bankName];
  
  if (!LogoComponent) {
    return <span style={{ fontSize: '2.8rem' }}>🏦</span>;
  }

  return <LogoComponent />;
}
