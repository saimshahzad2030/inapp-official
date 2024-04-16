import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./What-We-Do.module.css";
import Link from "next/link";
import Footer from "../Footer/Footer";
import More from "../More/More";
import Services from "../Services/Services";
import Logos from "../Logos/Logos";
import GetInTouchSection from "../GetInTouchSection/GetInTouchSection";
import Technologies from "../Technologies/Technologies";

function WhatWeDo() {
  const [tabIndex, setTabIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  useEffect(() => {
    setInterval(() => {
      if (currentIndex < 3) {
        setCurrentIndex(currentIndex++);
      } else {
        setCurrentIndex(1);
      }
    }, 4100);
  }, []);

  return (
    <div>
      <div className={styles.topBarFixed}>
        <Sidebar />
      </div>
      <section className={styles.headerSection}>
        <div className={styles.mainContainer}>
          <Services title="WHAT WE DO" />
          <div className={styles.rightSide}>
            <div
              className={`${styles.backgroundContainer} animated fadeInLeft slow`}
            >
              <div
                className={`${styles.topBackground} animated fadeInDown delay-1s`}
              ></div>
              <div
                className={`${styles.bottomBackground} animated fadeInUp delay-1s`}
              ></div>
            </div>
            <div>
              <img
                className={`animated fadeInRight slow ${styles.banner}`}
                src="/assets/images/what-we-do-inappheader.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <More bottom="0%"/>
      </section>

      <section className={styles.uxUi}>
        <div className={styles.uxUiMainContainer}>
          <div className={styles.uxRightSide}>
            <div className={styles.webDesignImg}>
              <img src="/assets/images/Ui-designnn.webp" alt="UI/UX design" />
            </div>
          </div>
          <div className={styles.uxLeftSide}>
            <div className={styles.backgroundText}>01</div>
            <div>
              <div className={styles.headings}>
                <div>
                  <h2>UI/UX design</h2>
                </div>
              </div>
              <p>
                Today's audience is demanding. Our goal is to inform and inspire
                it with new products, collections, and brand awareness
                campaigns.
              </p>
              <p>
                That's why we employ premium design and cutting-edge tech to
                power our experience websites.
              </p>
              <p>
                Strategy, prototyping, and tracking in-page activity are
                critical to executing our successful campaigns.
              </p>
              <div className={styles.italicHeading}>
                <h5 className={styles.heading}>In Short</h5>
                <p>
                  Strategy - Prototyping - Interactions - Tracking -
                  Optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.uxUi}>
        <div className={styles.uxUiMainContainer}>
          <div className={styles.backgroundColor}></div>
          <div className={styles.deploymentLeftSide}>
            <div className={styles.backgroundTextTwo}>02</div>
            <div className={styles.mobileApplicationContainer}>
              <div className={styles.headings}>
                <div>
                  <h2>Mobile Application Development.</h2>
                </div>
              </div>
              <p>
                We are an end-to-end mobile app development company, focusing on
                <strong> designing </strong> and
                <strong> engineering </strong> mobile-first businesses.
              </p>
              <p>
                ur passionate bunch of mobile app developers creates innovative
                software solutions and awesome
                <strong> cross-platform apps</strong>, each one bespoke to you,
                your challenge, and your users.
              </p>
              <p>
                We start by interviewing your <strong>stakeholders</strong>, do
                research, analyze, and review your existing data. That will lead
                us to deeply understand what opportunities exist and what it
                takes to utilize them.
              </p>
              <div className={styles.italicHeading}>
                <h5 className={styles.heading}>In Short</h5>
                <p>IOS - Android - React native - Flutter - Ionc</p>
              </div>
            </div>
          </div>
          <div className={styles.deploymentRightSide}>
            <div className={styles.webDesignImgTwo}>
              <img
                src="/assets/images/mobile-final.webp"
                alt="Mobile Application Development.
"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.uxUi}>
        <div className={styles.uxUiMainContainer}>
          <div className={styles.uxRightSide}>
            <div className={styles.webDesignImg}>
              <img
                src="/assets/images/web-dev.webp"
                alt="Web Application Development."
              />
            </div>
          </div>
          <div className={styles.uxLeftSide}>
            <div className={styles.backgroundText}>03</div>
            <div>
              <div className={styles.headings}>
                <div>
                  <h2>Web Application Development.</h2>
                </div>
              </div>
              <p>
                Web application development is being employed widely in today's
                businesses across the globe. We create B2B and B2C compatible
                web applications to meet the business challenges.
              </p>
              <p>
                All the web applications we build are responsive. This means
                they look great and work perfectly on any screen of any size;
                desktop, table or smartphone.
              </p>
              <p>
                Our full-stack web application developers have taken the
                development services to a world className quality and
                experience. Their experience is our asset and our asset is our
                confidence to serve you.
              </p>
              <div className={styles.italicHeading}>
                <h5 className={styles.heading}>In Short</h5>
                <p>
                  Web Application - Responsive - Hybrid Apps - Optimization -
                  Performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.uxUi}>
        <div className={styles.uxUiMainContainer}>
          <div className={styles.backgroundColor}></div>
          <div className={styles.deploymentLeftSide}>
            <div className={styles.backgroundTextTwo}>04</div>
            <div className={styles.cloudServiceContainer}>
              <div className={styles.headings}>
                <div>
                  <h2>Cloud Services.</h2>
                </div>
              </div>
              <p>
                InApp Solutions possess expertise in all cloud deployment
                models, including public, private, and hybrid cloud to deliver
                the best mix of cost efficiency and control over your resources
                and data.
              </p>
              <p>
                Our cloud business solutions harness high-performance
                technologies like microservices, web APIs,
                Platform-as-a-Service, and serverless architecture to build your
                personalized path to the cloud.
              </p>
              <p>
                Gain the best mix of performance and running cost for your
                specific business objectives. InApp Solutions builds,
                re-platforms, integrates, deploys, and optimizes your cloud
                applications on AWS, Digital ocean, and Google Cloud using
                DevOps.
              </p>
            </div>
            <div className={styles.italicHeading}>
              <h5 className={styles.heading}>In Short</h5>
              <p>ec2 - Digital Ocean - Heroku</p>
            </div>
          </div>

          <div className={styles.deploymentRightSide}>
            <div className={styles.webDesignImgTwo}>
              <img
                src="/assets/images/cloud-service.webp"
                alt="Cloud Services"
              />
            </div>
          </div>
        </div>
      </section>

      <div style={{ marginTop: "-42px" }}>
        <Technologies />
      </div>

      <hr className={styles.horizontal}/>

      <section className={styles.paragraphsBrands}>
        <div className={styles.mainBox}>
          <Logos />
        </div>
      </section>

      <section>
        <GetInTouchSection />
      </section>
      <Footer />
    </div>
  );
}

export default WhatWeDo;
