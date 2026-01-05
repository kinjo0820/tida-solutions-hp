import React from 'react';
import Link from 'next/link';
import { Mail, Briefcase, Users } from 'lucide-react';

export default function Recruit() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-50 font-sans selection:bg-[var(--accent)/30]">


      <main className="py-24 px-6 max-w-4xl mx-auto">
        <div className="max-w-4xl mx-auto mb-6">
          <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop" alt="Team" className="rounded-2xl shadow-lg w-full h-56 object-cover" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">採用情報</h1>
        <p className="text-slate-400 mb-10">私たちはAIで社会を再設計する仲間を募集しています。実務でAIを活用し、事業と社会にインパクトを出したい方を歓迎します。</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Briefcase size={18}/> 募集職種</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
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
          <ul className="text-slate-300 list-disc list-inside space-y-2">
            <li>研究レベルの技術を実案件で試せる環境</li>
            <li>裁量の大きいプロジェクトと短い意思決定のサイクル</li>
            <li>国際的なパートナーとの協業機会</li>
            <li>リモート／フレックス制度（応相談）</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Mail size={18}/> 応募方法</h2>
          <p className="text-slate-300 mb-4">以下のメールアドレスに、履歴書（PDF）と職務経歴書（任意）をお送りください。件名は「採用応募：職種名 - 氏名」としてください。</p>
          <a href="mailto:taichi@tida-intern.com?subject=採用応募" className="inline-flex items-center gap-2 bg-(--accent) text-white px-4 py-3 rounded-md font-bold hover:opacity-90 transition">taichi@tida-intern.com</a>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">その他</h3>
          <p className="text-slate-400">ご質問や採用に関するご相談は上記メールアドレスまでお気軽にご連絡ください。</p>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-white/5 text-center text-slate-400">© 2026 Tida Solutions Inc.</footer>
    </div>
  );
}
