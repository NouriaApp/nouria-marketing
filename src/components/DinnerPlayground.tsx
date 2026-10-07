"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowPathIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import styles from "./DinnerPlayground.module.css";

const moods = [
  { label: "Keep it quick", note: "Less prep. More living.", meals: [
    { name: "Sunshine chickpea bowls", description: "Crunchy cucumber, bright lemon, and a little pantry magic.", ingredients: ["Chickpeas", "Cucumber", "Lemon"], time: "15 min", art: "🥒", color: "sage" },
    { name: "Tomato toast, all dressed up", description: "Juicy tomatoes, creamy white beans, and a golden slice of sourdough.", ingredients: ["Tomatoes", "White beans", "Sourdough"], time: "10 min", art: "🍅", color: "peach" },
    { name: "Peanut noodles in a hurry", description: "Slurpable noodles, crisp carrots, and a creamy peanut-lime sauce.", ingredients: ["Noodles", "Peanut butter", "Carrots"], time: "15 min", art: "🥜", color: "sage" },
    { name: "Green goddess quesadillas", description: "Golden tortillas with melty cheese, spinach, and a cool avocado finish.", ingredients: ["Tortillas", "Spinach", "Avocado"], time: "15 min", art: "🥑", color: "peach" },
    { name: "Garlicky shrimp & couscous", description: "A quick skillet of lemony shrimp with fluffy couscous to catch every last drop.", ingredients: ["Shrimp", "Couscous", "Garlic"], time: "20 min", art: "🍤", color: "sage" },
  ] },
  { label: "Something cozy", note: "A little comfort on a plate.", meals: [
    { name: "Golden roasted squash pasta", description: "Sweet roasted squash meets twirly pasta and a generous pinch of sage.", ingredients: ["Squash", "Pasta", "Sage"], time: "35 min", art: "🍝", color: "peach" },
    { name: "One-pot lemony lentils", description: "A warm, spoonable bowl with tender lentils, spinach, and a citrus finish.", ingredients: ["Lentils", "Spinach", "Lemon"], time: "30 min", art: "🍋", color: "sage" },
    { name: "Creamy mushroom polenta", description: "Buttery mushrooms tucked into soft polenta. Bring a spoon and a slow evening.", ingredients: ["Mushrooms", "Polenta", "Thyme"], time: "35 min", art: "🍄", color: "peach" },
    { name: "Smoky sweet potato chili", description: "A bubbling pot of sweet potatoes, black beans, and smoky paprika.", ingredients: ["Sweet potatoes", "Black beans", "Tomatoes"], time: "40 min", art: "🍠", color: "sage" },
    { name: "Sunday-style chicken & rice", description: "Tender chicken, fragrant rice, and the kind of one-pot comfort any day deserves.", ingredients: ["Chicken", "Rice", "Carrots"], time: "40 min", art: "🍗", color: "peach" },
  ] },
  { label: "Feeling adventurous", note: "Same kitchen. New possibilities.", meals: [
    { name: "Crispy tofu taco night", description: "Crispy edges, tangy slaw, and a squeeze of lime. Your Tuesday, upgraded.", ingredients: ["Tofu", "Cabbage", "Tortillas"], time: "25 min", art: "🌮", color: "peach" },
    { name: "Miso mushroom rice bowls", description: "Savory mushrooms, fluffy rice, and a glossy miso drizzle worth staying in for.", ingredients: ["Mushrooms", "Rice", "Miso"], time: "30 min", art: "🍄", color: "sage" },
    { name: "Harissa cauliflower flatbreads", description: "Spiced cauliflower, cool yogurt, and warm flatbread with a little heat.", ingredients: ["Cauliflower", "Harissa", "Flatbread"], time: "30 min", art: "🥙", color: "peach" },
    { name: "Coconut curry with a mango twist", description: "Silky coconut curry with chickpeas and sweet mango to brighten every bite.", ingredients: ["Chickpeas", "Coconut milk", "Mango"], time: "30 min", art: "🥭", color: "sage" },
    { name: "Gochujang sesame eggplant", description: "Sticky, spicy eggplant over rice with a shower of toasted sesame seeds.", ingredients: ["Eggplant", "Gochujang", "Sesame"], time: "35 min", art: "🍆", color: "peach" },
  ] },
];

export default function DinnerPlayground() {
  const [mood, setMood] = useState(0);
  const [decks, setDecks] = useState(() => moods.map((item) => ({
    current: 0,
    remaining: item.meals.map((_, index) => index).slice(1),
  })));
  const selectedMood = moods[mood];
  const meal = selectedMood.meals[decks[mood].current];

  function shuffleMeal() {
    const deck = decks[mood];
    // Draw without replacement; preserve each mood's deck when switching moods.
    const remaining = deck.remaining.length ? deck.remaining : selectedMood.meals.map((_, index) => index);
    const choices = remaining.filter((index) => index !== deck.current);
    const next = choices[Math.floor(Math.random() * choices.length)];
    setDecks((previous) => previous.map((item, index) => index === mood
      ? { current: next, remaining: remaining.filter((candidate) => candidate !== next) }
      : item));
  }

  return (
    <section id="dinner-playground" className={styles.section} aria-labelledby="dinner-heading">
      <div className={styles.playground}>
        <div data-scroll-reveal="rise" className={styles.copy}>
          <span className={styles.eyebrow}>A little kitchen inspiration</span>
          <h2 id="dinner-heading">Same pantry.<br /><em>Plot twist.</em></h2>
          <p>Good dinners start with a little curiosity. Pick tonight&apos;s mood and see where a few everyday ingredients could take you.</p>
          <div className={styles.moods} role="group" aria-label="Choose your dinner mood">
            {moods.map((item, index) => (
              <button key={item.label} type="button" aria-pressed={mood === index} onClick={() => setMood(index)} className={mood === index ? styles.selected : undefined}>
                {item.label}
              </button>
            ))}
          </div>
          <button type="button" className={styles.shuffle} onClick={shuffleMeal}>
            <ArrowPathIcon aria-hidden="true" /> Another little plot twist
          </button>
          <Link href="/apply" className={styles.link}>Make room for your next favorite <ArrowUpRightIcon aria-hidden="true" /></Link>
        </div>

        <div className={styles.scene}>
          <span className={styles.handwritten} aria-hidden="true">what&apos;s for dinner? ↘</span>
          <div data-scroll-reveal="tilt" className={styles.recipe}>
            <span className={styles.tape} aria-hidden="true" />
            <div className={styles.recipeContent} aria-live="polite" aria-atomic="true">
              <div className={`${styles.illustration} ${styles[meal.color]}`} aria-hidden="true">
                <div className={styles.plate}><span>{meal.art}</span><i /><i /><i /></div>
                <span className={styles.sparkle}>✳</span>
                <span className={styles.caption}>a fresh take on everyday</span>
              </div>
              <div className={styles.recipeBody}>
                <div className={styles.meta}><span>Tonight&apos;s possibility</span><span>{meal.time}</span></div>
                <h3>{meal.name}</h3>
                <p>{meal.description}</p>
                <div className={styles.ingredients}>{meal.ingredients.map((ingredient) => <span key={ingredient}>{ingredient}</span>)}</div>
              </div>
            </div>
          </div>
          <span className={styles.sticker} aria-hidden="true">a pinch of<br /><em>possibility</em><span>✦</span></span>
          <p className={styles.note}>{selectedMood.note}</p>
          <span className={styles.demo}>Illustrative meal ideas. Your plan will be personal.</span>
        </div>
      </div>
    </section>
  );
}
