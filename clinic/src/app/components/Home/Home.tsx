import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  return (
    <section className={styles.section}>
      <NavBar />
      <div className={styles.careTile}>
        <h2>Discover Homeopathy and Wellness</h2>
        <p>
          Homeopathic care is valued for its holistic and personalized approach. The in-depth consultation allows practitioners to assess a patient&apos;s complete physical and emotional profile, ensuring they feel profoundly heard. This highly individualized focus builds a strong therapeutic relationship and contributes to high patient satisfaction. The remedies are extremely diluted, offering an excellent safety profile with virtually no side effects, making it appealing for sensitive individuals. Patients often report overall wellness improvements, including better sleep, mood, and energy, fostering a sense of self-care beyond just symptom relief.
          </p>
        <button className={styles.contactBtn}>Contact us</button>
      </div>
    </section>
  );
}
