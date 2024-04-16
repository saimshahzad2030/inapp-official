import Link from "next/link";
import React from "react";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.mainContainer}>
    <Sidebar />
    <section className={styles.errorPage}>
      <div className={styles.errorBox}>
        <div className={styles.topContainer} data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500"></div>
        <div className={styles.bottomContainer} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"></div>
        <h1 className={styles.errorHeading} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <del>&nbsp; &nbsp;&nbsp; ERROR &nbsp; &nbsp; &nbsp;</del>
        </h1>
        <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">404</h1>
        <Link href="/">
          <div className={`${styles.buttonsContainer} ${styles.svgLineHome}`} data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
              <div className={styles.line}></div>
                <span>TAKE ME HOME</span>
            </div>
        </Link>
      </div>
    </section>
    <div className={styles.footerWrapper}>
    <Footer />
    </div>
  </div>
  );
}

export default NotFound;
