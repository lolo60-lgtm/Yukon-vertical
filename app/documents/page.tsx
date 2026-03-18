"use client"

import { useState } from "react"
import { ChevronDown, ZoomIn } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

type Section = {
  id: string
  title: string
  content: React.ReactNode
}

const sections: Section[] = [
  {
    id: "privacy",
    title: "Политика конфиденциальности",
    content: (
      <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
        <p><strong className="text-foreground">Дата вступления в силу:</strong> [ДАТА — например: 1 января 2025 г.]</p>

        <h3 className="font-serif text-base font-bold text-foreground">1. Кто обрабатывает ваши данные</h3>
        <p>
          Администратором персональных данных является: <strong className="text-foreground">[ПОЛНОЕ НАЗВАНИЕ КОМПАНИИ]</strong>,
          зарегистрированная по адресу: al. 29 Listopada 130/421, 31-406 Kraków, Polska.
          NIP: <strong className="text-foreground">[ВСТАВИТЬ NIP]</strong>.
        </p>
        <p>Контакт по вопросам обработки данных: <strong className="text-foreground">kod95@yukon.com.pl</strong></p>

        <h3 className="font-serif text-base font-bold text-foreground">2. Какие данные мы собираем</h3>
        <ul className="flex flex-col gap-1 pl-4">
          <li>• Имя и фамилия</li>
          <li>• Номер телефона</li>
          <li>• Адрес электронной почты</li>
          <li>• Данные водительского удостоверения (для оказания услуг)</li>
          <li>• Технические данные (IP-адрес, тип браузера) — автоматически</li>
        </ul>

        <h3 className="font-serif text-base font-bold text-foreground">3. Цели и правовые основания</h3>
        <ul className="flex flex-col gap-1 pl-4">
          <li>• <strong className="text-foreground">Выполнение договора</strong> (ст. 6(1)(b) GDPR) — обработка заявки и оказание услуг</li>
          <li>• <strong className="text-foreground">Законный интерес</strong> (ст. 6(1)(f) GDPR) — ответы на запросы, маркетинг услуг</li>
          <li>• <strong className="text-foreground">Согласие</strong> (ст. 6(1)(a) GDPR) — рассылки и уведомления (если вы дали согласие)</li>
        </ul>

        <h3 className="font-serif text-base font-bold text-foreground">4. Срок хранения данных</h3>
        <p>Данные хранятся в течение срока оказания услуг и 5 лет после его окончания — в соответствии с требованиями польского законодательства о бухгалтерском учёте.</p>

        <h3 className="font-serif text-base font-bold text-foreground">5. Ваши права</h3>
        <p>В соответствии с GDPR вы вправе: получить доступ к своим данным, исправить их, удалить, ограничить обработку, а также подать жалобу в надзорный орган — Urząd Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa.</p>

        <h3 className="font-serif text-base font-bold text-foreground">6. Передача данных третьим лицам</h3>
        <p>Данные могут передаваться: учебным центрам-партнёрам, органам государственной власти Польши (WORD, GITD) в рамках оказания услуг, а также IT-провайдерам (хостинг, CRM) на основании договоров об обработке данных.</p>

        <p className="pt-2 text-xs">Политика обновлена: <strong>[ДАТА ПОСЛЕДНЕГО ОБНОВЛЕНИЯ]</strong></p>
      </div>
    ),
  },
  {
    id: "terms",
    title: "Условия предоставления услуг",
    content: (
      <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
        <p><strong className="text-foreground">Дата вступления в силу:</strong> [ДАТА]</p>

        <h3 className="font-serif text-base font-bold text-foreground">1. Стороны</h3>
        <p>
          Исполнитель: <strong className="text-foreground">[НАЗВАНИЕ КОМПАНИИ]</strong>, al. 29 Listopada 130/421, 31-406 Kraków, Polska.
          Заказчик: физическое лицо, оставившее заявку на сайте yukon-vertical.vercel.app.
        </p>

        <h3 className="font-serif text-base font-bold text-foreground">2. Предмет договора</h3>
        <p>Исполнитель оказывает услуги по организации прохождения квалификации КОД 95 для профессиональных водителей в Польше, включая: консультацию, организацию медосмотра, предоставление доступа к учебной платформе, сопровождение при подаче документов.</p>

        <h3 className="font-serif text-base font-bold text-foreground">3. Порядок оказания услуг</h3>
        <ul className="flex flex-col gap-1 pl-4">
          <li>• Заказчик оставляет заявку и проходит консультацию</li>
          <li>• Стороны согласовывают объём услуг и стоимость</li>
          <li>• Заказчик вносит оплату согласно выставленному счёту</li>
          <li>• Исполнитель организует прохождение курса</li>
        </ul>

        <h3 className="font-serif text-base font-bold text-foreground">4. Стоимость и оплата</h3>
        <p>Стоимость услуг определяется индивидуально и указывается в счёте. Оплата производится в польских злотых (PLN) банковским переводом или иным согласованным способом.</p>

        <h3 className="font-serif text-base font-bold text-foreground">5. Ответственность</h3>
        <p>Исполнитель несёт ответственность за организацию процесса в соответствии с действующим польским законодательством. Исполнитель не несёт ответственности за решения государственных органов (WORD, GITD) в отношении выдачи документов.</p>

        <h3 className="font-serif text-base font-bold text-foreground">6. Отказ от услуг</h3>
        <p>Заказчик вправе отказаться от услуг до начала обучения — в этом случае возвращается полная стоимость за вычетом фактически понесённых расходов. После начала обучения возврат осуществляется пропорционально неоказанной части услуг.</p>

        <h3 className="font-serif text-base font-bold text-foreground">7. Применимое право</h3>
        <p>Договор регулируется законодательством Республики Польша. Споры рассматриваются судом по месту нахождения Исполнителя.</p>
      </div>
    ),
  },
  {
    id: "agreement",
    title: "Пользовательское соглашение",
    content: (
      <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
        <p><strong className="text-foreground">Дата вступления в силу:</strong> [ДАТА]</p>

        <h3 className="font-serif text-base font-bold text-foreground">1. Принятие условий</h3>
        <p>Используя сайт yukon-vertical.vercel.app (далее — Сайт), вы соглашаетесь с настоящим Пользовательским соглашением. Если вы не согласны — пожалуйста, прекратите использование Сайта.</p>

        <h3 className="font-serif text-base font-bold text-foreground">2. Использование сайта</h3>
        <ul className="flex flex-col gap-1 pl-4">
          <li>• Сайт предназначен только для ознакомления с услугами компании и оформления заявок</li>
          <li>• Запрещается копирование, воспроизведение или распространение материалов сайта без письменного согласия</li>
          <li>• Запрещается использование сайта в незаконных целях</li>
        </ul>

        <h3 className="font-serif text-base font-bold text-foreground">3. Интеллектуальная собственность</h3>
        <p>Все материалы сайта (тексты, изображения, логотип, дизайн) являются интеллектуальной собственностью <strong className="text-foreground">[НАЗВАНИЕ КОМПАНИИ]</strong> и охраняются законодательством ЕС об авторском праве.</p>

        <h3 className="font-serif text-base font-bold text-foreground">4. Ограничение ответственности</h3>
        <p>Сайт предоставляется «как есть». Компания не гарантирует бесперебойную работу сайта и не несёт ответственности за ущерб, возникший вследствие его использования.</p>

        <h3 className="font-serif text-base font-bold text-foreground">5. Ссылки на сторонние сайты</h3>
        <p>Сайт может содержать ссылки на внешние ресурсы. Компания не несёт ответственности за содержание и политику конфиденциальности сторонних сайтов.</p>

        <h3 className="font-serif text-base font-bold text-foreground">6. Cookies</h3>
        <p>Сайт использует файлы cookie для обеспечения корректной работы и аналитики (Vercel Analytics). Продолжая пользоваться сайтом, вы соглашаетесь с использованием cookie.</p>

        <h3 className="font-serif text-base font-bold text-foreground">7. Изменения соглашения</h3>
        <p>Компания вправе изменять настоящее соглашение в любое время. Актуальная версия всегда доступна на этой странице.</p>
      </div>
    ),
  },
  {
    id: "certificate",
    title: "Сертификат",
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {"Сертификат подтверждает, что компания Yukon KOD 95 является авторизованным партнёром аккредитованного учебного центра и осуществляет деятельность в соответствии с требованиями польского законодательства."}
        </p>
        {/* Изображение сертификата */}
        <CertificateImage />
      </div>
    ),
  },
  {
    id: "requisites",
    title: "Реквизиты компании",
    content: (
      <div className="flex flex-col gap-3 text-sm leading-relaxed">
        {/* ⚠️ ЗАПОЛНИ ЭТИ ДАННЫЕ СВОИМИ РЕАЛЬНЫМИ ДАННЫМИ */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-secondary p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Полное название</p>
            <p className="mt-1 font-medium text-foreground">
              {/* ⬇️ ВСТАВЬ ПОЛНОЕ ЮРИДИЧЕСКОЕ НАЗВАНИЕ КОМПАНИИ */}
              [ПОЛНОЕ ЮРИДИЧЕСКОЕ НАЗВАНИЕ]
            </p>
          </div>
          <div className="rounded-lg bg-secondary p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Форма собственности</p>
            <p className="mt-1 font-medium text-foreground">
              {/* ⬇️ Например: Spółka z o.o. / Jednoosobowa działalność gospodarcza */}
              [ФОРМА — например: Sp. z o.o.]
            </p>
          </div>
          <div className="rounded-lg bg-secondary p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">NIP</p>
            <p className="mt-1 font-mono font-bold text-foreground">
              {/* ⬇️ ВСТАВЬ NIP */}
              [NIP]
            </p>
          </div>
          <div className="rounded-lg bg-secondary p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">REGON</p>
            <p className="mt-1 font-mono font-bold text-foreground">
              {/* ⬇️ ВСТАВЬ REGON */}
              [REGON]
            </p>
          </div>
          <div className="rounded-lg bg-secondary p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">KRS</p>
            <p className="mt-1 font-mono font-bold text-foreground">
              {/* ⬇️ ВСТАВЬ KRS (если есть, для sp. z o.o.) */}
              [KRS или «не применимо»]
            </p>
          </div>
          <div className="rounded-lg bg-secondary p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Юридический адрес</p>
            <p className="mt-1 font-medium text-foreground">
              al. 29 Listopada 130/421,<br />31-406 Kraków, Polska
            </p>
          </div>
          <div className="rounded-lg bg-secondary p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
            <p className="mt-1 font-medium text-foreground">kod95@yukon.com.pl</p>
          </div>
          <div className="rounded-lg bg-secondary p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Телефон</p>
            <p className="mt-1 font-medium text-foreground">
              {/* ⬇️ ВСТАВЬ РЕАЛЬНЫЙ НОМЕР */}
              [НОМЕР ТЕЛЕФОНА]
            </p>
          </div>
        </div>
      </div>
    ),
  },
]

