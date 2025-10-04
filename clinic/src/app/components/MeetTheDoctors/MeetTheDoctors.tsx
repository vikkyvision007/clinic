import styles from "./MeetTheDoctors.module.css";
import CircleImage2 from "../CircleImage2/CircleImage2";
import Image from "next/image";

export default function MeetTheDoctors() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Meet the Doctors</h2>
      <div className={styles.twoSectionRow}>
        <div className={styles.leftSection}>
          <div className={styles.doctorColumn}>
            <CircleImage2 imageUrl="/assets/doctor_img1.png" />
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.doctorDetailsCard}>
            <div className={styles.cardHeader}>
              <div className={styles.doctorIconCoin}>
                <Image
                  src="/assets/icons/medical-18.svg"
                  alt="Medical Icon"
                  width={80}
                  height={80}
                />
              </div>
              <div className={styles.doctorNameAndTitle}>
                <h3>Dr. Vijaya Singh</h3>
                <h5>B.H.M.S., D.A.F.E., C.G.O., C.S.D. <br/>Ex-RMO Distt. Hosp. Barabanki</h5>
              </div>
            </div>
            <p>
              Dr. Vijaya Singh is a highly experienced practitioner known for her meticulous case analysis and deeply compassionate approach to healing.
            </p>
            <strong>Specialization and Expertise: </strong>
            <ul>
              <li>
                14 Years of Practice: Dr. Singh has dedicated her career to classical homeopathy, focusing on persistent and recurrent health issues.
              </li>
              <li>
                Mastery in Chronic Cases: She holds a distinguished record in successfully treating complex, long-standing conditions such as Autoimmune Disorders, Persistent Allergies, and Emotional Health issues (Anxiety, Depression).
              </li>
              <li>
                Patient-Centric Approach: Dr. Vijaya Singh believes in spending the time required to understand the emotional and mental state of her patients, knowing that true healing must encompass the mind and body.
              </li>
              <li>
                Commitment to Women&apos;s Health: She has a particular focus on addressing hormonal imbalances, PCOD, and menopausal symptoms using gentle, natural remedies.
              </li>
            </ul>
            <p>
              Dr. Vijaya Singh&apos;s philosophy is rooted in the belief that the right homeopathic remedy can awaken the body&apos;s natural wisdom to restore perfect harmony.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.twoSectionRow}>
        <div className={`${styles.rightSection} ${styles.orderOnMobile}`}>
          <div className={styles.doctorDetailsCard}>
            <div className={styles.cardHeader}>
              <div className={styles.doctorIconCoin}>
                <Image
                  src="/assets/icons/medical-18.svg"
                  alt="Medical Icon"
                  width={80}
                  height={80}
                />
              </div>
              <div className={styles.doctorNameAndTitle}>
                <h3>Dr. Amit Kumar</h3>
                <h5>B.H.M.S., D.A.F.E. (Goldmedalist)
                  <br />D.N.H.E., SCPH (ICHM,UN) MEDICAL OFFICER</h5>
              </div>
            </div>
            <p>
              Dr. Amit Kumar is a results-driven physician respected for his systematic approach to diagnosis and his expertise in treating challenging physical ailments.
            </p>
            <strong>Specialization and Expertise: </strong>
            <ul>
              <li>
                14 Years Focused on Homeopathy: Dr. Amit Kumar brings a wealth of clinical experience, emphasizing evidence-based and principled homeopathic practice.
              </li>
              <li>
                Focus on Physical and Structural Ailments: He specializes in helping patients with Chronic Pain, Migraines, Digestive Disorders (IBS, acidity), and various Skin conditions (Eczema, Psoriasis).
              </li>
              <li>
                Clinical Precision: Dr. Amit Kumar is adept at integrating modern diagnostic understanding with classical homeopathic prescription, ensuring both accuracy and depth in treatment.
              </li>
              <li>
                Dedication to Long-Term Wellness: He guides patients on dietary and lifestyle modifications alongside their remedies, promoting not just recovery, but a sustainable change in their health trajectory.
              </li>
            </ul>
            <p>
              Dr. Amit Kumar is dedicated to demystifying homeopathy, ensuring every patient understands the path to their own healing and recovery.
            </p>
          </div>
        </div>
        <div className={styles.leftSection}>
          <div className={styles.doctorColumn}>
            <CircleImage2 imageUrl="/assets/father_son.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
