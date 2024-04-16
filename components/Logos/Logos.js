import React from "react";
import styles from "./Logos.module.css";

const Logos = () => {
  return (
    <div
      className={styles.gridLogoss}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <a className={`${styles.gridLogosItemm} ${styles.link}`}>
        <img src="/assets/images/pushup-black.png" width="120" />
      </a>
      <a className={`${styles.gridLogosItemm} ${styles.link}`}>
        <img src="/assets/images/cooperswitch-black.png" width="150" />
      </a>
      <a className={`${styles.gridLogosItemm} ${styles.link}`}>
        <img src="/assets/images/audiograb-black.png" />
      </a>
      <a className={`${styles.gridLogosItemm} ${styles.link}`}>
        <img src="/assets/images/handoff.svg" />
      </a>
      <a className={`${styles.gridLogosItemm} ${styles.link}`}>
        <img src="/assets/images/diagame-black.png" />
      </a>
      <a className={`${styles.gridLogosItemm} ${styles.link}`}>
        <img src="/assets/images/sasco-black.png" />
      </a>
      <a className={`${styles.gridLogosItemm} ${styles.link}`}>
        <img src="/assets/images/zombie.svg" />
      </a>
      <a className={`${styles.gridLogosItemm} ${styles.link}`}>
        <img src="/assets/images/sortwaste-black.png" />
      </a>
      <a className={`${styles.gridLogosItemm} ${styles.link}`}>
        <img src="/assets/images/dicover-blockchain-black.png" />
      </a>
      <a className={`${styles.gridLogosItemm} ${styles.link}`}>
        <img src="/assets/images/Entice.svg" width="80" />
      </a>
      <a className={`${styles.gridLogosItemm} ${styles.link}`}>
        <img src="/assets/images/jackwarmBlack.png" />
      </a>
      <a className={`${styles.gridLogosItemm} ${styles.link}`}></a>
    </div>
  );
};

export default Logos;
