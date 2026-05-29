import React from 'react';

interface BadgeProps {
  number: string;
  text: string;
  themeColor?: 'cyan' | 'green';
}

export default function Badge({ number, text, themeColor = 'cyan' }: BadgeProps) {
  const colorClass = themeColor === 'green' ? 'text-[#00995D]' : 'text-brand-cyan';
  return (
    <div className={`inline-flex items-center select-none font-sans uppercase text-[12px] tracking-[0.2em] font-bold mb-5 ${colorClass}`}>
      <span>[ {text} ]</span>
    </div>
  );
}
