import Link from "next/link";
import React from "react";
import Line from "../Line/Line";
import styles from "./GetInTouchSection.module.css";

const GetInTouchSection = () => {
  return (
    <div className={styles.getInTouch}>
      <h2>Let’s push your company’s digital presence up beyond imagination.</h2>
      <Line title="Get in touch" href="/get-in-touch" after animate/>
    </div>
  );
};

export default GetInTouchSection;
