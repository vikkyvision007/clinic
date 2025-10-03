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
        <h2 className={styles.heading}>Our Specializations: Where Experience Meets Healing</h2>
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
            <span className={styles.tileTitle}>Advanced Care for Women&rsquo;s Health</span>
            <div className={styles.tileSubtitle}>Gynaecological Problems, PCOD, Fibroid, Infertility</div>
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
            <span className={styles.tileTitle}>Deep Healing for Skin and Allergies</span>
            <div className={styles.tileSubtitle}>
              Skin Diseases, Allergic Diseases, Psoriasis
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
            <span className={styles.tileTitle}>Chronic & Systemic Disorders</span>
            <div className={styles.tileSubtitle}>Autoimmune Diseases, Endocrine Diseases, Renal Stone</div>
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
            <span className={styles.tileTitle}>Mental, Emotional & Neurological Care</span>
            <div className={styles.tileSubtitle}>Depression, Mental Diseases, Migraine</div>
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
            <span className={styles.tileTitle}>Paediatrics & Genetics</span>
            <div className={styles.tileSubtitle}>
              Specialized Paediatric and Genetic Support
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
            <span className={styles.dot} />
            <span className={styles.tileTitle}>Building Resilience</span>
            <div className={styles.tileSubtitle}>Foundational Wellness & Preventative Care</div>
          </div>
        </div>
      </div>
    </section>
  );
}
