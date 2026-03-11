import React from 'react';
import Link from 'next/link';
import { Mail, Briefcase, Users } from 'lucide-react';
import RecruitContactForm from '@/components/RecruitContactForm';

export default function Recruit() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">


      <main className="py-24 px-6 max-w-4xl mx-auto">
        <div className="max-w-4xl mx-auto mb-6">
          <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop" alt="Team" className="rounded-2xl shadow-lg w-full h-56 object-cover" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">採用情報</h1>
        <p className="text-slate-600 mb-10">私たちはAIで社会を再設計する仲間を募集しています。実務でAIを活用し、事業と社会にインパクトを出したい方を歓迎します。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Briefcase size={18}/> 募集職種</h2>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>
              AIエンジニア（受託開発・研究推進） — モデル実装・推論基盤・最適化
            </li>
            <li>
              プロダクトマネージャー（AIプロダクト） — 企画・PoC〜本番化の推進
            </li>
            <li>
              グロース・パートナー（海外技術連携） — 海外技術・事業のローカライズ
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Users size={18}/> 働くメリット</h2>
          <ul className="text-slate-600 list-disc list-inside space-y-2">
            <li>研究レベルの技術を実案件で試せる環境</li>
            <li>裁量の大きいプロジェクトと短い意思決定のサイクル</li>
            <li>国際的なパートナーとの協業機会</li>
            <li>リモート／フレックス制度（応相談）</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Mail size={18}/> 応募・お問い合わせ</h2>
          <p className="text-slate-600 mb-4">下記フォームからお気軽にお問い合わせください。メールでのご連絡も歓迎しております。</p>
          <a href="mailto:taichi@tida-intern.com?subject=採用応募" className="inline-flex items-center gap-2 bg-(--accent) text-white px-4 py-3 rounded-md font-bold hover:opacity-90 transition">taichi@tida-intern.com</a>
          <RecruitContactForm />
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-orange-100 text-center text-slate-500 bg-[var(--section-alt)]">© 2026 Tida Solutions Inc.</footer>
    </div>
  );
}
