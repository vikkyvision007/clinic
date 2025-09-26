import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header className={styles.navBar}>
      <nav className={styles.menu}>
        <Link href="/about-us" className={styles.menuItem}>About</Link>
        <Link href="/our-services" className={styles.menuItem}>Services</Link>
        <Link href="/benefits" className={styles.menuItem}>Benefits</Link>
        <Link href="/meet-the-doctors" className={styles.menuItem}>Meet the Team</Link>
        <Link href="/testimonials" className={styles.menuItem}>Testimonials</Link>
      </nav>
      <Link href="/book-appointment" className={styles.bookBtn}>
        <button type="button" className={styles.bookBtnButton}>
          Book an Appointment
        </button>
      </Link>

    </header>
  );
}
