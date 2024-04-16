import React, { useEffect, useState } from "react";
import styles from "./Services.module.css";

const Services = ({ title }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < 3) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(1);
      }
    }, 4100);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);
  return (
    <div className={styles.leftSide}>
      <div className={styles.leftSideItem}>
        <div
          className={styles.svgLine}
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <svg width="40px" height="30px" viewBox="0 0 10 10">
            <line className={styles.yellowPoint} x1="0" x2="10" y1="5" y2="5" />
          </svg>
          <span>{title}</span>
        </div>
        <div
          className="headings"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2>We're a</h2>
          <div className={styles.typewriter}>
            {currentIndex == 1 && <h3>UI/UX design</h3>}
            {currentIndex == 2 && <h3>App Development</h3>}
            {currentIndex == 3 && <h3>Web Development</h3>}
          </div>
          <h2>firm</h2>
        </div>
        <p
          className={styles.paragraphOne}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          We believe
          <strong> INTEGRITY</strong> is key to defining a brand, therefore,
          with a culture of
          <strong> EXCELLENCE</strong> developed over time, our ever
          <strong> EFFICIENT</strong> team work round the clock to give our
          clients
          <strong> QUALITY</strong> services
        </p>
        <p
          className={styles.paragraphTwo}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Using our
          <strong> creative expertise </strong>
          to build the next generation of magnetic brands
        </p>
      </div>
    </div>
  );
};

export default Services;
