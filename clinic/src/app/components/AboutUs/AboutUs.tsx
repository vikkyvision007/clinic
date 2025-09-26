import styles from "./AboutUs.module.css";
import CircleImage2 from "../CircleImage2/CircleImage2";

export default function AboutUs() {
  return (
    <section className={styles.section}>
      {/* <CircleImage2 imageUrl="/assets/doctor_img1.png" /> */}
      <div className={styles.textContainer}>
        <h2>About Maa Padmavathi Homeo Clinic</h2>
        <p>
          Welcome to Maa Padmavathi Homeo Clinic, a trusted center for holistic health and healing conveniently located in the serene environs of Sarnath, Varanasi. For over 15 years, we have been dedicated to providing personalized and effective homeopathic care that addresses the root cause of ailments, not just the symptoms. Our clinic is founded on the principle of treating each patient with compassion and understanding, ensuring a comfortable and seamless healing journey for all. We pride ourselves on being an accessible and inclusive space, welcoming new patients with open arms and offering modern conveniences to make your experience with us as smooth as possible. At Maa Padmavathi Homeo Clinic, your well-being is our highest priority.
        </p>
      </div>
      <div className={styles.imagesContainer}>
        <div className={styles.imageBox}>
          <img src="/assets/elder_man_doctor.png" alt="Doctor 1" />
        </div>
        <div className={styles.imageBox}>
          <img src="/assets/elder_women_caretaker.png" alt="Doctor Banner" />
        </div>
        <div className={styles.imageBox}>
          <img src="/assets/father_son.png" alt="Doctor 2" />
        </div>
      </div>
    </section>
  );
}
