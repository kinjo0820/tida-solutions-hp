'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const jobOptions = [
  'AIエンジニア（受託開発・研究推進）',
  'プロダクトマネージャー（AIプロダクト）',
  'グロース・パートナー（海外技術連携）',
  'その他',
];

export default function RecruitContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/recruit/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, job, message }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setJob('');
        setMessage('');
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || 'エラーが発生しました。しばらく経ってからお試しください。');
        setStatus('error');
      }
    } catch {
      setErrorMsg('ネットワークエラーが発生しました。');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle size={40} className="mx-auto mb-4 text-green-500" />
        <p className="text-lg font-bold text-green-700">送信が完了しました！</p>
        <p className="mt-2 text-slate-600">
          お問い合わせいただきありがとうございます。確認メールをお送りしましたので、ご確認ください。
          担当者より折り返しご連絡いたします。
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-slate-500 underline hover:text-slate-700"
        >
          別のメッセージを送る
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="recruit-name" className="block text-sm font-semibold text-slate-700 mb-1">
          氏名 <span className="text-red-500">*</span>
        </label>
        <input
          id="recruit-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="山田 太郎"
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-orange-100 transition"
        />
      </div>

      <div>
        <label htmlFor="recruit-email" className="block text-sm font-semibold text-slate-700 mb-1">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          id="recruit-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="taro@example.com"
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-orange-100 transition"
        />
      </div>

      <div>
        <label htmlFor="recruit-job" className="block text-sm font-semibold text-slate-700 mb-1">
          希望職種 <span className="text-red-500">*</span>
        </label>
        <select
          id="recruit-job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          required
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-800 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-orange-100 transition"
        >
          <option value="">選択してください</option>
          {jobOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="recruit-message" className="block text-sm font-semibold text-slate-700 mb-1">
          メッセージ <span className="text-red-500">*</span>
        </label>
        <textarea
          id="recruit-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          minLength={10}
          rows={5}
          placeholder="自己紹介や応募動機、ご質問などをご記入ください。"
          className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-orange-100 transition resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-600 text-sm">
          <AlertCircle size={16} />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-3 font-bold text-white shadow-[0_4px_14px_rgba(249,115,22,0.3)] transition hover:opacity-90 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            送信中…
          </>
        ) : (
          <>
            <Send size={16} />
            送信する
          </>
        )}
      </button>
    </form>
  );
}
