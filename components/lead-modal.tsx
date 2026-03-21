"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { X, Phone, User, Send, CheckCircle } from "lucide-react"

// ── Глобальный триггер — можно вызвать из любого компонента ──
export function openLeadModal() {
  window.dispatchEvent(new CustomEvent("open-lead-modal"))
}

type Status = "idle" | "loading" | "success" | "error"

export function LeadModal() {
  const [open, setOpen] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [status, setStatus] = useState<Status>("idle")

  // Слушаем событие открытия
  useEffect(() => {
    const handler = () => {
      setOpen(true)
      setLeaving(false)
      setStatus("idle")
      setName("")
      setPhone("")
      setAgreed(false)
    }
    window.addEventListener("open-lead-modal", handler)
    return () => window.removeEventListener("open-lead-modal", handler)
  }, [])

  // Закрытие по Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close() }
    document.addEventListener("keydown", handler)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [open])

  const close = useCallback(() => {
    setLeaving(true)
    setTimeout(() => { setOpen(false); setLeaving(false) }, 350)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!agreed || !name.trim() || !phone.trim()) return
    setStatus("loading")
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim() }),
      })
      if (res.ok) {
        setStatus("success")
        setTimeout(() => close(), 2800)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (!open) return null

  return (
    <>
      {/* Затемнение фона */}
      <div
        className={`fixed inset-0 z-[9980] bg-foreground/50 backdrop-blur-sm transition-opacity duration-350 ${
          leaving ? "opacity-0" : "opacity-100"
        }`}
        onClick={close}
      />

      {/* Карточка */}
      <div
        className={`fixed left-1/2 top-1/2 z-[9981] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 transition-all duration-350 ease-out ${
          leaving ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="overflow-hidden rounded-3xl bg-background shadow-2xl">

          {/* Цветная полоска сверху */}
          <div className="h-1.5 w-full bg-gradient-to-r from-accent via-accent/80 to-accent/40" />

          {/* Тёмный заголовок */}
          <div className="bg-foreground px-7 pb-6 pt-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl">
                  {"Хотите записаться?"}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
                  {"Просто оставьте имя и номер телефона — мы сами перезвоним и всё оформим за вас!"}
                </p>
              </div>
              <button
                onClick={close}
                className="ml-3 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/60 transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground"
                aria-label="Закрыть"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Форма */}
          <div className="px-7 pb-7 pt-6">
            {status === "success" ? (
              // Экран успеха
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">{"Заявка отправлена!"}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {"Мы свяжемся с вами в ближайшее время. Спасибо!"}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* Имя */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lead-name" className="text-sm font-medium text-foreground">
                    {"Ваше имя"}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="lead-name"
                      type="text"
                      placeholder="Иван"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full rounded-xl border border-border bg-secondary py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                  </div>
                </div>

                {/* Телефон */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lead-phone" className="text-sm font-medium text-foreground">
                    {"Номер телефона"}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="lead-phone"
                      type="tel"
                      placeholder="+48 000 000 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full rounded-xl border border-border bg-secondary py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    />
                  </div>
                </div>

                {/* Чекбокс согласия */}
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-3 transition-colors hover:bg-secondary/60">
                  <div className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="peer absolute opacity-0"
                      required
                    />
                    <div className={`flex h-5 w-5 items-center justify-center rounded-md border-2 transition-all ${
                      agreed ? "border-accent bg-accent" : "border-border bg-background"
                    }`}>
                      {agreed && (
                        <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-xs leading-relaxed text-muted-foreground">
                    {"Я согласен с "}
                    <Link
                      href="/documents#privacy"
                      target="_blank"
                      className="font-medium text-accent underline-offset-2 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {"политикой конфиденциальности"}
                    </Link>
                    {" и даю согласие на обработку моих персональных данных."}
                  </span>
                </label>

                {/* Ошибка */}
                {status === "error" && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                    {"Что-то пошло не так. Попробуйте ещё раз или напишите нам напрямую."}
                  </p>
                )}

                {/* Кнопка отправки */}
                <button
                  type="submit"
                  disabled={!agreed || !name.trim() || !phone.trim() || status === "loading"}
                  className={`mt-1 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold text-white transition-all ${
                    agreed && name.trim() && phone.trim()
                      ? "bg-accent hover:scale-[1.02] hover:bg-[#3d7dca] active:scale-[0.98]"
                      : "cursor-not-allowed bg-muted text-muted-foreground"
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {"Отправляем..."}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {"Перезвоните мне"}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
