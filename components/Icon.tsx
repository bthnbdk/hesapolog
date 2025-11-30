import React from 'react';

interface IconProps {
  variant?: 'header' | 'footer';
}

export const Icon: React.FC<IconProps> = ({ variant = 'header' }) => {
  const bgColor = variant === 'header' ? '#452829' : '#E8D1C5';
  const textColor = variant === 'header' ? '#FFFCFA' : '#452829';

  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Hesapolog Icon">
        <title>Hesapolog Icon</title>
        <rect width="40" height="40" rx="12" fill={bgColor}/>
        <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="22" fontWeight="800" fill={textColor}>
            H.
        </text>
    </svg>
  );
};
