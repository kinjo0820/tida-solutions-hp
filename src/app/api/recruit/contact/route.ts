import { NextRequest, NextResponse } from 'next/server';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: 'リクエストが不正です。' }, { status: 400 });
  }

  const { name, email, job, message } = body as {
    name?: string;
    email?: string;
    job?: string;
    message?: string;
  };

  if (!name?.trim() || !email?.trim() || !job?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'すべての項目を入力してください。' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'メールアドレスの形式が正しくありません。' }, { status: 400 });
  }

  if (message.trim().length < 10) {
    return NextResponse.json({ error: 'メッセージは10文字以上で入力してください。' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return NextResponse.json({ error: 'メール送信の設定が完了していません。' }, { status: 500 });
  }

  const adminEmail = 'taichi@tida-intern.com';
  const fromAddress = 'Tida Solutions Careers <onboarding@resend.dev>';

  // Send confirmation email to applicant
  const confirmationRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromAddress,
      to: [email],
      subject: '【Tida Solutions】採用お問い合わせを受け付けました',
      html: `
        <p>${name} 様</p>
        <p>この度は Tida Solutions の採用にご興味をお持ちいただきありがとうございます。</p>
        <p>以下の内容でお問い合わせを受け付けました。担当者より改めてご連絡いたします。</p>
        <hr />
        <p><strong>氏名：</strong>${name}</p>
        <p><strong>メールアドレス：</strong>${email}</p>
        <p><strong>希望職種：</strong>${job}</p>
        <p><strong>メッセージ：</strong></p>
        <p style="white-space:pre-wrap">${message}</p>
        <hr />
        <p>Tida Solutions Inc.<br />採用担当</p>
      `,
    }),
  });

  if (!confirmationRes.ok) {
    const err = await confirmationRes.text();
    console.error('Failed to send confirmation email:', err);
    return NextResponse.json({ error: 'メール送信に失敗しました。しばらく経ってからお試しください。' }, { status: 500 });
  }

  // Send notification email to admin
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromAddress,
      to: [adminEmail],
      subject: `【採用問い合わせ】${name} 様より（${job}）`,
      html: `
        <p>採用ページからお問い合わせがありました。</p>
        <hr />
        <p><strong>氏名：</strong>${name}</p>
        <p><strong>メールアドレス：</strong><a href="mailto:${email}">${email}</a></p>
        <p><strong>希望職種：</strong>${job}</p>
        <p><strong>メッセージ：</strong></p>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    }),
  });

  return NextResponse.json({ success: true });
}
