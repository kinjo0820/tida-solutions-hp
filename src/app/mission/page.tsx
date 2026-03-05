import React from 'react';
import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function Mission() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">

      <main className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[var(--accent)] text-xs font-mono mb-4">
            <Globe size={14} />
            <span>Mission</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Mission</h1>
          <p className="text-slate-600 max-w-3xl mx-auto">Society to AI-Native — 現存の社会をAIネイティブに再設計し、人類の進歩を加速させることを目指します。私たちは技術だけでなく、サービスや組織を含めた社会実装を推進します。</p>
        </div>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-[var(--card-border)] rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-3">何を目指すか</h2>
            <p className="text-slate-600 mb-4">AIをツールとしてではなく前提とした社会のあり方を作ること。現場の意思決定を改善し、人々の時間や選択肢を拡大するサービスを生み出します。</p>
            <ul className="list-disc list-inside text-slate-500 space-y-2">
              <li>実装重視：理想だけでなく、実運用で機能する実装を行う</li>
              <li>倫理と安全性の重視：社会実装に伴うリスクを最小化する設計</li>
              <li>国際的視野：海外技術の取り込みとローカライズ</li>
            </ul>
          </div>

          <div className="bg-white border border-[var(--card-border)] rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-3">実行方法</h2>
            <p className="text-slate-600 mb-4">短期間で価値を確認するPoCの実施と、運用まで視野に入れた設計で価値を継続的に提供します。ステークホルダーと共創し、現場に根ざした改善を重ねます。</p>
            <p className="text-slate-500">ご相談は <Link href="/recruit" className="text-[var(--accent)]">採用／パートナーシップ</Link> からお願いいたします。</p>
          </div>
        </section>

      </main>

      <footer className="py-12 px-6 border-t border-orange-100 text-center text-slate-500 bg-[var(--section-alt)]">© 2026 Tida Solutions Inc.</footer>
    </div>
  );
}