// Компонент для фото сертификата с зумом
function CertificateImage() {
  const [open, setOpen] = useState(false)
  // ⬇️ ЗАМЕНИ НА РЕАЛЬНУЮ ССЫЛКУ НА ФОТО СЕРТИФИКАТА
  const src = "/images/certificate.jpg"

  return (
    <>
      <div
        className="group relative cursor-zoom-in overflow-hidden rounded-xl border border-border shadow-sm transition-all duration-300 hover:shadow-xl"
        onClick={() => setOpen(true)}
        style={{ maxWidth: 480 }}
      >
        <img
          src={src}
          alt="Сертификат Yukon KOD 95"
          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/20">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <ZoomIn className="h-6 w-6 text-foreground" />
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">{"Нажмите на изображение, чтобы увеличить"}</p>

      {/* Fullscreen lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
            onClick={() => setOpen(false)}
            aria-label="Закрыть"
          >
            ✕
          </button>
          <img
            src={src}
            alt="Сертификат — полный размер"
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

// Аккордеон-секция
function AccordionItem({ section, defaultOpen }: { section: Section; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false)

  return (
    <div
      id={section.id}
      className="overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/50"
      >
        <span className="font-serif text-lg font-bold text-foreground">{section.title}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Плавное раскрытие */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="border-t border-border px-6 py-6">
          {section.content}
        </div>
      </div>
    </div>
  )
}

export default function DocumentsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="bg-foreground py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h1 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
              {"Документы"}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80 sm:text-lg">
              {"Правовые документы компании Yukon KOD 95"}
            </p>
          </div>
        </div>

        {/* Accordion */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4">
            <div className="flex flex-col gap-4">
              {sections.map((section, i) => (
                <AccordionItem key={section.id} section={section} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
