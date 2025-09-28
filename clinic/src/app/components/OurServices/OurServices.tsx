"use client";

import styles from "./OurServices.module.css";
import { useEffect } from "react";
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
        <h2 className={styles.heading}>Discover Our Services</h2>
        <p className={styles.text}>
          Discover the range of healthcare services we offer.
        </p>
      </div>
      <div className={styles.flexRow}>
        <div className={styles.tile}>
          <img
            src="/assets/personalized-care.png"
            alt="Personalized Care"
            className={styles.tileImage}
          />
          <div className={styles.tileText}>
            <span className={styles.dot} />
            <span className={styles.tileTitle}>Personalized Care</span>
            <div className={styles.tileSubtitle}>Tailored to Your Needs</div>
          </div>
        </div>
        <div className={styles.tile}>
          <img
            src="/assets/skilled-nursing.png"
            alt="Skilled Nursing"
            className={styles.tileImage}
          />
          <div className={styles.tileText}>
            <span className={styles.dot} />
            <span className={styles.tileTitle}>Skilled Nursing</span>
            <div className={styles.tileSubtitle}>
              Professional Medical Assistance
            </div>
          </div>
        </div>
        <div className={styles.tile}>
          <img
            src="/assets/therapy-services.png"
            alt="Therapy Services"
            className={styles.tileImage}
          />
          <div className={styles.tileText}>
            <span className={styles.dot} />
            <span className={styles.tileTitle}>Therapy Services</span>
            <div className={styles.tileSubtitle}>Rehabilitation and Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
