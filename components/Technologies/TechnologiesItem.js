import React from "react";
import styles from "./Technologies.module.css";
import TechnologiesLogoItem from "./TechnologiesLogoItem";

const TechnologiesItem = ({ number, items }) => {
  return (
    <div id={`content-${number}}`}>
      <div
        className={styles.gridLogos}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {items.map(({ title, icon }, index) => {
          return <TechnologiesLogoItem key={index} title={title} icon={icon} />;
        })}
      </div>
    </div>
  );
};

export default TechnologiesItem;
