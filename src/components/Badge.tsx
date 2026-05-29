import React from 'react';

interface BadgeProps {
  number: string;
  text: string;
}

export default function Badge({ number, text }: BadgeProps) {
  return (
    <div className="inline-flex items-center select-none font-sans uppercase text-[12px] tracking-[0.2em] font-bold text-brand-cyan mb-5">
      <span>[ {text} ]</span>
    </div>
  );
}
