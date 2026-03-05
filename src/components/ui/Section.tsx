import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    containerClassName?: string;
}

export const Section = ({
    children,
    id,
    className = "",
    containerClassName = ""
}: SectionProps) => {
    return (
        <section id={id} className={`py-24 px-6 relative overflow-hidden ${className}`}>
            <div className={`max-w-7xl mx-auto relative z-10 ${containerClassName}`}>
                {children}
            </div>
        </section>
    );
};
