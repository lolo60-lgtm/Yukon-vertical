import { Phone, Mail, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Company info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="flex items-baseline font-mono text-2xl font-bold tracking-tight text-primary">
                {"YUKON "}
                <span className="ml-2 text-accent">
                  {"KOD "}
                  <span className="font-sans font-black text-[1.1em] leading-none">
                    {"95"}
                  </span>
                </span>
              </span>
            </div> {/* <-- Вот этот закрывающий div был потерян! */}

            <p className="text-sm leading-relaxed text-muted-foreground">
              {"Помогаем водителям легально работать в Европе. Обучение онлайн, всего 1 визит в Краков."}
            </p>
            
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/yukon_kod_95/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-bold text-foreground">{"Контакты"}</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                <span>{"al. 29 Listopada 130/421, 31-406 Krakow, Polska"}</span>
              </div>
              <a
                href="tel:+48000000000"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span>{"+48 000 000 000"}</span>
              </a>
              <a
                href="mailto:yukon95@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <span>{"yukon95@gmail.com"}</span>
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-bold text-foreground">{"Наш офис"}</h3>
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Yukon 95 office location"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=al.+29+Listopada+130%2F421%2C+31-406+Krak%C3%B3w%2C+Polska&zoom=16"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {"2024 Yukon KOD 95. Все права защищены."}
          </p>
        </div>
      </div>
    </footer>
  )
}
