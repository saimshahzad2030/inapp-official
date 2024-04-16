import React from "react";
import styles from "./Technologies.module.css";

const TechnologiesLogoItem = ({ icon, title }) => {
  return (
    <a className={`${styles.gridLogosItem} ${styles.link}`}>
      {icon}
      <h5 className={styles.heading}>{title}</h5>
    </a>
  );
};

export default TechnologiesLogoItem;
