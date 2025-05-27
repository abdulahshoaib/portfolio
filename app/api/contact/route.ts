import { NextResponse } from 'next/server';
import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)

const WEBHOOK_URL = process.env.WEB_HOOK || "";

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
