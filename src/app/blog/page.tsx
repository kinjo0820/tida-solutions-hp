import React from 'react';
import Link from 'next/link';
import { posts } from '../../lib/posts';

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-50 font-sans">

      <main className="py-24 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-white">ブログ</h1>
        <p className="text-slate-400 mb-8">最新の技術や導入事例、Tidaの活動レポートを掲載します（ダミー記事）。</p>

        <div className="grid gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              {post.cover && (
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img src={post.cover} alt={post.title} className="w-full h-48 object-cover" />
                </div>
              )}
              <h2 className="text-2xl font-bold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-[var(--accent)]">{post.title}</Link>
              </h2>
              <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                {post.author && <span>{post.author} •</span>}
                <span>{post.date}</span>
                {post.readingTime && <span> · {post.readingTime}</span>}
              </div>
              <p className="text-slate-400">{post.excerpt}</p>
              <div className="mt-4">
                <Link href={`/blog/${post.slug}`} className="text-[var(--accent)] font-medium">続きを読む →</Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-slate-700">© 2026 Tida Solutions Inc.</footer>
    </div>
  );
}
