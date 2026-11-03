import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./help.module.css";

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.root}>
    <a className={styles.skipLink} href="#help-content" data-skip-link>Skip to help content</a>
    <Navbar />
    {children}
    <Footer />
  </div>;
}
