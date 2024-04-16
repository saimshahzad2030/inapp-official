import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { socialLinks } from "../../constants/footer-constants";

function Footer() {
  const [isLoading, setLoading] = useState(false);
  const [countryName, setCountryName] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const cookies = () => {
    window.open(
      "https://www.cookiepolicygenerator.com/live.php?token=ieoCDY3Z2ct7GvAsBUQbq09j8OzI2d4U",
      "_blank"
    );
  };
  const privacy = () => {
    window.open(
      "https://www.privacypolicygenerator.info/live.php?token=dPnMknEjZVBUtdJlDfkxuIn90YaxMV8j",
      "_blank"
    );
  };

  const getLocation = async () => {
    try {
      setLoading(true);
      const ipResponse = await fetch(process.env.NEXT_PUBLIC_URL);
      const ipAddress = await ipResponse.json();
      const locationResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}${ipAddress.ip}${process.env.NEXT_PUBLIC_REST}`
      );
      const location = await locationResponse.json();
      setCountryName(location.country_name);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <section className={styles.footer}>
      <div onClick={scrollToTop} className={styles.footerTopBoxContainer}>
        <div className={styles.footerTopBox}>
          <div className={styles.footerTopBarItems}>
            <div>
              <h5>Top</h5>
            </div>
            <div className={styles.footerLoading}></div>
          </div>
        </div>
      </div>
      <div className={styles.sideDiv}></div>
      <div className={styles.addressBox}>
        <div className={styles.addressBoxItems}>
          <img src="/assets/images/logo-inapp.png" alt="logo-inapp" />
        </div>
        <div className={styles.addressBoxItems}>
          <h5>Headquarters</h5>
          <div className={styles.footerRow}>
            {countryName === "Pakistan" ? (
              <div>
                <p>
                  Office No. B2, 23-C,
                  <br />
                  Shahra-e-Faisal, Block-6,
                  <br />
                  P-E-C-H-S,
                  <br />
                  Karachi, Pakistan
                </p>
              </div>
            ) : countryName === "United Kingdom" ? (
              <div>
                <p>
                  Unit F, Winston Business Park, <br />
                  Churchill Way, <br />
                  Sheffield, S35 2PS, <br />
                  United Kingdom
                </p>
              </div>
            ) : (
              !isLoading && (
                <div>
                  <p>
                    30 N GOULD ST STE 4000, <br />
                    SHERIDAN,
                    <br />
                    wyoming, <br />
                    82801, United States
                  </p>
                </div>
              )
            )}
          </div>
        </div>
        <div className={`${styles.addressBoxItems} ${styles.locationBox}`}>
          <div>
            <div className={styles.loc}>
              <div>
                <h2>Ready to start a project?</h2>
              </div>
            </div>
            <div className={styles.loc}>
              <div>
                <p style={{ margin: 0 }}>
                  Let's build something awesome together!
                </p>
                <p style={{ margin: 0 }}>
                  <a
                    className={`${styles.getintouch} ${styles.link}`}
                    href="mailto:info@inappsolutions.com"
                  >
                    <span>hello@inappsolutions.com </span>
                  </a>
                  or call
                  {countryName === "Pakistan" ? (
                    <a href="tel:+923122999338" className="getintouch">
                      <span>+92 312 2999338</span>
                    </a>
                  ) : (
                    <a href="tel:+18567407148" className="getintouch">
                      <span>+1 (856) 740-7148</span>
                    </a>
                  )}
                </p>
              </div>
            </div>
            <div className={styles.loc}>
              <div style={{ marginTop: "20px", marginRight: "30px", cursor: "pointer" }}>
                <Link href="/get-in-touch">
                  <h6>Get in touch</h6>
                </Link>
              </div>
              <div style={{ cursor: "pointer" }}>
                <Link href="/get-in-touch">
                  <img src="/assets/images/arrow.png" alt="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialContainer}>
        {socialLinks.map((item, index) => {
          return (
            <div className={styles.socialItems} onClick={item.link} key={index}>
              <i>{item.icon}</i>
            </div>
          );
        })}
      </div>
      <div className={styles.footerBar}>
        <div>
          <span>©InApp Solutions {new Date().getFullYear()}.</span>
          <br />
          <span>All rights Reserved</span>
        </div>
        <div className={styles.footerItems}>
          <span onClick={cookies}>Cookies Policy</span>
          <span onClick={privacy}>Privacy Policy</span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
