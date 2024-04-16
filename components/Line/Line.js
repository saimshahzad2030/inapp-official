import Link from "next/link";
import React from "react";
import styles from "./Line.module.css";

function Line({ title, after, href, animate }) {
  return (
    <>
      {after ? (
        <div
          style={{ cursor: "pointer" }}
          className={`${styles.buttonsContainer} full-screen`}
        >
          <Link href={href ? href : ""}>
            <span>{title}</span>
          </Link>
          <div
            style={title == "Get in touch" ? { backgroundColor: "white" } : {}}
            className={animate ? styles.line : styles.after}
          ></div>
        </div>
      ) : animate ? (
        <div
          style={{ cursor: "pointer" }}
          className={`${styles.buttonsContainer} full-screen`}
        >
          <div className={styles.line}></div>
          <Link href={href ? href : ""}>
            <span>{title}</span>
          </Link>
        </div>
      ) : (
        <div className={styles.svgLine}>
          <svg width="80px" height="30px" viewBox="0 0 10 10">
            <line
              style={title === "BRANDS" ? { stroke: "white" } : {}}
              className={styles.yellowPoint}
              x1="0"
              x2="20"
              y1="5"
              y2="5"
            />
          </svg>
          <span
            style={
              title === "BRANDS"
                ? {
                    fontSize: "1.25rem",
                    fontWeight: 500,
                  }
                : {}
            }
          >
            {title}
          </span>
        </div>
      )}
    </>
  );
}

export default Line;
