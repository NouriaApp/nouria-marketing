"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, SparklesIcon } from "@heroicons/react/24/outline";
import styles from "./FridgeRescue.module.css";

const ingredients = [
  { id: "chickpeas", name: "Chickpeas", emoji: "🫘", detail: "cooked or canned", prep: "drained chickpeas" },
  { id: "tomatoes", name: "Tomatoes", emoji: "🍅", detail: "a few stragglers", prep: "halved tomatoes" },
  { id: "spinach", name: "Spinach", emoji: "🥬", detail: "the last handful", prep: "spinach" },
  { id: "potatoes", name: "Potatoes", emoji: "🥔", detail: "waiting for their moment", prep: "small potato cubes" },
  { id: "mushrooms", name: "Mushrooms", emoji: "🍄", detail: "half a punnet", prep: "sliced mushrooms" },
  { id: "peppers", name: "Peppers", emoji: "🫑", detail: "one is plenty", prep: "sliced peppers" },
  { id: "lentils", name: "Lentils", emoji: "🫘", detail: "cooked or canned", prep: "drained lentils" },
  { id: "zucchini", name: "Zucchini", emoji: "🥒", detail: "the forgotten one", prep: "sliced zucchini" },
  { id: "carrots", name: "Carrots", emoji: "🥕", detail: "a couple will do", prep: "thinly sliced carrots" },
];

type Ingredient = (typeof ingredients)[number];
type DinnerIdea = { title: string; time: string; extras: string; steps: string[]; picked: Ingredient[] };

