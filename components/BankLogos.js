// Real SVG bank logos with accurate brand designs
import Image from 'next/image';

export const SBILogo = () => (
  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Image 
      src="/logos/SBI-bank.png.jpeg" 
      alt="State Bank of India Logo" 
      width={80} 
      height={80}
      style={{ objectFit: 'contain' }}
    />
  </div>
);

export const BankOfBarodaLogo = () => (
  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Image 
      src="/logos/Bank-of-Baroda.png.jpeg" 
      alt="Bank of Baroda Logo" 
      width={80} 
      height={80}
      style={{ objectFit: 'contain' }}
    />
  </div>
);

export const HDFCLogo = () => (
  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Image 
      src="/logos/hdfc-bank.jpeg" 
      alt="HDFC Bank Logo" 
      width={80} 
      height={80}
      style={{ objectFit: 'contain' }}
    />
  </div>
);

export const ICICILogo = () => (
  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Image 
      src="/logos/ICICI-bank.png.jpeg" 
      alt="ICICI Bank Logo" 
      width={80} 
      height={80}
      style={{ objectFit: 'contain' }}
    />
  </div>
);

export const AxisLogo = () => (
  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Image 
      src="/logos/Axis-bank.png.jpeg" 
      alt="Axis Bank Logo" 
      width={80} 
      height={80}
      style={{ objectFit: 'contain' }}
    />
  </div>
);

export const CanaraLogo = () => (
  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Image 
      src="/logos/Canara-bank.png.jpeg" 
      alt="Canara Bank Logo" 
      width={80} 
      height={80}
      style={{ objectFit: 'contain' }}
    />
  </div>
);

export const PNBLogo = () => (
  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Image 
      src="/logos/Punjab-national-bank.png.jpeg" 
      alt="Punjab National Bank Logo" 
      width={80} 
      height={80}
      style={{ objectFit: 'contain' }}
    />
  </div>
);

export const UnionBankLogo = () => (
  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Image 
      src="/logos/union-bank-of-india.jpeg" 
      alt="Union Bank of India Logo" 
      width={80} 
      height={80}
      style={{ objectFit: 'contain' }}
    />
  </div>
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
