import Link from "next/link";
import styles from "./help.module.css";

export default function HelpNotFound() {
  return <main id="help-content" tabIndex={-1} className={styles.main}><div className={styles.notFound}><p className={styles.eyebrow}>Ampleat Help Center</p><h1>Let’s get you back<br />to the right place.</h1><p>This guide could not be found. Browse the Help Center to find the answer you need.</p><Link className={styles.primaryButton} href="/help">Explore the Help Center →</Link></div></main>;
}
