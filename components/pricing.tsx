"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Clock } from "lucide-react"

const plans = [
  {
    title: "Короткий курс",
    subtitle: "КОД 95",
    price: "799",
    currency: "PLN",
    description: "Для водителей с категорией C, выданной до 09.09.2009 года",
    features: [
      "Онлайн обучение (теория)",
      "Всего 1 визит в Краков",
      "Сдача медицинских анализов",
      "Подача документов",
      "Официальный сертификат КОД 95",
      "Признан во всём Евросоюзе",
      "Поддержка на каждом этапе",
    ],
    available: true,
    featured: true,
    badge: "Популярный",
    cta: "Записаться",
  },
  {
    title: "Длинный курс",
    subtitle: "КОД 95",
    price: "XXX",
    currency: "PLN",
    description: "Для водителей с категорией C, выданной после 09.09.2009 года",
    features: [
      "Онлайн обучение (теория)",
      "Всего 1 визит в Краков",
      "Сдача медицинских анализов",
      "Подача документов",
      "Официальный сертификат КОД 95",
      "Признан во всём Евросоюзе",
      "Поддержка на каждом этапе",
    ],
    available: false,
    featured: false,
    badge: "Скоро",
    cta: "Скоро доступен",
  },
  {
    title: "Доп. услуги",
    subtitle: "Пакет",
    price: null,
    currency: "",
    description: "Замена прав, чип-карта, карта побыта и другое",
    features: [
      "Замена водительских прав",
      "Оформление чип-карты",
      "Карта побыта (вид на жительство)",
      "Приглашение на рабочую визу",
      "Консультация и сопровождение",
    ],
    available: true,
    featured: false,
    badge: null,
    cta: "Узнать цену",
  },
]

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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`h-full transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <FadeInSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
              {"Цены"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {"Прозрачные условия — никаких скрытых платежей"}
            </p>
          </div>
        </FadeInSection>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 items-stretch">
          {plans.map((plan, i) => (
            <FadeInSection key={plan.title} delay={i * 120}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.featured
                    ? "border-accent bg-foreground shadow-xl"
                    : "border-border bg-background shadow-sm"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1 text-xs font-semibold ${
                        plan.available
                          ? "bg-accent text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {!plan.available && <Clock className="h-3 w-3" />}
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-7 pt-8">
                  {/* Title */}
                  <div className="text-center">
                    <h3
                      className={`font-serif text-4xl font-bold ${
                        plan.featured ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {plan.title}
                    </h3>
                    <span
  className={`font-mono text-lg font-bold tracking-wider ${
    plan.featured ? "text-accent" : "text-accent"
  }`}
>
  {plan.subtitle === "КОД 95" ? (
    <>
      {"КОД "}
      <span className="font-sans font-black tracking-normal">{"95"}</span>
    </>
  ) : (
    plan.subtitle
  )}
</span>
                    <p
                      className={`mt-3 text-lg leading-relaxed ${
                        plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="my-6 text-center">
                    {plan.price ? (
                      <>
                        <span
                          className={`font-sans text-6xl font-extrabold ${
                            plan.featured ? "text-primary-foreground" : "text-foreground"
                          }`}
                        >
                          {plan.price}
                        </span>
                        <span
                          className={`ml-1 text-base font-medium ${
                            plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"
                          }`}
                        >
                          {plan.currency}
                        </span>
                      </>
                    ) : (
                      <span
                        className={`font-mono text-2xl font-bold ${
                          plan.featured ? "text-primary-foreground" : "text-foreground"
                        }`}
                      >
                        {"По запросу"}
                      </span>
                    )}
                  </div>

                  {/* Divider */}
                  <div
                    className={`mb-6 h-px ${
                      plan.featured ? "bg-primary-foreground/20" : "bg-border"
                    }`}
                  />

                  {/* Features */}
                  <ul className="flex flex-1 flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            plan.featured ? "bg-accent/30" : "bg-accent/10"
                          }`}
                        >
                          <Check className="h-3 w-3 text-accent" />
                        </div>
                        <span
                          className={`text-base ${
                            plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-8">
                    {plan.available ? (
                      <a
                        href="#contact"
                        className={`flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold transition-all hover:scale-105 ${
                          plan.featured
                            ? "bg-accent text-white hover:bg-accent/90"
                            : "border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-white"
                        }`}
                      >
                        {plan.cta}
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex w-full cursor-not-allowed items-center justify-center rounded-lg border-2 border-muted bg-muted/50 px-6 py-3.5 text-base font-semibold text-muted-foreground"
                      >
                        {plan.cta}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Bottom note */}
        <FadeInSection delay={400}>
          <p className="mt-10 text-center text-base text-muted-foreground">
            {"Есть вопросы по стоимости? "}
            <a href="#contact" className="font-semibold text-accent underline-offset-4 hover:underline">
              {"Напишите нам"}
            </a>
            {" — ответим быстро."}
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
