"use client";

import { useState } from "react";
import Link from "next/link";
import { CameraIcon, ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import styles from "./AmpleatVision.module.css";

const modes = [
  { name: "Quick Scan", title: "One ingredient. A head start.", description: "Point your iPhone at an ingredient, package, jar, or bag. Get a suggested name, visible brand, quantity, category, and storage area to review.", scene: "🍅", label: "Single ingredient", items: [{ name: "Tomatoes", quantity: "3 items", storage: "Fridge · Vegetables", note: "Review quantity" }] },
  { name: "Shelf Sweep", title: "A whole shelf, in a few photos.", description: "Capture a shelf or group of ingredients. Review multiple detected items together instead of entering each one by hand.", scene: "🫘 🫙 🍝", label: "Pantry shelf", items: [{ name: "Chickpeas", quantity: "2 cans", storage: "Pantry · Canned foods", note: "Review label" }, { name: "Pasta", quantity: "1 package", storage: "Pantry · Pasta", note: "Review quantity" }] },
  { name: "Kitchen Reset", title: "Full kitchen? Start right here.", description: "Scan your fridge, pantry, freezer, and drawers in sections. Confirm or edit what AmpleatVision finds, one manageable batch at a time.", scene: "🥬 🥕 🧀", label: "Fridge section", items: [{ name: "Spinach", quantity: "1 bag", storage: "Fridge · Vegetables", note: "Check expiry" }, { name: "Carrots", quantity: "4 items", storage: "Fridge · Vegetables", note: "Review quantity" }] },
  { name: "Spice Cabinet Mode", title: "Small jars. Big possibilities.", description: "Give tiny containers and hard-to-read spice labels their own scan. Bring the flavors hiding in your spice drawer into your pantry inventory.", scene: "🫙 🫙 🫙", label: "Spice drawer", items: [{ name: "Ground cumin", quantity: "1 jar", storage: "Pantry · Spices", note: "Check remaining amount" }, { name: "Paprika", quantity: "1 jar", storage: "Pantry · Spices", note: "Review label" }] },
];

const details = [
  { title: "Label Assist", text: "Reads visible names and package details, with product lookup when a barcode is readable." },
  { title: "Restock Check", text: "Review what you’re running low on, alongside the ingredients already in your kitchen." },
  { title: "Scan Before Cooking", text: "Confirm the ingredients in front of you, then find meal ideas that use them." },
  { title: "Use What’s There", text: "Loose tomatoes, beans, spices in jars, and leftovers count too. No barcode required." },
  { title: "Review Before Saving", text: "Edit detected cards and review uncertainty flags. You confirm before anything is saved." },
  { title: "Duplicate Detection & Smart Merging", text: "Repeated items across photos can be matched, with existing pantry stock merged instead of duplicated." },
  { title: "Bad Input Handling", text: "Quantities, dates, low-stock values, and text fields are checked before they reach your pantry." },
  { title: "Scan History", text: "Revisit and reuse past scans, so a big kitchen setup can happen over several sessions." },
];

export default function AmpleatVision() {
  const [active, setActive] = useState(0);
  const mode = modes[active];

  return (
    <section id="ampleat-vision" className={styles.section} aria-labelledby="vision-heading">
      <div className={styles.container}>
        <div data-scroll-reveal="rise" className={styles.intro}>
          <span className={styles.eyebrow}><CameraIcon aria-hidden="true" /> AmpleatVision</span>
          <h2 id="vision-heading">Your kitchen, scanned.<br /><em>Your pantry, understood.</em></h2>
          <p>Skip typing out a full kitchen. Walk around, scan sections, and confirm the results. Pantry setup should feel like a fresh start.</p>
        </div>
        <div className={styles.showcase}>
          <div data-scroll-reveal="left" className={styles.controls}>
            <div className={styles.modes} role="group" aria-label="Explore AmpleatVision scan modes">
              {modes.map((item, index) => <button key={item.name} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className={active === index ? styles.active : undefined}><span>0{index + 1}</span>{item.name}<ArrowRightIcon aria-hidden="true" /></button>)}
            </div>
            <div className={styles.description} aria-live="polite" aria-atomic="true"><h3>{mode.title}</h3><p>{mode.description}</p></div>
            <Link href="/apply" className={styles.cta}>Meet your kitchen companion <ArrowRightIcon aria-hidden="true" /></Link>
          </div>
          <div data-scroll-reveal="zoom" className={styles.preview}>
            <div className={styles.previewHeader}><span><CameraIcon aria-hidden="true" /> {mode.name}</span><span>Scan → Review → Confirm</span></div>
            <div className={styles.viewfinder} aria-hidden="true"><span className={styles.corner} /><span className={styles.corner} /><span className={styles.corner} /><span className={styles.corner} /><span className={styles.food}>{mode.scene}</span><span className={styles.sceneLabel}>{mode.label}</span></div>
            <div className={styles.detected}>
              <span className={styles.reviewLabel}>A first pass. You have the final say.</span>
              {mode.items.map((item) => <div className={styles.item} key={item.name}><span className={styles.itemIcon}><CheckIcon aria-hidden="true" /></span><div><strong>{item.name}</strong><p>{item.storage}</p><span className={styles.flag}>{item.note}</span></div><span className={styles.quantity}>{item.quantity}</span></div>)}
            </div>
            <p className={styles.previewNote}>Illustrative preview of the iPhone scan flow.</p>
          </div>
        </div>
        <div className={styles.details}>{details.map((item) => <div key={item.title} data-scroll-reveal="rise"><span className={styles.dot} aria-hidden="true" /><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>
        <p className={styles.signature}>Less typing. More cooking. <span>Make more of what you have.</span></p>
      </div>
    </section>
  );
}
