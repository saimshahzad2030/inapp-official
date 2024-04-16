import React, { useState } from "react";
import styles from "./Positions.module.css";
import { useRouter } from "next/router";
import { FaChevronRight } from "react-icons/fa";
import Technologies from "../Technologies/Technologies";
import Line from "../Line/Line";
import { careers } from "../../constants/positions-constants"

function Positions() {
  const router = useRouter();

  const careerRouter = () => {
    router.push("/careers");
  };

  return (
    <>
      <div>
        <div className={styles.containerHeading}>
          <Technologies />
        </div>
        <section className={styles.careerSection}>
          <div className={styles.careerContainer}>
            <div className={styles.careerLeftSide}>
              {
                careers.map((item, index) => {
                  return (
                    <div
                      onClick={careerRouter}
                      className={styles.careerLeftSideItems}
                      key={index}
                    >
                      <h3 data-aos="fade-up" data-aos-duration="1500">
                        {item.title}
                      </h3>
                      <div className={styles.arrowRight}>
                        <FaChevronRight />
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className={styles.careerRightSide}>
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <Line title="CAREERS" after />
                <h4>Attach with us.</h4>
                <p>There's always room for game-changers at InApp arena</p>
                <Line animate title="See open positions" href="/careers" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Positions;
