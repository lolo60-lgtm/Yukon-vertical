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
    <section id="hero" className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://res.cloudinary.com/dt3zhmpgp/video/upload/v1774651904/Loop_eucedk.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-foreground/60" />

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-5xl px-4 py-8 -mt-4 sm:mt-2 text-center opacity-0 transition-all duration-1000 ease-out"
      >
        <h1 className="text-balance font-mono text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {"Код 95 под ключ"}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
          {"Быстрое оформление и сопровождение до получения сертификата"}
        </p>

        {/* Кнопки — мобильный: столбик */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:hidden">
          <a href="/services/korotkiy-kurs" className="w-full max-w-xs rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white text-center transition-all hover:bg-[#3670c2]">Короткий курс</a>
          <a href="/services/chip-karta" className="w-full max-w-xs rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white text-center transition-all hover:bg-[#3670c2]">Чип-карта</a>
          <a href="/services/zamena-prav" className="w-full max-w-xs rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white text-center transition-all hover:bg-[#3670c2]">Замена прав</a>
          <a href="/services/priglashenie-na-vizu" className="w-full max-w-xs rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white text-center transition-all hover:bg-[#3670c2]">Приглашение на визу</a>
          <a href="/services/karta-pobytu" className="w-full max-w-xs rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white text-center transition-all hover:bg-[#3670c2]">Карта побыта</a>
        </div>

        {/* Кнопки — десктоп: кирпичная схема */}
        <div className="mt-8 hidden sm:flex flex-col items-center gap-3">
          <a href="/services/korotkiy-kurs" className="rounded-xl bg-accent px-10 py-3.5 text-base font-semibold text-white text-center transition-all hover:bg-[#3670c2]">Короткий курс</a>
          <div className="flex gap-3">
            <a href="/services/chip-karta" className="rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-white text-center transition-all hover:bg-[#3670c2]">Чип-карта</a>
            <a href="/services/zamena-prav" className="rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-white text-center transition-all hover:bg-[#3670c2]">Замена прав</a>
          </div>
          <div className="flex gap-3">
            <a href="/services/priglashenie-na-vizu" className="rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-white text-center transition-all hover:bg-[#3670c2]">Приглашение на визу</a>
            <a href="/services/karta-pobytu" className="rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-white text-center transition-all hover:bg-[#3670c2]">Карта побыта</a>
          </div>
        </div>

      </div>

      <a href="#services" className="absolute bottom-2 sm:bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce" aria-label="Scroll down">
        <ChevronDown className="h-10 w-10 text-primary-foreground/70" />
      </a>
    </section>
  )
}
