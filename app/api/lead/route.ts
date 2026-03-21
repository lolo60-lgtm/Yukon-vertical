import { NextRequest, NextResponse } from "next/server"

const BOT_TOKEN = "8631163258:AAGRUXUj7Fl1ZEwekvKoHDo78qpKssYfCDQ"
const CHAT_ID = "-5248297040"
const TG_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

export async function POST(req: NextRequest) {
  try {
    const { name, phone } = await req.json()

    if (!name || !phone) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const text =
      `🚨 *Новая заявка с сайта Yukon KOD 95!*\n\n` +
      `👤 *Имя:* ${name}\n` +
      `📞 *Телефон:* ${phone}`

    const res = await fetch(TG_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    })

    const data = await res.json()

    if (!data.ok) {
      return NextResponse.json({ error: "Telegram error", detail: data }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
