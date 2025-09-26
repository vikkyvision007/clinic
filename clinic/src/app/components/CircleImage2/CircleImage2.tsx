import styles from "./CircleImage2.module.css";

interface CircleImage2Props {
  imageUrl: string;
}

export default function CircleImage2({ imageUrl }: CircleImage2Props) {
  return (
    <div className={styles["circle-wrapper"]}>
      <div className={styles["outer-circle"]}></div>
      <div className={styles["inner-circle"]}></div>
      <div
        className={styles["circle-image"]}
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
    </div>
  );
}
