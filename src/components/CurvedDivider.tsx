
import React from 'react';
import { cn } from '@/lib/utils';

interface CurvedDividerProps {
  position: 'top' | 'bottom';
  fill?: string;
  className?: string;
}

const CurvedDivider: React.FC<CurvedDividerProps> = ({ 
  position, 
  fill = "#0A0118", 
  className 
}) => {
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      {position === 'top' ? (
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120C0 120 358 0 720 0C1082 0 1440 120 1440 120V120H0V120Z"
            fill={fill}
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 1440 120" 
          fill="none"
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0C0 0 358 120 720 120C1082 120 1440 0 1440 0V120H0V0Z"
            fill={fill}
          />
        </svg>
      )}
    </div>
  );
};

export default CurvedDivider;
