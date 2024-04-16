import React from "react";
import styles from "./Middle-Section.module.css";
import Line from "../Line/Line";
import { middleSection } from "../../constants/home-constants";

function MiddleSection() {
  return (
    <section className={styles.middleSection}>
      <div className={styles.mainBox}>
        <div
          className={styles.leftSide}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="1500"
        >
          <Line title="WHAT WE DO" />
          <h2>Captivating and Interactive visuals.</h2>
          <p>
            InApp incorporation is a team of proficient, creative, and efficient
            millennials who are incessantly improving their skills in their
            field of expertise.
          </p>
          <Line title="Discover more" after href="/who-we-are" animate />
        </div>
        <div className={styles.rightSide}>
          <div className={`${styles.parent} ${styles.row}`}>
            {middleSection.map(({ title, description, img, alt }, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.childs} col-md-4`}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="300"
                >
                  <img src={img} alt={alt} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiddleSection;
