import styles from "./MeetTheDoctors.module.css";
import CircleImage2 from "../CircleImage2/CircleImage2";

export default function MeetTheDoctors() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Meet the Doctors</h2>
      <div className={styles.doctorsRow}>
        <div className={styles.doctorColumn}>
          <CircleImage2 imageUrl="/assets/doctor_img1.png" />
          <span className={styles.chip}>
            <img
              src="/assets/icons/medical-18.svg"
              alt="Medical Icon"
              className={styles.chipIcon}
            />
            Doctor Vijaya Singh
          </span>
        </div>
        <div className={styles.doctorColumn}>
          <CircleImage2 imageUrl="/assets/father_son.png" />
          <span className={styles.chip}>
            <img
              src="/assets/icons/medical-18.svg"
              alt="Medical Icon"
              className={styles.chipIcon}
            />
            Doctor Aryan Patel
          </span>
        </div>
        <div className={styles.doctorColumn}>
          <CircleImage2 imageUrl="/assets/doctor_img1.png" />
          <span className={styles.chip}>
            <img
              src="/assets/icons/medical-18.svg"
              alt="Medical Icon"
              className={styles.chipIcon}
            />
            Doctor Meera Sharma
          </span>
        </div>
      </div>
    </section>
  );
}
