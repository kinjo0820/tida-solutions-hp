import React from 'react';
import Link from 'next/link';
import { Terminal, Cpu, Globe, Zap, BarChart3, Binary } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-50 font-sans selection:bg-orange-500/30">
      {/* 太陽（Tida）をイメージした背景グラデーション */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
              <span className="text-white font-black text-sm">TS</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Tida Solutions</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#mission" className="hover:text-[color:var(--accent)] transition-colors">Mission</a>
            <a href="#solutions" className="hover:text-[color:var(--accent)] transition-colors">Solutions</a>
            <a href="#projects" className="hover:text-[color:var(--accent)] transition-colors">Projects</a>
            <Link href="/recruit" className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-[color:var(--accent)] hover:text-white transition-all">
              採用
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-mono mb-8">
          <Binary size={14} />
          <span>v1.0.0: Global AI Implementation Office</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
          Society to <br /><span className="text-orange-500">AI-Native</span>.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
          現存の社会をAIネイティブに再設計し、人類の進歩を加速させる。<br className="hidden md:block" />
          Tida Solutionsは、AI社会実装を通じた「新しい遊び」を創造します。
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-all shadow-xl shadow-orange-600/20">
            社会実装プロジェクト
          </button>
          <button className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
            受託開発を相談する
          </button>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Cpu />, title: "AI受託開発・コンサルティング", desc: "論文実装から本番導入まで、AI技術で課題解決を加速します。" },
              { icon: <Zap />, title: "AIを活用した自社事業", desc: "自社プロダクトでAIを実践的に活用し、価値のスケールを目指します。" },
              { icon: <Globe />, title: "グローバルブリッジ", desc: "海外の先端技術と日本市場を繋ぎ、グローバルな価値提供を行います。" }
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-all">
                <div className="w-14 h-14 bg-white/5 text-orange-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains */}
      <section id="projects" className="py-32 px-6 bg-gradient-to-b from-transparent to-orange-950/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Focus Domains</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["不動産", "飲食", "観光", "スポーツ", "小売", "教育", "店舗", "テーマパーク"].map((name) => (
              <div key={name} className="py-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.05] transition-all cursor-default group">
                <span className="text-slate-500 group-hover:text-orange-400 transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 text-center">
        <p className="text-slate-500 text-sm mb-4">© 2026 Tida Solutions Inc.</p>
        <p className="text-slate-600 text-xs font-mono">// Accelerating Human Progress with AI-Native Solutions</p>
      </footer>
    </div>
  );
}