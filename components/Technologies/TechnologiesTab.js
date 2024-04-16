import React from "react";
import styles from "./Technologies.module.css";

const TechnologiesTab = ({ number, checked, onChange, title }) => {
  return (
    <>
      <input
        className={styles.inputField}
        id={`tab-${number}`}
        type="radio"
        name="tabs"
        checked={checked}
        onChange={onChange}
      />
      <label className={styles.labelField} htmlFor={`tab-${number}`}>
        {title}
      </label>
    </>
  );
};

export default TechnologiesTab;
