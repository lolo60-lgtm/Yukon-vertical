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

  function handleClick() {
    // Динамический импорт чтобы избежать SSR проблем
    import("@/components/lead-modal").then(({ openLeadModal }) => {
      openLeadModal()
    })
  }

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
          {"Код 95 под ключ "}
          <span className="font-sans font-black text-[1.1em]">{"95"}</span>
          <br />
          {"для работы в Европе"}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
          {"Быстрое оформление и сопровождение до получения сертификата"}
        </p>

      
      </div>

      <a href="#services" className="absolute bottom-2 sm:bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce" aria-label="Scroll down">
        <ChevronDown className="h-10 w-10 text-primary-foreground/70" />
      </a>
    </section>
  )
}
