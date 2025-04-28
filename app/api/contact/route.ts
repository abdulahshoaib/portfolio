import { NextResponse } from 'next/server';

const WEBHOOK_URL = "https://discord.com/api/webhooks/1366327864504614952/cv4hqemt1nonBymde6qk9RSc_L2qRQge1e6uUTG_WUnOkFi-TnCzz9u_PAPyhC_zz_j0";

// Named export for POST
export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const discordRes = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `📬 **New Contact Message**\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:**\n${message}`,
      }),
    });

    if (!discordRes.ok) {
      throw new Error('Failed to send message to Discord.');
    }

    return NextResponse.json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
