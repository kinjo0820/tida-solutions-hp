import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary' | 'ghost';
    className?: string;
    onClick?: () => void;
    icon?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
    children,
    href,
    variant = 'primary',
    className = '',
    onClick,
    icon = false,
    size = 'md'
}: ButtonProps) => {
    const sizeStyles = {
        sm: "px-4 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-lg"
    };

    const baseStyles = `inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 ${sizeStyles[size]}`;

    const variants = {
        primary: "bg-gradient-to-r from-[var(--primary)] to-[#ea580c] text-white hover:opacity-90 hover:scale-[1.02] shadow-[0_4px_14px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)]",
        secondary: "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm",
        ghost: "text-slate-600 hover:text-[var(--primary)] hover:bg-orange-50/50"
    };

    const content = (
        <>
            {children}
            {icon && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                className={`${baseStyles} ${variants[variant]} ${className} group`}
                onClick={onClick}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className} group`}
            onClick={onClick}
        >
            {content}
        </button>
    );
};
