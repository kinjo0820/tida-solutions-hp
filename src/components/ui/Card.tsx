import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card = ({ children, className = "", hoverEffect = true }: CardProps) => {
    return (
        <div className={`
      glass rounded-3xl p-8 border border-[var(--card-border)] bg-[var(--card-bg)]
      ${hoverEffect ? 'hover:border-[var(--primary)]/50 hover:bg-[var(--card-bg)]/80 transition-all duration-300 group' : ''}
      ${className}
    `}>
            {children}
        </div>
    );
};
