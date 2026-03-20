"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, X, MessageCircle } from "lucide-react"

const PHONE = "+48452650325"
const PHONE_DISPLAY = "+48 452 650 325"
const TELEGRAM = "https://t.me/MarynaKod95"
const WHATSAPP = `https://wa.me/48452650325`
const VIBER = `viber://chat?number=48452650325`

export function FloatingButtons() {
  const [chatOpen, setChatOpen] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chatOpen) return
    const handler = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setChatOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [chatOpen])

  return (
    <div className="fixed bottom-6 right-4 z-[900] flex flex-col items-end gap-3 sm:right-6">

      {/* Карточка мессенджеров */}
      <div
        ref={cardRef}
        className={`mb-1 transition-all duration-300 ease-out ${
          chatOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl bg-white p-5 shadow-2xl border border-border w-60">
          <div className="flex items-start justify-between mb-4 gap-2">
            <p className="font-serif text-base font-bold text-foreground leading-snug">
              {"Есть вопросы?"}
              <br />
              <span className="text-accent">{"Свяжитесь с нами!"}</span>
            </p>
            <button
              onClick={() => setChatOpen(false)}
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:scale-[1.02] hover:border-accent/30 hover:bg-accent/5">
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#2AABEE" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
              {"Telegram"}
            </a>

            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:scale-[1.02] hover:border-accent/30 hover:bg-accent/5">
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              {"WhatsApp"}
            </a>

            <a href={VIBER}
              className="flex items-center gap-3 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:scale-[1.02] hover:border-accent/30 hover:bg-accent/5">
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#7360F2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.2 2 11.4c0 2.9 1.4 5.5 3.7 7.2V22l3.7-1.8c.8.2 1.7.3 2.6.3 5.5 0 10-4.2 10-9.4C22 6.2 17.5 2 12 2z" />
                <path d="M14.5 13.5c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.2-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.4.3-.6.1-.2 0-.4-.1-.5L5.9 7c-.2-.4-.5-.5-.8-.4-.5.1-1.3.7-1.5 1.4-.4 1.1-.1 2.7 1.4 4.5 1.8 2.2 3.6 3 5.6 3.6 1 .3 1.9.2 2.6-.1.8-.4 1.3-1.1 1.4-1.7.1-.5-.1-.7-.6-.8z" />
              </svg>
              {"Viber"}
            </a>

            <a href={`tel:${PHONE}`}
              className="flex items-center gap-3 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:scale-[1.02] hover:border-accent/30 hover:bg-accent/5">
              <Phone className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.6} />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* Плавающие кнопки */}
      <div className="flex flex-col items-center gap-2.5">
        {/* Телефон */}
        <a href={`tel:${PHONE}`} aria-label="Позвонить"
          className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-accent text-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl active:scale-95">
          <Phone className="h-5 w-5" strokeWidth={2} />
        </a>

        {/* Чат */}
        <button onClick={() => setChatOpen((p) => !p)} aria-label="Открыть мессенджеры"
          className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-foreground text-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl active:scale-95">
          {chatOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <MessageCircle className="h-5 w-5" strokeWidth={2} />}
        </button>
      </div>
    </div>
  )
}
