"use client"

import { useEffect } from "react"
import Link from "next/link"
import { CheckCircle, Phone, Mail } from "lucide-react"

export default function ThankYouPage() {
  useEffect(() => {
    // ✅ Пиксель срабатывает ТОЛЬКО здесь — один раз, без дублей
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead")
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-20 text-center">
      <div className="flex flex-col items-center gap-5 max-w-md w-full">

        {/* Бейдж */}
        <span className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-1.5 text-sm font-medium text-green-700">
          <CheckCircle className="h-3.5 w-3.5" />
          Заявка принята
        </span>

        {/* Иконка */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50 border border-green-200">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>

        {/* Полоска */}
        <div className="h-0.5 w-12 rounded-full bg-green-300" />

        {/* Заголовок */}
        <h1 className="font-serif text-4xl font-bold text-foreground">
          Спасибо! Мы скоро свяжемся
        </h1>

        {/* Текст */}
        <p className="text-lg leading-relaxed text-muted-foreground">
          Ваша заявка отправлена. Менеджер позвонит вам в течение рабочего дня — с пн по пт с 09:00 до 16:00.
        </p>

        {/* Контакты */}
        <div className="flex flex-wrap justify-center gap-3 w-full">
          <div className="flex items-center gap-2 rounded-xl bg-secondary border border-border px-4 py-3 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 shrink-0" />
            kod95@yukon.com.pl
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-secondary border border-border px-4 py-3 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 shrink-0" />
            +48 452 650 325
          </div>
        </div>

        {/* Кнопки */}
        <Link
          href="/"
          className="mt-2 w-full rounded-xl bg-[#4689e1] px-8 py-4 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-[#3670c2]"
        >
          Вернуться на главную
        </Link>

        
          href="https://t.me/MarynaKod95"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full rounded-xl border border-border px-8 py-3.5 text-sm font-medium text-muted-foreground transition-all hover:bg-secondary"
>
  Написать в Telegram
</a>

      </div>
    </main>
  )
}
```

---

### Итого — как всё работает после изменений:
```
Человек заходит на сайт → только PageView (не лид) ✅
Человек нажал "Перезвоните мне" → форма отправлена → редирект на /thank-you
На /thank-you → fbq('track', 'Lead') срабатывает 1 раз ✅
Никаких дублей. Никакой магии. Чисто. 🎯
