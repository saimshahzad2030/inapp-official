import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Who-We-Are.module.css";
import Footer from "../Footer/Footer";
import More from "../More/More";
import Services from "../Services/Services";
import Logos from "../Logos/Logos";
import GetInTouchSection from "../GetInTouchSection/GetInTouchSection";
import Technologies from "../Technologies/Technologies";

function WhoWeAre() {
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
    <div>
      <div className={styles.topBarFixed}>
        <Sidebar />
      </div>
      <section className={styles.headerSection}>
        <div className={styles.mainContainer}>
          <Services title="WHO WE ARE" />
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
            <div
              className={`${styles.headingContainer} animated fadeInRight slow`}
            >
              <h1 className={styles.topHeading}>Solutions</h1>
              <h1 className={styles.centerHeading}>Inside</h1>
              <h1 className={styles.bottomHeading}>Technology</h1>
              <div>
                <img
                  src="/assets/images/logo.png"
                  alt="Solutions Inside technology"
                />
              </div>
            </div>
          </div>
        </div>
        <More bottom={'0%'} />
      </section>
      <section className={styles.paragraphSection}>
        <p
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          We pride ourself as the
          <strong> go-to resource</strong> for entrepreneurs and corporate
          entities seeking to extend its reach.
        </p>
      </section>

      <section className={styles.imageSection}>
        <div>
          <img src="/assets/images/image-bg.jpg" alt="image-bg" />
        </div>
        <div className={styles.imgWidth1023}>
          <div>
            <img src="/assets/images/image-bg2.jpg" alt="image-bg2" />
          </div>
          <div>
            <img src="/assets/images/image-bg3.jpg" alt="image-bg3" />
          </div>
        </div>
      </section>

      <Technologies />

      <section className={styles.paragraphsBrands}>
        <div
          className={styles.paragraphsHeadings}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2>Why brands choose to work with us</h2>
          <p>
            InApp Solutions is a brand consulting firm specialized in branding,
            UI/UX design and web/app development with a team of proficient,
            creative, and efficient millennials who are incessantly improving
            their skills in their field of expertise; this is so we can satisfy
            our clients and render the best of services available.
          </p>
          <h2>Brands we've worked with</h2>
          <p>
            Working closely with our clients, we tend to know have a better
            understanding their goals and how best to push their brand beyond
            what they can comprehend. Here are a few brands we have worked with.
          </p>
        </div>

        <div className={styles.mainBox}>
          <Logos />
        </div>
      </section>

      <section className={styles.middleSection}>
        <div className={styles.parent}>
          <div
            className={`${styles.childs} col-md-4`}
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <img src="/assets/images/branding.png" alt="Digital Workplace" />
            <h3>Digital Workplace</h3>
            <p>
              We aims to transform businesses into digitalization in order to
              align them with modern-technology. Our concept of workplace is
              beyond transformation of processes, but also the transformation of
              mindsets towards high-end technologies.
            </p>
            <ul>
              <li>Visual Identity</li>
              <li>Brand Assets</li>
              <li>Brand Guidelines</li>
              <li>Digital Design</li>
            </ul>
          </div>
          <div
            className={`${styles.childs} col-md-4`}
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="400"
          >
            <img
              src="/assets/images/platform.png"
              alt="Technology Development"
            />
            <h3>Technology Development</h3>
            <p>
              We believes in revolutionizing itself every day to meet the
              rapidly changing technology trends. We keep ourselves up to date
              so that we can provide our clients with state-of-the-art software
              solutions.
            </p>
            <ul>
              <li>Web/App Development</li>
              <li>Mobile/App Development</li>
              <li>UX/UI Development</li>
            </ul>
          </div>

          <div
            className={`${styles.childs} col-md-4`}
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="500"
          >
            <img src="/assets/images/campaign.png" alt="Product Strategy" />
            <h3>Product Strategy</h3>
            <p>
              We would love to engage with our clients as a solid partner not
              only to outline their product's end-to-end vision, but to enhance
              their technology, and business strategy as well.
            </p>
            <ul>
              <li>Marketing Strategy</li>
              <li>Social Media Marketing</li>
              <li>SEO/SEM</li>
              <li>Lead Generation</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <GetInTouchSection />
      </section>
      <Footer />
    </div>
  );
}

export default WhoWeAre;
