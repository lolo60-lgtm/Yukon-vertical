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
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()
    setMobileOpen(false)

    // Extract anchor part (e.g. "/#contact" -> "#contact")
    const anchor = href.startsWith("/") ? href.slice(1) : href

    if (isHome) {
      const target = document.querySelector(anchor)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      // Navigate to home then scroll
      window.location.href = href
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      {/* Top bar — hidden on mobile */}
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
            <a
              href="tel:+48000000000"
              className="flex items-center gap-1 text-foreground transition-colors hover:text-accent"
            >
              <Phone className="h-3.5 w-3.5 text-accent" />
              {"+48 000 000 000"}
            </a>
            <a
              href="mailto:yukonkod95@gmail.com"
              className="hidden items-center gap-1 text-foreground transition-colors hover:text-accent md:flex"
            >
              <Mail className="h-3.5 w-3.5 text-accent" />
              {"yukonkod95@gmail.com"}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono text-2xl font-bold tracking-tight text-foreground">
            {"YUKON"}
          </span>
          <span className="font-mono text-2xl font-bold text-accent">
            {"KOD "}
            <span className="font-sans font-black text-[1.1em]">{"95"}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) =>
            link.anchor ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="font-sans text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-sans text-sm font-medium transition-colors hover:text-accent ${
                  pathname.startsWith(link.href) ? "text-accent" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 pb-4 lg:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) =>
              link.anchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="rounded-md px-3 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  )
}
