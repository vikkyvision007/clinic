"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "John Doe",
    gender: "male",
    quote: "The care I received was exceptional. The team was professional and compassionate, making my recovery smooth and comfortable. I highly recommend their services.",
  },
  {
    name: "Jane Smith",
    gender: "female",
    quote: "A wonderful experience from start to finish. The doctors are knowledgeable and the staff is incredibly supportive. I felt heard and cared for throughout my treatment.",
  },
  {
    name: "Samuel Green",
    gender: "male",
    quote: "I was impressed by the personalized care plan they created for me. It made a huge difference in my health journey. Thank you for your dedication!",
  },
  {
    name: "Lisa Ray",
    gender: "female",
    quote: "The best healthcare service I have ever used. The convenience of home care combined with their expertise is unmatched. Truly a five-star service.",
  },
  {
    name: "Mike Brown",
    gender: "male",
    quote: "From the first consultation to the follow-up, every step was handled with utmost professionalism. The team is friendly and genuinely cares about their patients.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Testimonials</h2>
      <p className={styles.text}>Read what our patients have to say about us.</p>
      <div className={styles.carouselContainer}>
        <button onClick={handlePrev} className={`${styles.arrow} ${styles.arrowLeft}`}>
          &#8249;
        </button>
        <div className={styles.carousel}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardImageContainer}>
                  <Image
                    src={
                      testimonial.gender === "male" ? "/assets/avatar-young-man.svg" : "/assets/avatar-young-women.svg"
                    }
                    alt={testimonial.name}
                    width={80}
                    height={80}
                  />
                </div>
                <p className={styles.quote}>&quot;{testimonial.quote}&quot;</p>
                <p className={styles.name}>- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} className={`${styles.arrow} ${styles.arrowRight}`}>
          &#8250;
        </button>
      </div>
    </section>
  );
}
