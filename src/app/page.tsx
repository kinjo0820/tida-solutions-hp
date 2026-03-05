import React from 'react';
import Link from 'next/link';
import { Terminal, Cpu, Globe, Zap, BarChart3, Binary } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
      {/* 太陽（Tida）をイメージした背景グラデーション */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-400/25 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-300/20 blur-[120px] rounded-full"></div>
      </div>



      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-xs font-mono mb-8">
          <Binary size={14} />
          <span>v1.0.0: Global AI Implementation Office</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 text-[var(--foreground)]">
          Society to <br /><span className="text-(--accent)">AI-Native</span>.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
          現存の社会をAIネイティブに再設計し、人類の進歩を加速させる。<br className="hidden md:block" />
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-[var(--accent)] text-white px-10 py-4 rounded-full font-bold text-lg hover:opacity-95 transition-all shadow-xl">
            社会実装プロジェクト
          </button>
          <button className="bg-white border border-orange-200 text-slate-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all">
            受託開発を相談する
          </button>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Cpu />, title: "AI導入支援", desc: "コンサルティング・受託開発を超えて、AI技術で課題解決を加速します。" },
              { icon: <Zap />, title: "AIを活用した自社事業", desc: "自社プロダクトでAIを実践的に活用し、価値のスケールを目指します。" }
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-3xl bg-white border border-orange-100 shadow-sm hover:shadow-md hover:border-(--accent) transition-all">
                <div className="w-14 h-14 bg-orange-50 text-(--accent) rounded-2xl flex items-center justify-center mb-8 group-hover:bg-(--accent) group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains */}
      <section id="projects" className="py-32 px-6 bg-[var(--section-alt)]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-[var(--foreground)]">Focus Domains</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["不動産", "飲食", "観光", "スポーツ", "小売", "教育", "店舗", "テーマパーク"].map((name) => (
              <div key={name} className="py-8 rounded-2xl border border-orange-100 bg-white hover:bg-orange-50 transition-all cursor-default group shadow-sm">
                <span className="text-slate-500 group-hover:text-(--accent) transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section id="company" className="py-20 px-6 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">会社概要</h2>
          <div className="grid md:grid-cols-2 gap-6 text-slate-600">
            <div>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm text-slate-500">会社名</dt>
                  <dd className="font-medium text-[var(--foreground)]">株式会社Tida Solutions（株式会社ティーダソリューションズ）</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">所在地</dt>
                  <dd className="font-medium">〒904-0004 沖縄県沖縄市中央1丁目7-8 2階 KSA Works</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">代表者</dt>
                  <dd className="font-medium">代表取締役社長 金城 太一（Kinjo Taichi）</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">設立</dt>
                  <dd className="font-medium">2024年11月26日</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500">メンバー数</dt>
                  <dd className="font-medium">2名（2024年12月現在）</dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="text-sm text-slate-500">お問い合わせ</h3>
              <p className="mt-2 text-slate-600">メール: <a href="mailto:taichi@tida-intern.com" className="text-(--accent) font-medium">taichi@tida-intern.com</a></p>
              <p className="mt-2 text-slate-600">営業時間: 平日 10:00〜19:00</p>
              <p className="mt-4 text-slate-500">Google マップ: <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=%EF%BC%91904-0004%20%E6%B2%96%E7%B8%84%E7%9C%8C%E6%B2%96%E7%B8%84%E5%B8%82%E4%B8%AD%E5%A4%AE1%E4%B8%81%E7%9B%AE7-8%202%E9%9A%8E%20KSA%20Works" className="text-(--accent) font-medium">地図で開く</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-orange-100 text-center bg-[var(--section-alt)]">
        <p className="text-slate-500 text-sm mb-4">© 2026 Tida Solutions Inc.</p>
        <p className="text-slate-400 text-xs font-mono">// Accelerating Human Progress with AI-Native Solutions</p>
      </footer>
    </div>
  );
}
