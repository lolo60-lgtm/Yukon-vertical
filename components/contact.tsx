"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Mail, MapPin, Send, Instagram, MessageCircle } from "lucide-react"

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  )
}

const CONTACT_EMAIL = "kod95@yukon.com.pl"
const CONTACT_PHONE = "+48 452 650 325"

export function Contact() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Формируем читабельное письмо
    const subject = encodeURIComponent(`Заявка с сайта от ${name || "клиента"}`)
    const body = encodeURIComponent(
      `Новая заявка с сайта Yukon KOD 95\n` +
      `────────────────────────\n` +
      `Имя:      ${name || "не указано"}\n` +
      `Телефон:  ${phone || "не указан"}\n` +
      `Email:    ${email || "не указан"}\n` +
      `────────────────────────\n` +
      `Сообщение:\n${message || "—"}\n` +
      `────────────────────────\n` +
      `Отправлено через форму сайта`
    )

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="bg-foreground py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <FadeInSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl text-balance">
              {"Свяжитесь с нами"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              {"Оставьте заявку и мы свяжемся с вами в ближайшее время"}
            </p>
          </div>
        </FadeInSection>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">

          {/* Contact form */}
          <FadeInSection delay={100}>
            <form
              className="flex w-full flex-col gap-4 rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm md:p-8"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-primary-foreground/80">{"Имя"}</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-primary-foreground/80">{"Телефон"}</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+48 000 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-primary-foreground/80">{"Email"}</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-primary-foreground/80">{"Сообщение"}</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Расскажите, чем мы можем помочь..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className={`mt-2 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 font-sans text-sm font-semibold transition-all hover:scale-105 ${
                  sent
                    ? "bg-green-500 text-white"
                    : "bg-accent text-accent-foreground"
                }`}
              >
                <Send className="h-4 w-4" />
                {sent ? "Открываем почтовый клиент..." : "Отправить заявку"}
              </button>
              <p className="text-center text-xs text-primary-foreground/40">
                {"Нажатие откроет ваш почтовый клиент с готовым письмом"}
              </p>
            </form>
          </FadeInSection>

          {/* Contact info — centered vertically */}
          <FadeInSection delay={200}>
            <div className="flex h-full flex-col items-start justify-center gap-8">

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary-foreground">{"Телефон / WhatsApp"}</h3>
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="mt-1 block text-primary-foreground/70 transition-colors hover:text-accent">
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary-foreground">{"Email"}</h3>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block text-primary-foreground/70 transition-colors hover:text-accent">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary-foreground">{"Адрес"}</h3>
                  <p className="mt-1 text-primary-foreground/70">{"al. 29 Listopada 130/421, 31-406 Krakow, Polska"}</p>
                </div>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-3">
                <a href="https://www.instagram.com/yukon_kod_95/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground/70 transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground">
                  <Instagram className="h-4 w-4" />{"Instagram"}
                </a>
                <a href="#"
                  className="flex items-center gap-2 rounded-lg bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground/70 transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground">
                  <MessageCircle className="h-4 w-4" />{"Telegram"}
                </a>
                <a href={`https://wa.me/${CONTACT_PHONE.replace(/[\s+]/g, "")}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground/70 transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground">
                  <Phone className="h-4 w-4" />{"WhatsApp"}
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
