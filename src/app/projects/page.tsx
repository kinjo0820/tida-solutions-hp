import React from 'react';
import Link from 'next/link';

const DOMAIN_DESCRIPTIONS: Record<string, string> = {
  '不動産': '物件情報×AIで価値評価や需要予測を行い、開発・運用の意思決定を支援します。',
  '飲食': '需要予測・メニュー最適化・オペレーション効率化で店舗の収益向上を支援します。',
  '観光': '訪客行動分析とパーソナライズで体験価値を高める施策を実装します。',
  'スポーツ': 'データ解析で競技力向上やファン体験の強化をサポートします。',
  '小売': '在庫最適化やレコメンデーションで売上改善を図ります。',
  '教育': '学習データを活用したパーソナライズ学習・評価支援を提供します。',
  '店舗': '店内動線・スタッフシフト最適化など現場改善を進めます。',
  'テーマパーク': '体験設計と来場者分析でリピートと満足度を向上させます。',
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">

      <main className="py-24 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">Projects & Focus Domains</h1>
        <p className="text-slate-600 mb-8">私たちが重点的に取り組む分野と、そこでの実装例・価値を紹介します。</p>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(DOMAIN_DESCRIPTIONS).map(([name, desc]) => (
            <div key={name} className="p-6 rounded-2xl bg-white border border-[var(--card-border)] shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-[var(--foreground)]">{name}</h3>
              <p className="text-slate-500">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/recruit" className="inline-block bg-(--accent) text-white px-6 py-3 rounded-full font-bold">Partner with us</Link>
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-orange-100 text-center text-slate-500 bg-[var(--section-alt)]">© 2026 Tida Solutions Inc.</footer>
    </div>
  );
}
