import styles from "./ConnectWithUs.module.css";

export default function ConnectWithUs() {
  return (
    <section className={styles.section}>
      <div className={styles.formCard}>
        <h2 className={styles.heading}>Connect With Us</h2>
        <p className={styles.text}>
          We&apos;re here to help. Fill out the form below and we&apos;ll get back to you
          as soon as possible.
        </p>
        <form className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.label}>
                First name <span className={styles.required}>*</span>
              </label>
              <input type="text" id="firstName" name="firstName" className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.label}>
                Last name <span className={styles.required}>*</span>
              </label>
              <input type="text" id="lastName" name="lastName" className={styles.input} required />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email <span className={styles.required}>*</span>
            </label>
            <input type="email" id="email" name="email" className={styles.input} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>Phone</label>
            <div className={styles.phoneInputContainer}>
              <select name="countryCode" className={styles.countryCode}>
                <option value="+1">US +1</option>
                <option value="+44">UK +44</option>
                <option value="+91">IN +91</option>
              </select>
              <input type="tel" id="phone" name="phone" className={styles.input} />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="title" className={styles.label}>Title <span className={styles.required}>*</span></label>
            <input type="text" id="title" name="title" className={styles.input} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" name="message" rows={4} className={styles.textarea}></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </section>
  );
}
