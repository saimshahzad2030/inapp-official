import React from "react";
import styles from "./More.module.css";

const More = ({bottom}) => {
  const scrollFunc = () => {
    window.scrollBy({
      top: 800,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={scrollFunc}
      className={`${styles.moreContainer} animated fadeInLeft`}
      style={bottom ? {bottom:bottom} : {}}
    >
      <h5>MORE</h5>
      <span style={{ width: "100%" }}>
        <span className={styles.progress9}></span>
      </span>
    </div>
  );
};

export default More;
