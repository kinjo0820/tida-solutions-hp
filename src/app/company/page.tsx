import React from 'react';
import Link from 'next/link';

export default function Company() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">

      <main className="py-24 px-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Company</h1>

        <section className="mb-8 grid md:grid-cols-2 gap-6 bg-white border border-[var(--card-border)] rounded-2xl p-6 shadow-sm">
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
        </section>

        <section className="bg-white border border-[var(--card-border)] rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-3">会社概要（概要文）</h2>
          <p className="text-slate-600">Tida SolutionsはAIを通じて社会の課題を解決することを目的に設立されました。受託開発と自社プロダクトを中心に事業を展開しています。沖縄を拠点に、国内外の技術と連携しながら社会実装を進めています。</p>
        </section>

      </main>

      <footer className="py-12 px-6 border-t border-orange-100 text-center text-slate-500 bg-[var(--section-alt)]">© 2026 Tida Solutions Inc.</footer>
    </div>
  );
}
