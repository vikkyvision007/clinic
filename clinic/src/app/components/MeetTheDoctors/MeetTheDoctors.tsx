import styles from "./MeetTheDoctors.module.css";
import CircleImage2 from "../CircleImage2/CircleImage2";

export default function MeetTheDoctors() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Meet the Doctors</h2>
      <div className={styles.doctorsRow}>
        <div>
          <CircleImage2 imageUrl="/assets/doctor_img1.png" />
          <span className={styles.chip}>Doctor Vijaya Singh</span>
        </div>
        <div>
          <CircleImage2 imageUrl="/assets/father_son.png" />
          <span className={styles.chip}>Doctor Aryan Patel</span>
        </div>
        <div>
          <CircleImage2 imageUrl="/assets/doctor_img1.png" />
          <span className={styles.chip}>Doctor Meera Sharma</span>
        </div>
      </div>
    </section>
  );
}
