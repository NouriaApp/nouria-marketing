"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { featuredHelpSlugs, getHelpArticle, helpArticles, helpCategories, searchHelp } from "@/content/help";
import HelpIcon from "./HelpIcon";
import styles from "@/app/help/help.module.css";

const commonQuestions = [
  { question: "Do I need to set up my entire pantry?", answer: "No. You can skip pantry setup and start with just a few ingredients. Amounts stay unknown until you confirm them, and you can add more food whenever it is useful.", slug: "first-time-setup" },
  { question: "Does checking off groceries add them to my kitchen?", answer: "Checking an item marks the shopping task done. Record the actual purchase separately so Ampleat knows what you bought and how much to add to your pantry.", slug: "record-grocery-purchases" },
  { question: "When does cooking update my pantry?", answer: "After cooking, review the amounts you actually used and choose Confirm usage & complete. Planning a meal or opening a recipe does not deduct ingredients.", slug: "confirm-cooking-usage" },
  { question: "Can I share Ampleat with my household?", answer: "Yes. Create a household and invite people using their own approved accounts. You share a kitchen, plan, groceries, and memory while keeping separate account settings.", slug: "create-household" },
];

export default function HelpCenter() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const library = useRef<HTMLElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const results = searchHelp(query, category);
  const browsing = !query.trim() && category === "all" && !showAll;
  const selectedCategory = helpCategories.find((item) => item.id === category);

  function selectCategory(id: string) {
    setCategory(id);
    setShowAll(true);
    library.current?.scrollIntoView({ block: "start", behavior: "instant" });
  }

  return <main id="help-content" tabIndex={-1} className={styles.main}>
    <section className={styles.hero} aria-labelledby="help-title">
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}><span className={styles.smallDot} /> Ampleat Help Center</p>
        <h1 id="help-title">A little help for<br />your <em>everyday kitchen.</em></h1>
        <p className={styles.heroDescription}>From your first pantry scan to a week that works for everyone. Find your way, one guide at a time.</p>
      </div>
      <div className={styles.heroAside} aria-hidden="true">
        <div className={styles.heroSymbol}><HelpIcon name="book" width="52" height="52" /></div>
        <span>A place for every<br />kitchen question.</span>
        <span className={styles.asideLine} />
      </div>
      <form className={styles.search} role="search" onSubmit={(event) => { event.preventDefault(); setShowAll(true); library.current?.scrollIntoView({ block: "start", behavior: "instant" }); }}>
        <HelpIcon name="search" />
        <label className={styles.srOnly} htmlFor="help-search">Search all Help Center guides</label>
        <input id="help-search" ref={input} type="search" value={query} maxLength={200} onChange={(event) => setQuery(event.target.value)} placeholder="Try “plan a meal” or “scan my kitchen”" aria-controls="help-results" />
        {query && <button className={styles.clearSearch} type="button" onClick={() => { setQuery(""); input.current?.focus(); }}>Clear</button>}
        <button className={styles.searchSubmit} type="submit" aria-label="Show matching guides"><HelpIcon name="arrow" /></button>
      </form>
      <div className={styles.popular}><span>Popular:</span>{[
        ["Getting started", "first-time-setup"], ["AmpleatVision", "scan-with-ampleatvision"], ["Your household", "create-household"],
      ].map(([title, slug]) => <Link key={slug} href={`/help/${slug}`}>{title}</Link>)}</div>
    </section>

    {browsing && <section className={styles.startHere} aria-labelledby="start-title">
      <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Make yourself at home</p><h2 id="start-title">A good place to start.</h2></div><span className={styles.muted}>Small steps. A little less to carry.</span></div>
      <div className={styles.featuredGrid}>{featuredHelpSlugs.map((slug, index) => {
        const article = getHelpArticle(slug)!;
        return <Link className={styles.featuredCard} key={slug} href={`/help/${slug}`}><span className={styles.stepNumber}>0{index + 1}</span><h3>{article.title}</h3><span className={styles.featuredEnd}>Read the guide <HelpIcon name="arrow" width="18" height="18" /></span></Link>;
      })}</div>
    </section>}

    <section className={styles.library} ref={library} aria-labelledby="library-title">
      <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Made for the way you cook</p><h2 id="library-title">{query.trim() ? "Let’s find your answer." : selectedCategory?.title ?? (showAll ? "Every guide, in one place." : "Explore the Help Center.")}</h2></div>
        <span className={styles.muted}>{helpArticles.length} guides · {helpCategories.length} topics</span>
      </div>
      <div className={styles.libraryLayout}>
        <aside className={styles.topicSidebar} aria-label="Help topics">
          <p className={styles.sidebarLabel}>Browse by topic</p>
          <div className={styles.desktopTopics}>
            <button type="button" aria-pressed={category === "all"} className={category === "all" ? styles.topicActive : ""} onClick={() => { setCategory("all"); setShowAll(false); }}><span>All topics</span><span>{helpArticles.length}</span></button>
            {helpCategories.map((item) => <button key={item.id} type="button" aria-pressed={category === item.id} className={category === item.id ? styles.topicActive : ""} onClick={() => selectCategory(item.id)}><span>{item.title}</span><span>{helpArticles.filter((article) => article.category === item.id).length}</span></button>)}
          </div>
          <label className={styles.mobileTopics}>Choose a help topic<select value={category} onChange={(event) => selectCategory(event.target.value)}><option value="all">All topics</option>{helpCategories.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label>
          <div className={styles.sidebarNote}><HelpIcon name="sparkles" /><p>A kitchen that makes sense.<br />Help that does, too.</p></div>
        </aside>
        <div id="help-results" className={styles.results}>
          <p className={styles.srOnly} role="status" aria-live="polite">{browsing ? `${helpCategories.length} help topics` : `${results.length} ${results.length === 1 ? "guide" : "guides"} found${selectedCategory ? ` in ${selectedCategory.title}` : ""}${query.trim() ? ` for ${query.trim()}` : ""}`}</p>
          {browsing ? <>
            <div className={styles.categoryGrid}>{helpCategories.map((item) => <button key={item.id} type="button" className={styles.categoryCard} onClick={() => selectCategory(item.id)}>
              <span className={styles.categoryIcon}><HelpIcon name={item.icon} /></span><h3>{item.title}</h3><p>{item.description}</p><span className={styles.categoryEnd}>{helpArticles.filter((article) => article.category === item.id).length} guides <HelpIcon name="arrow" width="18" height="18" /></span>
            </button>)}</div>
            <button type="button" className={styles.browseAll} onClick={() => { setShowAll(true); library.current?.scrollIntoView({ block: "start", behavior: "instant" }); }}>Browse all {helpArticles.length} guides <HelpIcon name="arrow" width="18" height="18" /></button>
          </> : <>
            <div className={styles.resultHeading}><p>{results.length} {results.length === 1 ? "guide" : "guides"}{query.trim() ? ` matching “${query.trim()}”` : " to help you along"}</p><button type="button" onClick={() => { setQuery(""); setCategory("all"); setShowAll(false); }}>Reset filters</button></div>
            {results.length ? <div className={styles.articleList}>{results.map((article) => <Link key={article.slug} href={`/help/${article.slug}`} className={styles.articleRow}><div><span className={styles.articleCategory}>{helpCategories.find((item) => item.id === article.category)?.title}</span><h3>{article.title}</h3><p>{article.description}</p></div><HelpIcon name="arrow" /></Link>)}</div> : <div className={styles.emptyState}><HelpIcon name="search" width="36" height="36" /><h3>No guides found just yet.</h3><p>Try a shorter phrase, another topic, or a word like “pantry,” “timer,” or “invitation.”</p><button type="button" className={styles.textLink} onClick={() => { setCategory("all"); setQuery(""); setShowAll(true); }}>See all guides <HelpIcon name="arrow" width="18" height="18" /></button><Link href="/support">Contact support</Link></div>}
          </>}
        </div>
      </div>
    </section>

    {browsing && <section className={styles.faq} aria-labelledby="common-title"><div><p className={styles.eyebrow}>A few quick answers</p><h2 id="common-title">Wondering about<br />the little things?</h2><p className={styles.muted}>You’re in good company.</p></div><div>{commonQuestions.map((item) => <details key={item.slug}><summary>{item.question}<span aria-hidden="true">+</span></summary><div><p>{item.answer}</p><Link href={`/help/${item.slug}`} className={styles.textLink}>Read the full guide <HelpIcon name="arrow" width="16" height="16" /></Link></div></details>)}</div></section>}

    <section className={styles.supportPanel} aria-labelledby="support-title"><div><p className={styles.eyebrow}>There’s a person here, too</p><h2 id="support-title">Still need a hand?</h2><p>Tell us what’s on your mind. We’ll help you find your way.</p></div><Link href="/support" className={styles.primaryButton}>Contact support <HelpIcon name="arrow" width="19" height="19" /></Link></section>
    <p className={styles.betaNote}>Written for the Ampleat private beta · Features may vary by app build.</p>
  </main>;
}
