export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  cover?: string;
  readingTime?: string;
  author?: string;
};

export const posts: Post[] = [
  {
    slug: "ai-implementation",
    title: "AI導入の考え方",
    date: "2025-12-01",
    excerpt: "PoCから本番運用まで、現場で価値を出すための設計と運用のポイントを具体的に解説します。",
    cover: "/cover-ai-implementation.svg",
    readingTime: "6 min",
    author: "Tida Solutions",
    content: `
      <h2>はじめに</h2>
      <p>AIを導入する際に最も重要なのは「何を解決したいのか」を定義することです。技術的に優秀なモデルを作っても、業務の本質的な課題に結びつかなければ意味がありません。</p>

      <h2>実践的なステップ</h2>
      <ul>
        <li><strong>課題定義:</strong> KPIと成功基準（業務指標）を明確にする。</li>
        <li><strong>データ準備:</strong> データの品質評価、欠損・偏りの確認、アノテーション方針の策定。</li>
        <li><strong>小さなPoC:</strong> 早い検証で仮説を捨てる。MVPで効果を測る。</li>
        <li><strong>モデル本番化:</strong> 推論性能だけでなく、可観測性・再現性・推論コストを含めて設計する。</li>
        <li><strong>運用と改善:</strong> モニタリング、データドリフト検知、継続的な改善プロセスを構築する。</li>
      </ul>

      <h2>よくある落とし穴</h2>
      <p>よくある失敗は「モデルの精度のみを追ってしまう」ことです。ビジネスの改善に直結する指標を最初に決め、その改善に対する貢献を評価しましょう。</p>

      <h2>まとめ</h2>
      <p>AI導入は技術と業務の両輪で進めることが鍵です。小さく始めて、運用で価値を出すことを優先してください。</p>
    `,
  },
  {
    slug: "productizing-ai",
    title: "AIプロダクト化の進め方",
    date: "2025-10-15",
    excerpt: "ユーザー課題をプロダクトに落とし込み、早く検証してスケールさせるための実践的な手順を紹介します。",
    cover: "/cover-productizing-ai.svg",
    readingTime: "5 min",
    author: "Tida Solutions",
    content: `
      <h2>プロダクト化の心構え</h2>
      <p>AIは万能ではありません。アイデアを素早く検証し、ユーザーの実際の行動変化をもって価値を判断することが重要です。</p>

      <h2>フェーズごとの進め方</h2>
      <ol>
        <li><strong>発見（Discovery）:</strong> ユーザーの課題を深掘りし、実際に価値が出る仮説を立てる。</li>
        <li><strong>検証（Prototype）:</strong> 最小限の機能で仮説を検証し、定量的KPIで成果を測る。</li>
        <li><strong>MVP→本番:</strong> 成果が確認できたら拡張し、信頼性・運用性を追加する。</li>
      </ol>

      <h2>組織と運用</h2>
      <p>プロダクトにおけるAIは、データエンジニア・MLエンジニア・プロダクトマネージャーの連携が不可欠です。短いフィードバックループを回し続ける体制を作りましょう。</p>

      <h2>まとめ</h2>
      <p>スピードと計量性を重視し、失敗を早く学びに変える文化がAIプロダクト成功の鍵です。</p>
    `,
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
