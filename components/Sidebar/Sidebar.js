import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  socialItemsSectionOne,
  socialItemsSectionTwo,
} from "../../constants/sidebar-constants";

function Sidebar() {
  const [isLoading, setLoading] = useState(false);
  const [countryName, setCountryName] = useState("");
  const { pathname } = useRouter();

  const openNav = () => {
    document.getElementById("mySidenav").style.marginLeft = "0%";
    document.querySelector(".one")?.classList.add("animated", "fadeInLeft");
    document.querySelector(".two")?.classList.add("animated", "fadeInLeft");
    document.querySelector(".three")?.classList.add("animated", "fadeInLeft");
    document.querySelector(".fourth")?.classList.add("animated", "fadeInLeft");
    document.querySelector(".fifth")?.classList.add("animated", "fadeInLeft");
    document.querySelector(".sixth")?.classList.add("animated", "fadeInLeft");
    document
      .querySelector(".rightSideNavItems")
      ?.classList.add("animated", "fadeInRight");
    document
      .querySelector(".mainBox")
      ?.classList.remove("animated", "fadeOut", "faster");
    document.getElementById("nav-icon4")?.classList.add("open");
  };
  const closeNav = () => {
    document.getElementById("nav-icon4")?.classList.remove("open");
    document.getElementById("mySidenav").style.display = "";
    document
      .querySelector(".mainBox")
      ?.classList.add("animated", "fadeOut", "faster");
    document.getElementById("mySidenav").style.marginLeft = "100%";
    document.querySelector(".one")?.classList.remove("animated", "fadeInLeft");
    document.querySelector(".two")?.classList.remove("animated", "fadeInLeft");
    document
      .querySelector(".three")
      ?.classList.remove("animated", "fadeInLeft");
    document
      .querySelector(".fourth")
      ?.classList.remove("animated", "fadeInLeft");
    document
      .querySelector(".fifth")
      ?.classList.remove("animated", "fadeInLeft");
      document
      .querySelector(".sixth")
      ?.classList.remove("animated", "fadeInLeft");
    document
      .querySelector(".rightSideNavItems")
      ?.classList.remove("animated", "fadeInRight");
  };

  useEffect(() => {
    let activeTab;
    if (pathname == "/who-we-are") {
      let activeTab = document.querySelector(".one")?.children[0];
      activeTab.style.fontWeight = "bold";
    } else if (pathname == "/what-we-do") {
      let activeTab = document.querySelector(".two")?.children[0];
      activeTab.style.fontWeight = "bold";
    } else if (pathname == "/careers") {
      let activeTab = document.querySelector(".three")?.children[0];
      activeTab.style.fontWeight = "bold";
    } else if (pathname == "/get-in-touch") {
      let activeTab = document.querySelector(".fourth")?.children[0];
      activeTab.style.fontWeight = "bold";
    }
  }, [pathname]);

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
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <div className={styles.topBar}>
        <div
          id="mySidenav"
          className={`${styles.sidenav} animated slideInRight`}
        >
          <div>
            <Link href="/">
              <img
                src="/assets/images/logo.png"
                className={styles.sidebarIcon}
                alt="logo"
              />
            </Link>
            <a
              style={{ cursor: "pointer" }}
              className={styles.closebtn}
              onClick={closeNav}
            >
              &times;
            </a>
          </div>
          <div className={`${styles.mainBox} mainBox`}>
            <div className={styles.mainBoxItems}>
              <div className={`${styles.nav}  ${styles.leftSideNavItems}`}>
                <div className={styles.list}>
                  <p className={`${styles.item} ${styles.one} one`}>
                    <Link className={styles.link} href="/who-we-are">
                      Who we are
                    </Link>
                  </p>
                  <p className={`${styles.item} ${styles.two} two`}>
                    <Link className={styles.link} href="/what-we-do">
                      What we do
                    </Link>
                  </p>
                  <p className={`${styles.item} ${styles.three} three`}>
                    <Link className={styles.link} href="/careers">
                      Careers
                    </Link>
                  </p>
                  <p className={`${styles.item} ${styles.fourth} fourth`}>
                    <Link className={styles.link} href="/get-in-touch">
                      Get in touch
                    </Link>
                  </p>

                  <p className={`${styles.item} ${styles.fifth} fifth`}>
                    <Link
                      className={styles.link}
                      href="https://inappsolutions.medium.com"
                    >
                      Our Stories
                    </Link>
                  </p>
                  <p className={`${styles.item} ${styles.sixth} sixth`}>
                    <Link
                      className={styles.link}
                      href="/our-portfolio"
                    >
                      Our Portfolio
                    </Link>
                  </p>
                  <div className={styles.width1023}>
                    <div
                      className={`${styles.socialBox} ${styles.fourth} fourth`}
                    >
                      {socialItemsSectionOne.map((item, index) => {
                        return (
                          <div
                            className="social-items"
                            onClick={item.link}
                            key={index}
                            style={{ cursor: "pointer" }}
                          >
                            <i>{item.icon}</i>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.mainBoxItems} ${styles.fullScreen}`}>
              <div
                className={`${styles.nav} ${styles.rightSideNavItems} rightSideNavItems`}
              >
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <h2>InApp Solutions</h2>
                  </li>
                  <li className={styles.item}>
                    <a>
                      <strong>Headquarters</strong>
                    </a>
                  </li>
                  <div className={styles.addressParent}>
                    {countryName === "Pakistan" ? (
                      <li className={`${styles.item} ${styles.addressChild}`}>
                        <a>
                          <p>
                            Office No. B2, 23-C,
                            <br />
                            Shahra-e-Faisal, Block-6,
                            <br />
                            P-E-C-H-S,
                            <br />
                            Karachi, Pakistan
                          </p>
                        </a>
                      </li>
                    ) : countryName === "United Kingdom" ? (
                      <li className={`${styles.item} ${styles.addressChild}`}>
                        <a>
                          <p>
                            Unit F, Winston Business Park, <br />
                            Churchill Way #63017, <br />
                            Sheffield, <br />
                            Zip code: S35 2PS
                          </p>
                        </a>
                      </li>
                    ) : (
                      !isLoading && (
                        <li className={`${styles.item} ${styles.addressChild}`}>
                          <a>
                            <p>
                              30 N GOULD ST STE 4000, <br />
                              SHERIDAN,
                              <br />
                              wyoming, <br />
                              82801, United States
                            </p>
                          </a>
                        </li>
                      )
                    )}
                  </div>
                  <li className={`${styles.item} ${styles.socialLinks}`}>
                    <div className={styles.socialBox}>
                      {socialItemsSectionTwo.map((item, index) => {
                        return (
                          <div
                            className="social-items"
                            onClick={item.link}
                            key={index}
                            style={{ cursor: "pointer" }}
                          >
                            <i>{item.icon}</i>
                          </div>
                        );
                      })}
                    </div>
                  </li>
                  {countryName === "Pakistan" ? (
                    <li className={styles.item}>
                      <a href="tel:+923122999338">
                        {" "}
                        <strong>T: </strong>+92 312 2999338{" "}
                      </a>
                    </li>
                  ) : (
                    <li className={styles.item}>
                      <a href="tel:+18567407148">
                        {" "}
                        <strong>T: </strong> +1 (856) 740-7148{" "}
                      </a>
                    </li>
                  )}
                  <li className={styles.item}>
                    <a>
                      <strong>M: </strong> hello@inappsolutions.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navbar}>
          <div className="image-icon">
            <Link href="/">
              <img
                src="/assets/images/inapp-logo.gif"
                className="animated fadeInLeft slow"
                alt="inapp-logo"
              />
            </Link>
          </div>
          <div className={styles.languageBar}>
            <div
              onClick={openNav}
              className={`${styles.openNavBox} animated fadeInRight slow`}
            >
              <div id="nav-icon4" className={styles.navIcon4}>
                {Array.from({ length: 3 }).map((_, index) => {
                  return <span key={index}></span>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
