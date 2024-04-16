import React, { useEffect, useRef, useState } from "react";
import styles from "./VideoSection.module.css";
import Line from "../Line/Line";

function VideoSection() {
  const [videoActive, setVideoActive] = useState(false);
  const [scrollX, setScrollX] = useState("");
  const [scrollY, setScrollY] = useState("");

  const noScroll = () => {
    window.scrollTo(scrollX, scrollY);
  };

  const toggleVideo = () => {
    setVideoActive(!videoActive);
    setScrollX(window.scrollX);
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    if (videoActive) {
      window.addEventListener("scroll", noScroll())
      document.body.style.overflow = 'hidden'
    }
    else {
      window.removeEventListener("scroll", noScroll());
      document.body.style.overflow = 'auto'
    }
  }, [videoActive])


  return (
    <>
      <div>
        <section className={styles.videoSection}>
          <div className={styles.videoContainer}>
            <div
              className={styles.topBackground}
              data-aos-easing="ease"
              data-aos="fade-up-left"
              data-aos-duration="1000"
            ></div>
            <div
              className={styles.bottomBackground}
              data-aos-easing="ease"
              data-aos="fade-down-right"
              data-aos-duration="1000"
            ></div>
            <div className={styles.leftSide}>
              <div>
                <Line title="WHO WE ARE" />
                <p>
                  Great brands are created to tell a story that never stops
                  unfolding, our aim is not only to develop and designs, we want
                  to give our client's an experience, an impression, a promise,
                  an outstanding symbol that will always connect and remain
                  relevant
                </p>
                <Line title="Explore" after animate href="/who-we-are" />
              </div>
            </div>
            <div className={styles.rightSide}>
              <div onClick={toggleVideo} className={styles.rightSideItems}>
                <div className={styles.videoImage}>
                  <img src="/assets/images/inapp.png" alt="inapp" />
                </div>
              </div>
            </div>
            {
              videoActive == true && (
                <>
                  <div className={styles.videoContainerScroll}></div>
                  <video className={styles.videoStyles} autoPlay={"autoplay"}>
                    <source src="/assets/inapp-video.mp4" type="video/mp4" />
                  </video>
                  <div className={styles.cancelVideoButton} onClick={toggleVideo}>
                    x
                  </div>
                </>
              )
            }
          </div>
        </section>
      </div>
    </>
  );
}

export default VideoSection;
