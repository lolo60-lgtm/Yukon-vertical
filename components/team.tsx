"use client"

import { useEffect, useRef, useState } from "react"
import { Phone } from "lucide-react"

const managers = [
  {
    name: "Марина",
    role: "Менеджер",
    image: "https://i.postimg.cc/52FQ3bTQ/Ava-best-2026.png",
    phone: "+48 452 650 325",
    hasInfo: true,
  },
  {
    name: "Никита",
    role: "Менеджер",
    // ⬇️ ЗАМЕНИ НА РЕАЛЬНУЮ ССЫЛКУ НА ФОТО
    image: "PLACEHOLDER_IMAGE_2",
    phone: "",
    hasInfo: true,
    phoneVisible: false,
  },
  {
    name: "Анастасия",
    role: "Менеджер",
    // ⬇️ ЗАМЕНИ НА РЕАЛЬНУЮ ССЫЛКУ НА ФОТО
    image: "PLACEHOLDER_IMAGE_3",
    phone: "",
    hasInfo: true,
    phoneVisible: false,
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
      { threshold: 0.15 }
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

export function Team() {
  return (
    // py уменьшены чтобы не было лишних пробелов между блоками
    <section id="team" className="bg-secondary py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Заголовок */}
        <FadeInSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
              {"Ваши менеджеры"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {"Живые люди, которые помогут на каждом шаге"}
            </p>
          </div>
        </FadeInSection>

        {/* Карточки */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {managers.map((manager, i) => (
            <FadeInSection key={i} delay={i * 120}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl">

                {/* Фото */}
                <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                  {manager.image.startsWith("PLACEHOLDER") ? (
                    <div className="flex h-full w-full items-center justify-center bg-accent/5">
                      <span className="text-base text-muted-foreground">{"Фото скоро"}</span>
                    </div>
                  ) : (
                    <img
                      src={manager.image}
                      alt={manager.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Информация — у всех троих */}
                <div className="flex flex-col items-center gap-3 p-6 text-center">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      {manager.name}
                    </h3>
                    <p className="mt-1.5 text-base text-muted-foreground">
                      {manager.role}
                    </p>
                  </div>
                  {/* Телефон только у Марины */}
                  {manager.phone && (
                    <a
                      href={`tel:${manager.phone.replace(/\s/g, "")}`}
                      className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-accent/90"
                    >
                      <Phone className="h-5 w-5" />
                      {manager.phone}
                    </a>
                  )}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