function join(items: string[]) {
  return items.length < 2 ? items[0] ?? "" : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

function rescue(picked: Ingredient[]): DinnerIdea {
  const has = (id: string) => picked.some((item) => item.id === id);
  const sturdy = picked.filter((item) => item.id !== "spinach");
  const names = join(sturdy.map((item) => item.prep));
  const finish = has("spinach") ? "Fold in the spinach until wilted, then finish with a squeeze of lemon." : "Finish with a squeeze of lemon and a pinch of black pepper.";

  if (has("potatoes")) {
    return {
      title: "The nothing-left-behind traybake", time: "35–40 min", extras: "Olive oil, lemon, salt & pepper", picked,
      steps: [
        "Heat the oven to 200°C / 400°F. Cut potatoes into 1 cm cubes, toss with oil and salt, and roast for 15 minutes.",
        `Add ${join(sturdy.filter((item) => item.id !== "potatoes").map((item) => item.prep))}. Toss with a little more oil and roast for 15–20 minutes, until the potatoes are tender.`,
        has("spinach") ? "Stir in the spinach and return to the oven for 2 minutes to wilt. Finish with lemon and black pepper." : "Squeeze over lemon, add black pepper, and serve straight from the tray.",
      ],
    };
  }

  if (has("chickpeas") || has("lentils")) {
    const vegetables = sturdy.filter((item) => !["chickpeas", "lentils"].includes(item.id));
    const legumes = sturdy.filter((item) => ["chickpeas", "lentils"].includes(item.id));
    return {
      title: has("chickpeas") ? "The cupboard-magic chickpea skillet" : "The little lentil revival", time: "20 min", extras: "Olive oil, garlic, lemon, salt & pepper", picked,
      steps: [
        vegetables.length ? `Warm olive oil in a skillet. Add ${join(vegetables.map((item) => item.prep))} and cook for 8–10 minutes, until softened.` : "Warm a little olive oil in a skillet over medium heat.",
        `Stir in minced garlic and ${join(legumes.map((item) => item.prep))}. Add a splash of water and simmer for 5 minutes until hot.`,
        finish,
      ],
    };
  }

  return {
    title: "The odds-and-ends garden toast", time: "20 min", extras: "Bread, olive oil, garlic, lemon, salt & pepper", picked,
    steps: [
      `Warm olive oil in a skillet. Sauté ${names} for 10–12 minutes, until tender, adding minced garlic for the last minute.`,
      finish,
      "Toast thick slices of bread, pile the warm vegetables on top, and drizzle with a little olive oil.",
    ],
  };
}

export default function FridgeRescue() {
  const [selected, setSelected] = useState<string[]>([]);
  const [idea, setIdea] = useState<DinnerIdea | null>(null);

  function toggle(id: string) {
    setSelected((previous) => previous.includes(id) ? previous.filter((item) => item !== id) : previous.length < 3 ? [...previous, id] : previous);
    setIdea(null);
  }

  return (
    <section id="fridge-rescue" className={styles.section} aria-labelledby="rescue-heading">
      <div className={styles.container}>
        <header data-scroll-reveal="rise" className={styles.header}>
          <span className={styles.eyebrow}>Good food deserves a second act</span>
          <h2 id="rescue-heading">Rescue your fridge.<br /><em>Surprise yourself.</em></h2>
          <p>That last handful. That half-full jar. Pick three ingredients and give them a delicious new beginning.</p>
        </header>

        <div className={styles.experience}>
          <div data-scroll-reveal="left" className={styles.fridge}>
            <div className={styles.fridgeTop}><span className={styles.magnet}>use what<br /><em>you have ♡</em></span><span className={styles.fridgeLabel}>THE POSSIBILITIES SHELF</span></div>
            <div className={styles.shelves} role="group" aria-label="Choose three ingredients">
              {ingredients.map((ingredient) => {
                const picked = selected.includes(ingredient.id);
                return (
                  <button key={ingredient.id} type="button" className={`${styles.ingredient} ${picked ? styles.picked : ""}`} aria-pressed={picked} disabled={selected.length === 3 && !picked} onClick={() => toggle(ingredient.id)}>
                    <span className={styles.food} aria-hidden="true">{ingredient.emoji}</span>
                    <strong>{ingredient.name}</strong><span className={styles.detail}>{ingredient.detail}</span>
                    {picked && <span className={styles.check}><CheckIcon aria-hidden="true" /></span>}
                  </button>
                );
              })}
            </div>
            <div className={styles.controls}>
              <p role="status">{selected.length} of 3 picked<span>{selected.length === 3 ? "Ready for a little magic." : "Choose any three from the shelf."}</span></p>
              <button type="button" className={styles.rescue} disabled={selected.length !== 3} onClick={() => setIdea(rescue(selected.map((id) => ingredients.find((item) => item.id === id)!)))}>
                Rescue my fridge <ArrowRightIcon aria-hidden="true" />
              </button>
            </div>
          </div>

          <div data-scroll-reveal="right" className={styles.result} aria-live="polite" aria-atomic="true">
            {idea ? (
              <article className={styles.recipe}>
                <span className={styles.recipeLabel}><SparklesIcon aria-hidden="true" /> Your ingredients, reimagined <span>{idea.time}</span></span>
                <h3>{idea.title}</h3>
                <div className={styles.saved}>{idea.picked.map((item) => <span key={item.id}><span aria-hidden="true">{item.emoji}</span> {item.name}</span>)}</div>
                <p className={styles.extras}><strong>A few pantry friends</strong>{idea.extras}</p>
                <ol>{idea.steps.map((step, index) => <li key={index}><span aria-hidden="true">0{index + 1}</span><p>{step}</p></li>)}</ol>
                <button className={styles.reset} type="button" onClick={() => { setSelected([]); setIdea(null); }}>Try a different trio ↺</button>
              </article>
            ) : (
              <div className={styles.empty}>
                <span className={styles.doodle} aria-hidden="true">↗</span>
                <span className={styles.emptyArt} aria-hidden="true">✳</span>
                <h3>Odds, ends.<br /><em>A new beginning.</em></h3>
                <p>Your next good dinner might already be in the fridge. Pick a trio and let&apos;s find it.</p>
                <span className={styles.handwritten}>a little less waste, a little more wonder</span>
              </div>
            )}
          </div>
        </div>
        <footer className={styles.footer}><p>A little taste of pantry-first planning. These illustrative ideas assume fresh ingredients and basic pantry staples.</p><Link href="/apply">Get a plan made for your kitchen <ArrowRightIcon aria-hidden="true" /></Link></footer>
      </div>
    </section>
  );
}
