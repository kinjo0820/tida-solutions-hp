import { ReactNode } from "react";

interface HeroProps {
    title: ReactNode;
    subtitle: string;
    children?: ReactNode;
    backgroundImage?: string;
    rightContent?: ReactNode;
}

export const Hero = ({ title, subtitle, children, backgroundImage, rightContent }: HeroProps) => {
    return (
        <section className="relative pt-32 pb-24 px-6 flex items-center min-h-[90vh] overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 -z-10 bg-[var(--background)]">
                {backgroundImage && (
                    <>
                        <img src={backgroundImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white"></div>
                    </>
                )}
                {!backgroundImage && (
                    <>
                        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-orange-100 blur-[120px] rounded-full animate-blob opacity-70"></div>
                        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-sky-100 blur-[120px] rounded-full animate-blob animation-delay-2000 opacity-70"></div>
                        <div className="absolute top-[40%] left-[40%] w-[40%] h-[40%] bg-pink-100 blur-[120px] rounded-full animate-blob animation-delay-4000 opacity-50"></div>
                    </>
                )}
            </div>

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-sm font-mono mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
                        </span>
                        Human Progressを加速させる
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-slate-900">
                        {title}
                    </h1>

                    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        {children}
                    </div>
                </div>

                <div className="relative hidden lg:block h-full min-h-[500px] flex items-center justify-center">
                    {rightContent ? rightContent : (
                        <div className="w-full h-full relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/5 to-[var(--secondary)]/5 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                            {/* Visual Element Placeholder */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-3xl border border-slate-200 bg-white/60 backdrop-blur-sm rotate-3 hover:rotate-0 transition-all duration-700 ease-out shadow-2xl overflow-hidden group">
                                <img src="/img/tech_hero.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-3xl border border-slate-200 bg-white/40 backdrop-blur-sm -rotate-3 hover:rotate-0 transition-all duration-700 ease-out z-[-1]"></div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
