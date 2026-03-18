"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add("opacity-100", "translate-y-0")
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src="https://i.postimg.cc/VLgC6QcS/A_highresolution.png"
        alt="Фуры на европейской трассе"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-5xl translate-y-8 px-4 py-32 text-center opacity-0 transition-all duration-1000 ease-out"
      >
        <h1 className="text-balance font-mono text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {"Получи Код "}
          <span className="font-sans font-black text-[1.1em]">{"95"}</span>
          <br />
          {"для работы в Европе"}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
          {"Обучение онлайн, всего 1 визит в Краков. Помогаем водителям-дальнобойщикам легально работать в Европейском Союзе."}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-lg bg-[#4689e1] px-8 py-4 font-sans text-base font-semibold text-white transition-all hover:scale-105 hover:bg-[#3670c2]"
          >
            {"Записаться на курс"}
          </a>
          <a
            href="#info"
            className="rounded-lg border-2 border-primary-foreground/40 px-8 py-4 font-sans text-base font-semibold text-primary-foreground transition-all hover:scale-105 hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            {"Подробнее"}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-10 w-10 text-primary-foreground/70" />
      </a>
    </section>
  )
}
