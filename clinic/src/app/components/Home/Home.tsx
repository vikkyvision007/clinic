import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  return (
    <section className={styles.section}>
      <NavBar />
      <div className={styles.careTile}>
        <h2>Discover Homeopathy and Wellness</h2>
        <p>
          <strong> Individualized, Holistic Assessment:</strong> We select a precise remedy based on your unique 'totality of symptoms'—physical, mental, and emotional—ensuring treatment targets the root cause, not just the diagnosis.<br />

          <strong> Maximum Safety, Zero Toxicity:</strong>Remedies are non-toxic, free of chemical side effects, and safe for long-term use with no risk of drug dependency or addiction.<br />

          <strong> Aiming for Cure, Not Suppression:</strong> Homeopathy stimulates the body’s self-healing mechanisms, allowing symptoms to naturally recede for a deep, lasting state of health.<br />
        </p>
      </div>
    </section>
  );
}
