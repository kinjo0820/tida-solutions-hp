import React from 'react';
import Link from 'next/link';
import { posts, getPostBySlug } from '../../../lib/posts';

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug as string);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#050505] text-slate-50 font-sans">
        <main className="py-24 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">Article not found</h1>
          <p className="text-slate-400">The requested article does not exist or has been removed.</p>
          <div className="mt-6"><Link href="/blog" className="text-(--accent)">Back to posts</Link></div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-slate-50 font-sans">

      <main className="py-24 px-6 max-w-3xl mx-auto">
        <article className="p-10 bg-white/5 border border-white/5 rounded-2xl shadow-sm max-w-3xl mx-auto">
          {post.cover && (
            <div className="mb-6 overflow-hidden rounded-xl">
              <img src={post.cover} alt={post.title} className="w-full h-64 object-cover" />
            </div>
          )}
          <h1 className="text-3xl font-bold mb-2 text-white">{post.title}</h1>
          <div className="flex items-center gap-3 text-sm text-slate-400 mb-6">
            {post.author && <span>{post.author} •</span>}
            <span>{post.date}</span>
            {post.readingTime && <span> · {post.readingTime}</span>}
          </div>
          <div className="prose prose-invert prose-lg text-slate-200 max-w-none leading-7" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mt-8"><Link href="/blog" className="text-[var(--accent)]">← 記事一覧に戻る</Link></div>
        </article>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-slate-700">© 2026 Tida Solutions Inc.</footer>
    </div>
  );
}
