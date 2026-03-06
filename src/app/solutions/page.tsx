import React from 'react';
import Link from 'next/link';
import { Cpu, Bot } from 'lucide-react';

export default function Solutions() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">

      <main className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Solutions</h1>
          <p className="text-slate-600 max-w-3xl mx-auto">私たちの事業領域ごとの提供価値と事例を紹介します。AI受託開発からAIエージェント・研究活動まで、AIを中心に幅広くカバーします。</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-white border border-[var(--card-border)] shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-100 text-(--accent) rounded-lg flex items-center justify-center"><Cpu size={18} /></div>
              <h3 className="text-xl font-bold">AI受託開発・コンサルティング</h3>
            </div>
            <p className="text-slate-600">最新の研究を踏まえたモデル実装と、現場への投資対効果を重視したコンサルティングを提供します。PoCから本番運用・SREまで支援。</p>
            <ul className="mt-3 text-slate-500 list-disc list-inside space-y-1">
              <li>モデル実装・最適化</li>
              <li>推論基盤・データパイプライン構築</li>
              <li>効果測定と改善サイクル構築</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[var(--card-border)] shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-100 text-(--accent) rounded-lg flex items-center justify-center"><Bot size={18} /></div>
              <h3 className="text-xl font-bold">AIエージェント開発・研究</h3>
            </div>
            <p className="text-slate-600">自律型AIエージェントの研究・開発を通じて、業務の知的自動化と次世代AI活用を推進します。最新モデルの社会実装を加速します。</p>
            <ul className="mt-3 text-slate-500 list-disc list-inside space-y-1">
              <li>マルチエージェントシステム設計・実装</li>
              <li>LLM・生成AI活用ソリューション開発</li>
              <li>AI研究の社会実装・プロトタイピング</li>
            </ul>
          </div>
        </div>

        <section className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold mb-3">事業の強み</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">企業や社会が直面する課題はますます複雑化し、その中心には必ず&ldquo;データ&rdquo;が存在します。データ領域に特化したプロフェッショナル集団として、お客様の多様な課題に寄り添い、ビジネス成長を力強く支援します。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[var(--card-border)] shadow-sm">
              <h3 className="font-bold text-lg mb-2">Strengths 01 — 一気通貫で価値を創出</h3>
              <p className="text-slate-600 mb-2">課題探索・戦略立案から、データ基盤・開発・運用まで、ワンストップで支援します。まずは丁寧にヒアリングし、最適化されたソリューションをご提案します。</p>
              <p className="text-slate-600 font-semibold">提供するソリューション：</p>
              <ul className="text-slate-500 list-disc list-inside ml-4 space-y-1">
                <li>企画・構想立案・分析・施策立案（業務改革、マーケティング、AIアドバイザリー）</li>
                <li>データ基盤構築、ETL/ELT 開発</li>
                <li>AIモデル構築、PoC（実証実験）</li>
                <li>AI組込システム・アプリ開発、ダッシュボード開発</li>
                <li>MLOps/LLMOps、運用・保守、分析BPO</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[var(--card-border)] shadow-sm">
              <h3 className="font-bold text-lg mb-2">Strengths 02 — 高い専門性と実装力</h3>
              <p className="text-slate-600">データテクノロジーに精通したスペシャリストが在籍し、最先端の知見と豊富なプロジェクト経験を持ちます。高難度テーマにも実現可能なアプローチで応えます。</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[var(--card-border)] shadow-sm">
              <h3 className="font-bold text-lg mb-2">Strengths 03 — 業界を問わない柔軟性</h3>
              <p className="text-slate-600">製造、運輸、小売、金融、通信など多様な業界での実績があります。お客様固有の課題に迅速にキャッチアップし、伴走型で価値提供します。</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">サービス</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[var(--card-border)] shadow-sm">
              <h4 className="font-semibold mb-2">AI活用コンサルティング</h4>
              <p className="text-slate-600 mb-2">経営課題から現場までを俯瞰し、戦略策定から実装・定着化まで一気通貫で支援します。PoCから本番導入、業務定着まで伴走します。</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[var(--card-border)] shadow-sm">
              <h4 className="font-semibold mb-2">データ分析基盤構築</h4>
              <p className="text-slate-600 mb-2">クラウドアーキテクチャを設計し、AI-readyなデータ基盤を実現します。ETL/ELT、データ品質改善、スケーラビリティを重視した設計。</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[var(--card-border)] shadow-sm">
              <h4 className="font-semibold mb-2">システム/アプリケーション開発</h4>
              <p className="text-slate-600 mb-2">AIモデル組込みやアプリ開発、ダッシュボード構築まで行い、現場への浸透を支援します。運用・保守・改善も対応可能です。</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[var(--card-border)] shadow-sm">
              <h4 className="font-semibold mb-2">AIエージェント開発・研究</h4>
              <p className="text-slate-600 mb-2">LLMや生成AIを活用した自律型エージェントの設計・実装を行います。マルチエージェントシステムや最新AI技術の社会実装に取り組みます。</p>
            </div>
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link href="/recruit" className="inline-block bg-(--accent) text-black px-6 py-3 rounded-full font-bold">Work with us</Link>
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-orange-100 text-center text-slate-500 bg-[var(--section-alt)]">© 2026 Tida Solutions Inc.</footer>
    </div>
  );
}
