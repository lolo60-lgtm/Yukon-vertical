"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react"

const navLinks = [
  { label: "Главная", href: "/#hero", anchor: true },
  { label: "Услуги", href: "/#services", anchor: true },
  { label: "О нас", href: "/#about", anchor: true },
  { label: "База знаний", href: "/knowledge", anchor: false },
  { label: "Цены", href: "/#pricing", anchor: true },
  { label: "Контакт", href: "/#contact", anchor: true },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const bgOpacity = Math.min(0.97, 0.70 + (scrollY / 120) * 0.27)
  const blurAmount = Math.min(20, 8 + (scrollY / 120) * 12)

  function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()
    setMobileOpen(false)
    const anchor = href.startsWith("/") ? href.slice(1) : href
    if (isHome) {
      const target = document.querySelector(anchor)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      window.location.href = href
    }
  }

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 right-0 top-0 z-40 lg:hidden"
        style={{
          height: "80px",
          backdropFilter: scrollY > 5 ? `blur(${Math.min(6, (scrollY / 120) * 6)}px)` : "none",
          WebkitBackdropFilter: scrollY > 5 ? `blur(${Math.min(6, (scrollY / 120) * 6)}px)` : "none",
          maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
          transition: "opacity 0.4s ease",
          opacity: scrollY > 5 ? 1 : 0,
        }}
      />

      <header
        className={`sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
        style={{
          backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
          backdropFilter: `blur(${blurAmount}px)`,
          WebkitBackdropFilter: `blur(${blurAmount}px)`,
          transition: "background-color 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.3s ease",
        }}
      >
        <div className="hidden border-b border-border bg-secondary sm:block">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1 text-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {"al. 29 Listopada 130/421, 31-406 Krakow"}
              </span>
              <span className="hidden items-center gap-1 text-foreground sm:flex">
                <Clock className="h-3.5 w-3.5 text-accent" />
                {"Пн - Пт 09:00 - 18:00"}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+48000000000" className="flex items-center gap-1 text-foreground transition-colors hover:text-accent">
                <Phone className="h-3.5 w-3.5 text-accent" />
                {"+48 000 000 000"}
              </a>
              <a href="mailto:yukonkod95@gmail.com" className="hidden items-center gap-1 text-foreground transition-colors hover:text-accent md:flex">
                <Mail className="h-3.5 w-3.5 text-accent" />
                {"yukonkod95@gmail.com"}
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-mono text-2xl font-bold tracking-tight text-foreground">{"YUKON"}</span>
            <span className="font-mono text-2xl font-bold text-accent">
              {"KOD "}
              <span className="font-sans font-black text-[1.1em]">{"95"}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) =>
              link.anchor ? (
                <a key={link.href} href={link.href} onClick={(e) => handleAnchorClick(e, link.href)}
                  className="font-sans text-sm font-medium text-foreground transition-colors hover:text-accent">
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                  className={`font-sans text-sm font-medium transition-colors hover:text-accent ${pathname.startsWith(link.href) ? "text-accent" : "text-foreground"}`}>
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-foreground transition-colors hover:bg-secondary lg:hidden" aria-label="Toggle menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="border-t border-border bg-background/95 px-4 pb-4 lg:hidden">
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) =>
                link.anchor ? (
                  <a key={link.href} href={link.href} onClick={(e) => handleAnchorClick(e, link.href)}
                    className="rounded-md px-3 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                    className="rounded-md px-3 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
