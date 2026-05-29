import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CtaButtonProps {
  text: string;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'blue' | 'green';
  icon?: LucideIcon;
  className?: string;
  id?: string;
}

export default function CtaButton({
  text,
  to,
  onClick,
  variant = 'primary',
  icon: Icon = ArrowRight,
  className = '',
  id,
}: CtaButtonProps) {
  const bgClass = 
    variant === 'primary' ? 'bg-transparent border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white' : 
    variant === 'green' ? 'bg-transparent border-[#00995D] text-[#00995D] hover:bg-[#00995D] hover:text-white' :
    variant === 'blue' ? 'bg-transparent border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white' :
    'bg-transparent border-text-secondary text-text-secondary hover:bg-text-secondary hover:text-white';
  const textClass = '';
  const iconBgClass = 'bg-transparent';
  const iconColorClass = 
    variant === 'primary' ? 'text-brand-cyan group-hover:text-white' : 
    variant === 'green' ? 'text-[#00995D] group-hover:text-white' : 
    variant === 'blue' ? 'text-brand-blue group-hover:text-white' : 
    'text-text-secondary group-hover:text-white';

  const buttonContent = (
    <div className="flex items-center gap-4">
      {/* Efeito de rolagem de texto vertical */}
      <div className="overflow-hidden h-[20px] flex flex-col text-left">
        <span className="h-[20px] leading-[20px] block transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full">
          {text}
        </span>
        <span className="h-[20px] leading-[20px] block transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full">
          {text}
        </span>
      </div>
      
      {/* Ícone rotativo associado */}
      <div className={`w-7 h-7 flex items-center justify-center transition-all duration-300 ${iconBgClass}`}>
        <Icon className={`w-4 h-4 ${iconColorClass} transform -rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-0`} />
      </div>
    </div>
  );

  const containerClasses = `group inline-flex items-center justify-center select-none font-sans font-bold text-[13px] uppercase tracking-wider pl-6 pr-3 py-2.5 cursor-pointer transition-all duration-300 rounded-full border-2 ${bgClass} ${className}`;

  if (to) {
    return (
      <Link id={id} to={to} className={containerClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button id={id} onClick={onClick} className={containerClasses}>
      {buttonContent}
    </button>
  );
}
