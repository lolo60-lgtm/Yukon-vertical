"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react"

const PHONE = "+48452650325"
const PHONE_DISPLAY = "+48 452 650 325"
const INSTAGRAM = "https://www.instagram.com/yukon_kod_95/"
const TELEGRAM = "https://t.me/MarynaKod95"
const WHATSAPP = "https://wa.me/48452650325"
const VIBER = "viber://chat?number=%2B48452650325"
const EMAIL = "kod95@yukon.com.pl"
const ADDRESS = "al. 29 Listopada 130/421, 31-406 Krakow, Polska"

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay); observer.unobserve(el) } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
      {children}
    </div>
  )
}

const socialButtons = [
  {
    label: "Instagram",
    href: INSTAGRAM,
    external: true,
    color: "#E1306C",
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: TELEGRAM,
    external: true,
    color: "#2AABEE",
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: WHATSAPP,
    external: true,
    color: "#25D366",
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
      </svg>
    ),
  },
  {
    label: "Viber",
    href: VIBER,
    external: false,
    color: "#7360F2",
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.5 2 2 6.2 2 11.5c0 2.9 1.4 5.5 3.6 7.2V22l3.6-1.8c.9.2 1.8.3 2.8.3 5.5 0 10-4.3 10-9.5S17.5 2 12 2z"/>
        <path d="M14.5 13.5c-.2-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.2-.7.9-1 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5L5.9 7c-.2-.5-.5-.4-.7-.4-.2 0-.4 0-.6.1-.5.2-1.3.8-1.3 1.9 0 1.1.8 2.7 2.1 4.2 1.8 2.1 3.5 2.8 5.3 3.3 1 .3 1.8.2 2.4-.2.7-.4 1.2-1.1 1.3-1.7.1-.5-.1-.7-.6-.9z"/>
      </svg>
    ),
  },
  {
    label: PHONE_DISPLAY,
    href: `tel:${PHONE}`,
    external: false,
    color: "#4689e1",
    icon: <Phone className="h-6 w-6 shrink-0" strokeWidth={1.8} />,
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-foreground py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">

        {/* Заголовок */}
        <FadeInSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl text-balance">
              {"Остались вопросы?"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              {"Свяжитесь с нами любым удобным способом!"}
            </p>
          </div>
        </FadeInSection>

        {/* Основной контент */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 items-center">

          {/* Левая колонка — большие кнопки мессенджеров */}
          <FadeInSection delay={100}>
            <div className="flex flex-col gap-4">
              {socialButtons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  {...(btn.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 rounded-2xl px-6 py-4 text-lg font-semibold text-white shadow-md transition-all duration-200 lg:hover:scale-[1.03] lg:hover:shadow-xl active:scale-[0.98]"
                  style={{ backgroundColor: btn.color }}
                >
                  {btn.icon}
                  {btn.label}
                </a>
              ))}
            </div>
          </FadeInSection>

          {/* Правая колонка — контакты */}
          <FadeInSection delay={200}>
            <div className="flex flex-col justify-center gap-8">

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary-foreground">{"Email"}</h3>
                  <a href={`mailto:${EMAIL}`} className="mt-1 block text-primary-foreground/70 transition-colors hover:text-accent">
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary-foreground">{"Адрес"}</h3>
                  <p className="mt-1 text-primary-foreground/70">{ADDRESS}</p>
                </div>
              </div>

            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
