import type { NextApiRequest, NextApiResponse } from 'next'

const WEBHOOK_URL = "https://discord.com/api/webhooks/1366327864504614952/cv4hqemt1nonBymde6qk9RSc_L2qRQge1e6uUTG_WUnOkFi-TnCzz9u_PAPyhC_zz_j0"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

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

    return res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
