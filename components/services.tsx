"use client"

import { useEffect, useRef, useState } from "react"
import {
  BookOpen,
  GraduationCap,
  CreditCard,
  FileText,
  Globe,
  IdCard,
} from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Короткий курс",
    titleSuffix: "",
    description:
      "Для водителей с категорией C, выданной до 09.09.2009 года. Ускоренная программа обучения для быстрого получения квалификации.",
    image: "https://i.postimg.cc/s228xyF5/Korotkij-kurs.jpg",
    featured: true,
    available: true,
  },
  {
    icon: GraduationCap,
    title: "Длинный курс",
    titleSuffix: "",
    description:
      "Для водителей с категорией C, выданной после 09.09.2009 года. Полный курс обучения с теорией и практикой.",
    image: "https://i.postimg.cc/m2N6ShBS/Dlinnyj-kurs.jpg",
    featured: true,
    available: false,
  },
  {
    icon: IdCard,
    title: "Замена прав",
    description:
      "Поможем заменить водительское удостоверение на европейское. Полное сопровождение процесса.",
  },
  {
    icon: CreditCard,
    title: "Чип-карта",
    description:
      "Оформление цифровой карты водителя для тахографа. Необходима для легальной работы в ЕС.",
  },
  {
    icon: FileText,
    title: "Карта побыта",
    description:
      "Помощь в получении вида на жительство в Польше. Юридическое сопровождение на каждом этапе.",
  },
  {
    icon: Globe,
    title: "Приглашение на визу",
    description:
      "Оформление приглашения для получения рабочей визы. Быстро и надежно.",
  },
]

function AnimatedCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
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
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      {/* Section header */}
      <div className="bg-foreground py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl uppercase">
            {"Наши услуги"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80 sm:text-lg">
            {"Выберите подходящий курс для получения сертификата КОД 95"}
          </p>
        </div>
      </div>

      {/* Featured courses */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {services
            .filter((s) => s.featured)
            .map((service, i) => (
              <AnimatedCard key={service.title} delay={i * 150}>
                <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-3 p-6 text-center">
                    <h3 className="font-serif text-2xl font-bold text-card-foreground sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="mt-2">
                      <Globe className="h-8 w-8 text-foreground/50 transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="mt-4 flex flex-wrap justify-center gap-3">
                      {service.available !== false ? (
                        <a
                          href="#contact"
                          className="rounded-lg border-2 border-accent bg-accent/0 px-5 py-2.5 text-sm font-semibold text-accent transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground"
                        >
                          {"Записаться на курс"}
                        </a>
                      ) : (
                        <button
                          disabled
                          className="cursor-not-allowed rounded-lg border-2 border-gray-300 bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-400"
                        >
                          {"Пока недоступен"}
                        </button>
                      )}
                      <a
                        href="#info"
                        className="rounded-lg border-2 border-accent bg-accent/0 px-5 py-2.5 text-sm font-semibold text-accent transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground"
                      >
                        {"Подробнее"}
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
        </div>

        {/* Other services grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services
            .filter((s) => !s.featured)
            .map((service, i) => {
              const Icon = service.icon
              return (
                <AnimatedCard key={service.title} delay={i * 100}>
                  <div className="group flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-xl">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </AnimatedCard>
              )
            })}
        </div>
      </div>
    </section>
  )
}
