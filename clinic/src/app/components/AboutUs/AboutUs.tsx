import styles from "./AboutUs.module.css";
import CircleImage2 from "../CircleImage2/CircleImage2";

export default function AboutUs() {
  return (
    <section className={styles.section}>
  <CircleImage2 imageUrl="/assets/doctor_img1.png" />
      {/* <h2 className={styles.heading}>About Us</h2>
      <p className={styles.text}>Learn more about our clinic and team.</p> */}
    </section>
  );
}
