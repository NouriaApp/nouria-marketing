import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getHelpArticle, getHelpCategory, helpArticles } from "@/content/help";
import HelpIcon from "@/components/HelpIcon";
import styles from "../help.module.css";

export function generateStaticParams() {
  return helpArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const article = getHelpArticle((await params).slug);
  return article ? { title: `${article.title} | Ampleat Help Center`, description: article.description } : { title: "Guide not found | Ampleat Help Center" };
}

export default async function HelpArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const article = getHelpArticle((await params).slug);
  if (!article) notFound();
  const category = getHelpCategory(article.category)!;
  const siblings = helpArticles.filter((item) => item.category === category.id);
  const related = article.related.map(getHelpArticle).filter((item) => item !== undefined);

  return <main id="help-content" tabIndex={-1} className={`${styles.main} ${styles.articleMain}`}>
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/help">Help Center</Link><HelpIcon name="chevron" width="13" height="13" /><span>{category.title}</span></nav>
    <div className={styles.readingLayout}>
      <aside className={styles.articleSidebar} aria-label="More in this topic"><Link className={styles.backLink} href="/help">← All help topics</Link><p className={styles.sidebarLabel}>{category.title}</p><nav aria-label={category.title}>{siblings.map((item) => <Link key={item.slug} href={`/help/${item.slug}`} aria-current={item.slug === article.slug ? "page" : undefined}>{item.title}</Link>)}</nav></aside>
      <article className={styles.articleBody}>
        <header className={styles.articleHeader}><p className={styles.eyebrow}><HelpIcon name={category.icon} width="18" height="18" /> {category.title}</p><h1>{article.title}</h1><p className={styles.articleDescription}>{article.description}</p><p className={styles.articleMeta}>Ampleat private beta <span aria-hidden="true">·</span> {Math.max(1, Math.ceil(article.sections.reduce((sum, section) => sum + [section.title, ...(section.paragraphs ?? []), ...(section.steps ?? []), section.note ?? ""].join(" ").split(/\s+/).length, 0) / 200))} min read</p></header>
        <nav className={styles.tableOfContents} aria-label="In this guide"><p>In this guide</p>{article.sections.map((section, index) => <a key={section.title} href={`#section-${index + 1}`}>{section.title}</a>)}</nav>
        {article.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.title} className={styles.proseSection}><h2>{section.title}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.steps && <ol>{section.steps.map((step) => <li key={step}>{step}</li>)}</ol>}{section.note && <aside className={styles.articleNote}><HelpIcon name="sun" /><p>{section.note}</p></aside>}</section>)}
        <div className={styles.articleHelp}><div><h2>Need a little more help?</h2><p>Send us the details and we’ll help you work through it.</p></div><Link href="/support" className={styles.textLink}>Contact support <HelpIcon name="arrow" width="18" height="18" /></Link></div>
        {related.length > 0 && <section className={styles.related} aria-labelledby="related-title"><p className={styles.eyebrow}>Keep exploring</p><h2 id="related-title">A few related guides.</h2>{related.map((item) => <Link key={item.slug} href={`/help/${item.slug}`}><span>{item.title}</span><HelpIcon name="arrow" width="18" height="18" /></Link>)}</section>}
        <p className={styles.betaNote}>Features may vary by installed build. Food and photo suggestions always need your review.</p>
      </article>
    </div>
  </main>;
}
