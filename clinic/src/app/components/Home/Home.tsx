import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  return (
    <section className={styles.section}>
      <NavBar />
      <h2 className={styles.heading}>Home</h2>
      <p className={styles.text}>Welcome to our clinic homepage!</p>
    </section>
  );
}
