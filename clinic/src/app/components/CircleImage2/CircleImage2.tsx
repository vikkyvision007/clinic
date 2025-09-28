"use client";

import styles from "./CircleImage2.module.css";
import { useRef, useEffect, useState } from "react";

interface CircleImage2Props {
  imageUrl: string;
}

export default function CircleImage2({ imageUrl }: CircleImage2Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${styles["circle-wrapper"]} ${visible ? styles["circleWrapperVisible"] : ""}`}
      ref={ref}
    >
      <div className={styles["outer-circle"]}></div>
      <div className={styles["inner-circle"]}></div>
      <div
        className={styles["circle-image"]}
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
    </div>
  );
}
