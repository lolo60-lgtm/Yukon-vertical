"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Shield, Users, Award, Headphones } from "lucide-react"

const stats = [
  { icon: Shield, value: "100%", label: "Легальное оформление" },
  { icon: Users, value: "500+", label: "Довольных клиентов" },
  { icon: Award, value: "5 лет", label: "Опыта работы" },
  { icon: Headphones, value: "24/7", label: "Поддержка" },
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

export function About() {
  return (
    <section id="about" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image side */}
          <FadeInSection>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/krakow.jpg"
                alt="Краков, Польша - город где базируется Yukon KOD 95"
                width={700}
                height={470}
                className="h-auto w-full object-cover"
              />
            </div>
          </FadeInSection>

          {/* Text side */}
          <FadeInSection delay={150}>
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
                {"О компании "}
                <span className="font-mono text-2xl tracking-tight text-foreground sm:text-3xl md:text-4xl">{"YUKON"}</span>{" "}
                <span className="font-mono text-2xl tracking-tight text-accent sm:text-3xl md:text-4xl">{"KOD "}
                  <span className="font-sans font-black text-[1.1em]">{"95"}</span>
                </span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {"Мы помогаем водителям из стран СНГ легально работать в Европе. Наша компания базируется в Кракове (Польша) и специализируется на получении сертификата Код 95 — обязательной квалификации для профессиональных водителей грузового транспорта в ЕС."}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {"Обучение проходит полностью онлайн. Приехать в Краков нужно только один раз — для сдачи анализов и подачи документов. Мы берём на себя все организационные вопросы."}
              </p>
            </div>
          </FadeInSection>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <FadeInSection key={stat.label} delay={i * 100}>
                <div className="flex flex-col items-center rounded-xl bg-background p-6 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="font-sans font-black text-3xl text-foreground">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
                </div>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
