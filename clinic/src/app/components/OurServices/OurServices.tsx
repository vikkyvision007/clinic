"use client";

import styles from "./OurServices.module.css";
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurServices() {
  useEffect(() => {
    let triggers: ScrollTrigger[] = [];

    function setup() {
      triggers.forEach((trigger) => trigger.kill());
      triggers = [];

      const tiles = document.querySelectorAll(`.${styles.tile}`);

      tiles.forEach((tile) => {
        const image = tile.querySelector(`.${styles.tileImage}`);
        if (!image) return;

        gsap.set(image, { rotateY: -80});

        const trigger = gsap.to(image, {
          rotateY: 0,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: tile,
            start: "top 90%",
            end: "center center",
            scrub: 1.5,
            onUpdate: (self) => {
              const progress = Math.max(0, Math.min(self.progress, 1));
              const rotateY = -80 * (1 - progress);
              gsap.set(image, { rotateY });
            },
          },
        }).scrollTrigger;
        if (trigger) triggers.push(trigger);
      });
    }

    setup();
    window.addEventListener("resize", setup);

    return () => {
      window.removeEventListener("resize", setup);
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.textContent}>
        <h2>Our Specializations: Where Experience Meets Healing</h2>
        <p className={styles.text}>
          Led by professional physicians Dr. Vijaya Singh and Dr. Amit Kumar, with 14 years of expertise in chronic cases, Maa Padmavati Homeo Clinic offers profound, personalized care. We aim to initiate a deep level of healing that addresses the root cause of your ailments, ensuring sustainable health and vitality.
        </p>
      </div>
      <div className={styles.flexRow}>
        <div className={styles.tile}>
          <Image
            src="/assets/personalized-care.png"
            alt="Personalized Care"
            className={styles.tileImage}
            width={225}
            height={450}
          />
          <div className={styles.tileText}>
            <h4 className={styles.tileTitle}>Advanced Care for Women&rsquo;s Health</h4>
            <div className={styles.tileSubtitle}>Gynaecological Problems, PCOD, Fibroid, Infertility</div>
            <div className={styles.tileContent}>
              <ul>
                <li>
                  <strong>PCOD (Polycystic Ovarian Disease):</strong> We offer constitutional treatment to regulate menstrual cycles, curb excess hair growth (hirsutism), manage weight fluctuations, and clear PCOD-related acne, addressing the underlying hormonal dysregulation.
                </li>
                <li>
                  <strong>Fibroid (Uterine Fibroids):</strong> Personalized remedies are used to reduce the size and symptoms of uterine fibroids, alleviating heavy bleeding and pain without invasive procedures.
                </li>
                <li>
                  <strong>Gynaecological Problems:</strong> Management of painful periods (dysmenorrhea), irregular cycles, pre-menstrual syndrome (PMS), and other chronic discomforts.
                </li>
                <li>
                  <strong>Infertility:</strong> We provide supportive treatment for couples, working to enhance the vitality and reproductive health of both partners by correcting underlying health imbalances.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.tile}>
          <Image
            src="/assets/skilled-nursing.png"
            alt="Skilled Nursing"
            className={styles.tileImage}
            width={225}
            height={450}
          />
          <div className={styles.tileText}>
            <h4 className={styles.tileTitle}>Deep Healing for Skin and Allergies</h4>
            <div className={styles.tileSubtitle}>
              Skin Diseases, Allergic Diseases, Psoriasis
            </div>
            <div className={styles.tileContent}>
              <ul>
                <li>
                  <strong>Psoriasis:</strong> A highly specialized area for our clinic. We focus on controlling the overactive immune response and managing the rapid skin cell turnover, offering long-term reduction of patches and discomfort.
                </li>
                <li>
                  <strong>Skin Diseases:</strong> Effective treatment for chronic conditions like Eczema, Urticaria (Hives), and stubborn Acne that have failed to respond to topical therapies.
                </li>
                <li>
                  <strong>Allergic Diseases:</strong> Comprehensive management of seasonal and perennial allergies, including Allergic Rhinitis (Hay Fever) and Asthma, by boosting the body&apos;s immunity and reducing its abnormal sensitivity to allergens.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.tile}>
          <Image
            src="/assets/therapy-services.png"
            alt="Therapy Services"
            className={styles.tileImage}
            width={225}
            height={450}
          />
          <div className={styles.tileText}>
            <h4 className={styles.tileTitle}>Chronic & Systemic Disorders</h4>
            <div className={styles.tileSubtitle}>Autoimmune Diseases, Endocrine Diseases, Renal Stone</div>
            <div className={styles.tileContent}>
              <ul>
                <li>
                  <strong>Autoimmune Diseases:</strong> We aim to modify the inappropriate immune response that targets the body&apos;s own tissues. Treatment focuses on reducing inflammation, minimizing the severity and frequency of flare-ups, and improving overall function.
                </li>
                <li>
                  <strong>Endocrine Diseases:</strong> Restoring balance to hormonal systems, including issues related to the thyroid, adrenals, and other glands. We help the body regulate itself rather than providing artificial replacements.
                </li>
                <li>
                  <strong>Renal Stone:</strong> We offer remedies that can help in the dissolution and easy passage of kidney stones, along with preventative constitutional treatment to significantly reduce the chances of future stone formation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.flexRow}>
        <div className={styles.tile}>
          <Image
            src="/assets/personalized-care.png"
            alt="Personalized Care"
            className={styles.tileImage}
            width={225}
            height={450}
          />
          <div className={styles.tileText}>
            <h4 className={styles.tileTitle}>Mental, Emotional & Neurological Care</h4>
            <div className={styles.tileSubtitle}>Depression, Mental Diseases, Migraine</div>
            <div className={styles.tileContent}>
              <ul>
                <li>
                  <strong>Depression and Mental Diseases:</strong> We provide gentle, holistic remedies to address deep-seated grief, stress, anxiety, and depression, working to uplift the patient&apos;s internal state and restore mental equilibrium.
                </li>
                <li>
                  <strong>Migraine:</strong> Beyond pain relief, our focus is on identifying the individual triggers (hormonal, stress-related, dietary) and prescribing a constitutional remedy that prevents the onset of debilitating migraine episodes.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.tile}>
          <Image
            src="/assets/skilled-nursing.png"
            alt="Skilled Nursing"
            className={styles.tileImage}
            width={225}
            height={450}
          />
          <div className={styles.tileText}>
            <h4 className={styles.tileTitle}>Paediatrics & Genetics</h4>
            <div className={styles.tileSubtitle}>
              Specialized Paediatric and Genetic Support
            </div>
            <div className={styles.tileContent}>
              <ul>
                <li>
                  <strong>Paediatric Problems:</strong> Offering safe, side-effect-free solutions for common childhood ailments, recurrent tonsillitis, bed-wetting (enuresis), and managing behavioral and developmental issues in children.
                </li>
                <li>
                  <strong>Genetic Disorder Support:</strong> For individuals with hereditary predispositions, we offer deep-acting, supportive constitutional treatment. Our goal is to strengthen the body&apos;s overall vitality, manage symptoms, and help prevent the full expression of the hereditary tendency, thus improving the quality of life.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.tile}>
          <Image
            src="/assets/therapy-services.png"
            alt="Therapy Services"
            className={styles.tileImage}
            width={225}
            height={450}
          />
          <div className={styles.tileText}>
            <h4 className={styles.tileTitle}>Building Resilience</h4>
            <div className={styles.tileSubtitle}>Foundational Wellness & Preventative Care</div>
            <div className={styles.tileContent}>
              <ul>
                <li>
                  <strong>Immunity Optimization:</strong> Target underlying causes of recurrent sickness (colds, tonsillitis, chronic fever) to powerfully reinforce immune defenses, significantly reducing illness frequency and severity.
                </li>
                <li>
                  <strong>Post-Illness Recovery:</strong> Critical supportive care to fully recover after illness, injury, or surgery. Quickly regain energy and vitality and prevent short-term weakness from becoming chronic.
                </li>
                <li>
                  <strong>Managing Stress & Fatigue:</strong> Homeopathy improves sleep quality, and naturally restores energy levels, preventing stress-related physical disease.
                </li>
                <li>
                  <strong>Breaking the Cycle of Recurrence:</strong> Eliminate the tendency for repeated UTIs, respiratory infections, seasonal allergies, by symptomatic medication.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
