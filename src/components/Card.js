import React from "react";
import styles from "./Card.module.css";
import img from "../images/image-qr-code.png";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={img} alt="" className={styles.img} />

        <div className={styles.description}>
          <h1 className={styles.heading}>
            Improve your front-end skills by building projects
          </h1>
          <p className={styles.blurb}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
