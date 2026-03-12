import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { articles, getArticleBySlug } from "@/lib/articles"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title} — Yukon KOD 95`,
    description: article.excerpt,
  }
}

// Simple markdown-to-HTML renderer (no external dependencies)
function renderMarkdown(content: string): string {
  return content
    .trim()
    // H2
    .replace(/^## (.+)$/gm, '<h2 class="font-serif text-2xl font-bold text-foreground mt-10 mb-4 sm:text-3xl">$1</h2>')
    // H3
    .replace(/^### (.+)$/gm, '<h3 class="font-serif text-xl font-bold text-foreground mt-8 mb-3">$1</h3>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    // Table rows (simple)
    .replace(/^\|(.+)\|$/gm, (match) => {
      const cells = match.split("|").filter(Boolean)
      const isSeparator = cells.every((c) => c.trim().match(/^-+$/))
      if (isSeparator) return ""
      const tag = cells[0]?.trim().match(/^-+$/) ? "td" : "td"
      return `<tr class="border-b border-border">${cells.map((c) => `<${tag} class="py-2 px-4 text-sm text-muted-foreground">${c.trim()}</${tag}>`).join("")}</tr>`
    })
    // Wrap table rows
    .replace(/((?:<tr[^>]*>.*?<\/tr>\n?)+)/gs, '<div class="my-6 overflow-x-auto rounded-lg border border-border"><table class="w-full"><tbody>$1</tbody></table></div>')
    // Checkmarks ✅ ❌
    .replace(/✅ /g, '<span class="text-green-600">✅ </span>')
    .replace(/❌ /g, '<span class="text-red-500">❌ </span>')
    // Unordered list items starting with -
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 text-muted-foreground"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span><span>$1</span></li>')
    // Ordered list items
    .replace(/^\d+\. (.+)$/gm, '<li class="flex items-start gap-2 text-muted-foreground"><span class="font-semibold text-accent shrink-0">•</span><span>$1</span></li>')
    // Wrap consecutive <li> items
    .replace(/((?:<li[^>]*>.*?<\/li>\n?)+)/gs, '<ul class="my-4 flex flex-col gap-2 pl-2">$1</ul>')
    // Horizontal rule
    .replace(/^---$/gm, '<hr class="my-10 border-border" />')
    // Paragraphs (lines that are not already tags)
    .split("\n\n")
    .map((block) => {
      block = block.trim()
      if (!block) return ""
      if (block.startsWith("<")) return block
      return `<p class="text-base leading-relaxed text-muted-foreground">${block}</p>`
    })
    .join("\n")
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const htmlContent = renderMarkdown(article.content)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="relative h-64 overflow-hidden sm:h-80 md:h-96">
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/65" />
          <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
            <h1 className="max-w-3xl font-serif text-2xl font-bold text-primary-foreground sm:text-3xl md:text-4xl text-balance">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4">
            {/* Back link */}
            <Link
              href="/knowledge"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              <ArrowLeft className="h-4 w-4" />
              {"Назад к базе знаний"}
            </Link>

            {/* Article body */}
            <div
              className="mt-6"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* CTA block */}
            <div className="mt-12 rounded-2xl bg-foreground p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                {"Нужна помощь с оформлением?"}
              </h3>
              <p className="mt-3 text-primary-foreground/70">
                {"Мы поможем пройти весь путь — от медосмотра до получения КОД 95"}
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-accent/90"
              >
                {"Связаться с нами"}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
