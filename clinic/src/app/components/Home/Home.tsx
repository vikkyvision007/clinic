import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  return (
    <section className={styles.section}>
      <NavBar />
      <div className={styles.careTile}>
        <h1>Discover<br/>Quality Care</h1>
        <h2>Customized and Reliable Health Care Right at your Home</h2>
        <p>
          Welcome to Bary, where we prioritize your health and well-being with personalized home health care services. Our dedicated team ensures you receive the highest quality care in the comfort of your own home.
        </p>
        <button className={styles.contactBtn}>Contact us</button>
      </div>
    </section>
  );
}
