import styles from "./AboutUs.module.css";
import CircleImage2 from "../CircleImage2/CircleImage2";

export default function AboutUs() {
  return (
    <section className={styles.section}>
      {/* <CircleImage2 imageUrl="/assets/doctor_img1.png" /> */}
      <div className={styles.textContainer}>
        <h2>Maa Padmavati Homeo Clinic</h2>
        <p>
          Welcome to Maa Padmavati Homeo Clinic, where your journey to lasting wellness begins.
          We believe in providing compassionate, holistic care that addresses the root cause of illness, not just the symptoms. Our mission is to guide you toward a healthier, more balanced life using the gentle and effective principles of homeopathy.
          We are dedicated to partnering with you on your path to recovery, offering personalized treatment plans and a supportive environment.
          At our clinic, we are committed to helping you achieve true and sustainable health, empowering you to live your life to the fullest.
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
          <img src="/assets/Doc_Medicine-1.jpg" alt="Doctor 2" />
        </div>
      </div>
    </section>
  );
}
