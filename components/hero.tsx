"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add("opacity-100", "translate-y-0")
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      const remaining = video.duration - video.currentTime
      if (remaining <= 1.2 && !fading) {
        setFading(true)
        setTimeout(() => {
          video.currentTime = 0
          video.play()
          setFading(false)
        }, 1200)
      }
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    return () => video.removeEventListener("timeupdate", handleTimeUpdate)
  }, [fading])

  return (
    <section id="hero" className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">

      {/* Видео */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          transition: "opacity 1.2s ease",
          opacity: fading ? 0 : 1,
        }}
      >
        <source src="ТВОЯ_ССЫЛКА.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-foreground/60" />

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-5xl translate-y-8 px-4 py-16 text-center opacity-0 transition-all duration-1000 ease-out"
      >
        <h1 className="text-balance font-mono text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {"Быстрый Код "}
          <span className="font-sans font-black text-[1.1em]">{"95"}</span>
          <br />
          {"для работы в Европе"}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
          {"Теория онлайн. Всего 1 визит в Краков. 100% легальные документы для водителей C и D. Начните зарабатывать в ЕС уже в этом месяце."}
        </p>
      </div>

      <a href="#services" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce" aria-label="Scroll down">
        <ChevronDown className="h-10 w-10 text-primary-foreground/70" />
      </a>
    </section>
  )
}
