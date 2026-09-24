import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  light?: boolean;
  accent?: 'gold' | 'blue' | 'neutral';
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  className = '',
  light = false,
  accent = 'gold',
}) => {
  return (
    <div
      className={`flex items-center justify-center gap-3 py-4 select-none ${className}`}
      aria-hidden="true"
    >
      <div
        className={`h-[1px] w-12 sm:w-20 ${
          light ? 'bg-white/20' : 'bg-[#E4E9F2]'
        }`}
      />
      <div className="flex items-center gap-1.5">
        <span
          className={`inline-block h-1 w-1 rotate-45 ${
            accent === 'gold'
              ? light
                ? 'bg-[#C5A15A]/70'
                : 'bg-[#C5A15A]'
              : light
              ? 'bg-white/60'
              : 'bg-[#0B3095]'
          }`}
        />
        <svg
          aria-hidden="true"
          focusable="false"
          className={`h-3.5 w-3.5 ${
            accent === 'gold'
              ? light
                ? 'text-[#C5A15A]'
                : 'text-[#C5A15A]'
              : light
              ? 'text-white/80'
              : 'text-[#0B3095]'
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {/* Subtle 8-pointed Islamic star */}
          <path d="M12 2L14.5 7.5L20 5L17.5 10.5L22 13L16.5 15.5L19 21L13.5 18.5L12 24L10.5 18.5L5 21L7.5 15.5L2 13L6.5 10.5L4 5L9.5 7.5L12 2Z" />
        </svg>
        <span
          className={`inline-block h-1 w-1 rotate-45 ${
            accent === 'gold'
              ? light
                ? 'bg-[#C5A15A]/70'
                : 'bg-[#C5A15A]'
              : light
              ? 'bg-white/60'
              : 'bg-[#0B3095]'
          }`}
        />
      </div>
      <div
        className={`h-[1px] w-12 sm:w-20 ${
          light ? 'bg-white/20' : 'bg-[#E4E9F2]'
        }`}
      />
    </div>
  );
};

