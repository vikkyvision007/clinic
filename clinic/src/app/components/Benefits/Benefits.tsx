"use client";

import styles from "./Benefits.module.css";
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Benefits() {
  useEffect(() => {
    let triggers: ScrollTrigger[] = [];

    function setupAnimations() {
      // Kill existing triggers to prevent duplicates on re-renders/resizes
      triggers.forEach((trigger) => trigger.kill());
      triggers = [];

      const rowElements = document.querySelectorAll<HTMLElement>(`.${styles.row}`);
      if (!rowElements.length) return;

      rowElements.forEach((rowElement) => {
        const coinElement = rowElement.querySelector<HTMLElement>(`.${styles.coin}`);
        const tileElement = rowElement.querySelector<HTMLElement>(`.${styles.tile}`);

        if (coinElement && tileElement) {
          // Initial state: elements are 200px apart from their final position
          const isCoinFirst = coinElement.compareDocumentPosition(tileElement) & Node.DOCUMENT_POSITION_FOLLOWING;

          // Set initial positions based on element order
          gsap.set(coinElement, { x: isCoinFirst ? -200 : 200 });
          gsap.set(tileElement, { x: isCoinFirst ? 200 : -200 });

          // Animation for the coin element (moves right towards the center)
          const coinTrigger = gsap.to(coinElement, {
            x: 0, // Move to its original position
            ease: "power1.out",
            scrollTrigger: {
              trigger: rowElement, // Trigger when the row comes into view
              start: "top 80%", // Start animation when top of row is 80% down the viewport
              end: "center center", // End animation when center of row is at center of viewport
              scrub: 1, // Smoothly link animation to scroll progress
            },
          }).scrollTrigger;
          if (coinTrigger) triggers.push(coinTrigger);

          // Animation for the tile element (moves left towards the center)
          const tileTrigger = gsap.to(tileElement, {
            x: 0, // Move to its original position
            ease: "power1.out",
            scrollTrigger: {
              trigger: rowElement, // Trigger when the row comes into view
              start: "top 80%",
              end: "center center",
              scrub: 1,
            },
          }).scrollTrigger;
          if (tileTrigger) triggers.push(tileTrigger);
        }
      });
    }

    setupAnimations();
    window.addEventListener("resize", setupAnimations); // Re-setup on resize

    return () => {
      window.removeEventListener("resize", setupAnimations);
      triggers.forEach((trigger) => trigger.kill()); // Clean up on unmount
    };
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  return (
    <section className={styles.section}>

      <h3 className={styles.tileHeading}>Why We Stand Out</h3>
      <p className={styles.tileText}>
        At Bary, we prioritize patient well-being and offer personalized
        care plans to meet individual needs. Our team of skilled
        professionals ensures your comfort and safety at all times,
        providing reliable and compassionate support.
      </p>

      <div className={styles.row}>
        <span className={styles.coin}>
          <Image
            src="/assets/icons/medical-46.svg"
            alt="Medical Icon"
            width={120} height={120}
            className={styles.coinIcon}
          />
        </span>
        <div className={styles.tile}>
          <h3 className={styles.tileHeading}>Compassionate Care</h3>
          <p className={styles.tileText}>
            Our dedicated caregivers provide compassionate support and
            assistance, ensuring you receive the care and attention you deserve.
            We focus on building strong relationships with our clients to
            promote trust and well-being.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.tile}>
          <h3 className={styles.tileHeading}>Expert Professionals</h3>
          <p className={styles.tileText}>
            Our team consists of highly skilled and experienced professionals dedicated to providing top-notch healthcare services.
          </p>
        </div>
        <span className={styles.coin}>
          <Image
            src="/assets/icons/medical-45.svg"
            alt="Medical Icon"
            width={120} height={120}
            className={styles.coinIcon}
          />
        </span>
      </div>
      <div className={styles.row}>
        <span className={styles.coin}>
          <Image
            src="/assets/icons/medical-43.svg"
            alt="Medical Icon"
            width={120} height={120}
            className={styles.coinIcon}
          />
        </span>
        <div className={styles.tile}>
          <h3 className={styles.tileHeading}>24/7 Support</h3>
          <p className={styles.tileText}>
            We offer round-the-clock support to ensure you have access to care whenever you need it, providing peace of mind for you and your family.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.tile}>
          <h3 className={styles.tileHeading}>Personalized Plans</h3>
          <p className={styles.tileText}>
            We create personalized care plans tailored to meet the unique needs and preferences of each individual, ensuring the best possible outcomes.
          </p>
        </div>
        <span className={styles.coin}>
          <Image
            src="/assets/icons/medical-42.svg"
            alt="Medical Icon"
            width={120} height={120}
            className={styles.coinIcon}
          />
        </span>
      </div>
      <div className={styles.row}>
        <span className={styles.coin}>
          <Image
            src="/assets/icons/medical-41.svg"
            alt="Medical Icon"
            width={120} height={120}
            className={styles.coinIcon}
          />
        </span>
        <div className={styles.tile}>
          <h3 className={styles.tileHeading}>Holistic Approach</h3>
          <p className={styles.tileText}>
            Our approach to healthcare is holistic, addressing not just the physical but also the emotional and mental well-being of our patients.
          </p>
        </div>
      </div>
    </section>
  );
}
