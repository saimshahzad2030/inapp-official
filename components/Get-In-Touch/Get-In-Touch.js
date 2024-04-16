import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import styles from "./Get-In-Touch.module.css";
import Link from "next/link";
import { doc, setDoc } from "firebase/firestore";
import { getInTouchCollection } from "../../firebase";
import Line from "../Line/Line";

function GetInTouch() {
  const [isLoading, setLoading] = useState(false);
  const [countryName, setCountryName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(1);
  const [showDropDown, setShowDropDown] = useState(false);
  const projectRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    description: "",
    formValidated: false,
    isTrue: true,
    applicationInProgress: false,
    status: "unread",

  });

  const [formError, setFormError] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    description: "",
  });

  const [invalidEmail, setInvalidEmail] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (projectRef.current && !projectRef.current.contains(event.target)) {
        setShowDropDown(false)
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [projectRef]);


  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < 7) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(1);
      }
    }, 4150);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const func = () => {
    if (
      formData.fullName != "" &&
      formData.email != "" &&
      formData.phone != "" &&
      formData.company != "" &&
      formData.projectType != "" &&
      formData.description != "" &&
      ValidateEmail(formData.email)
    ) {
      setFormData(prev => {
        return {
          ...prev,
          formValidated: true
        }
      })
    } else {
      setFormData(prev => {
        return {
          ...prev,
          formValidated: false
        }
      })
    }
  };

  const ValidateEmail = (email) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!(email.match(mailformat))) {
      setInvalidEmail("invalid email")
      return false
    } else {
      return true
    }
  }

  const sendDetails = () => {
    let email = formData.email;

    const requiredFields = ['fullName', 'email', 'phone', 'company', 'projectType', 'description'];

    setFormError({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      description: "",
    })

    setInvalidEmail("")

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        setFormError((prev) => {
          return {
            ...prev,
            [field]: `${field == 'fullName' ? "full name" : field == 'projectType' ? "project type" : field} is required`
          }
        })
      }
    });

    if (formData.email) {
      ValidateEmail(formData.email)
    };

    if (formData.formValidated) {
      formData.applicationInProgress = true;
      setDoc(doc(getInTouchCollection, email), {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        projectType: formData.projectType,
        description: formData.description,
      })
        .then(function (docRef) {
          setFormData({
            ...formData,
            fullName: "",
            email: "",
            phone: "",
            company: "",
            projectType: "",
            description: "",
            applicationInProgress: false,
            formValidated: false,
          });
        })
        .catch(function (error) {
          console.error("Error while adding document: ", error);
        });
    }
  };
  const getDirection = () => {
    window.open("https://goo.gl/maps/Sk7m9H6rLCVoerhR8", "_blank");
  };
  const getProjectTypeValue = (value) => {
    formData.projectType = value;
    setShowDropDown(false);
  };
  const projectTypes = () => {
    if (formData.isTrue == false) {
      setShowDropDown(false);
      formData.isTrue = true;
    } else {
      setShowDropDown(true);
      formData.isTrue = false;
    }
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
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <div>
        <Sidebar />
        <section className={styles.formSection}>
          <div className={styles.leftSide}>
            <div>
              <div
                className={styles.svgLine}
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <Line title="GET IN TOUCH" />
              </div>
              <div
                className={`headings ${styles.typewriter}`}
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                {currentIndex == 1 && <h1 className={styles.hello}>Hello,</h1>}
                {currentIndex == 2 && <h1 className={styles.hello}>Hola,</h1>}
                {currentIndex == 3 && (
                  <h1 className={styles.hello}>Epẹlẹ o,</h1>
                )}
                {currentIndex == 4 && <h1 className={styles.hello}>Nnọọ,</h1>}
                {currentIndex == 5 && <h1 className={styles.hello}>Sannu,</h1>}
                {currentIndex == 6 && <h1 className={styles.hello}>Salve,</h1>}
                {currentIndex == 7 && (
                  <h1 className={styles.hello}>Bonjour,</h1>
                )}
              </div>
              <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className={styles.paragraphOne}
              >
                Let’s start a project together. <br />
                Say <strong>hello@inappsolutions.com</strong> or call
                {countryName === "Pakistan" ? (
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="tel:+923122999338"
                  >
                    <strong> +92 312 2999338</strong>
                  </a>
                ) : (
                  <a
                    style={{ textDecoration: "none", color: "#000" }}
                    href="tel:+18567407148"
                  >
                    <strong> +1 (856) 740-7148 </strong>
                  </a>
                )}
              </p>
              <p
                className={styles.paragraphTwo}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Every beautiful <strong>relationship</strong> starts with a{" "}
                <br />
                simple <strong>hello</strong>. So let’s chat. It might just be
                the start of something <strong>memorable</strong>.
              </p>
              <h2
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Come say hi in person.
              </h2>
              <div className={styles.address}>
                {countryName === "Pakistan" ? (
                  <p>
                    Office No. B2, 23-C,
                    <br />
                    Shahra-e-Faisal, Block-6,
                    <br />
                    P-E-C-H-S,
                    <br />
                    Karachi, Pakistan
                  </p>
                ) : countryName === "United Kingdom" ? (
                  <p>
                    Unit F, Winston Business Park, <br />
                    Churchill Way #63017, <br />
                    Sheffield, <br />
                    Zip code: S35 2PS
                  </p>
                ) : (
                  !isLoading && (
                    <p>
                      30 N GOULD ST STE 4000, <br />
                      SHERIDAN,
                      <br />
                      wyoming, <br />
                      82801, United States
                    </p>
                  )
                )}
              </div>
              {countryName === "Pakistan" && (
                <div
                  onClick={getDirection}
                  className={`${styles.svgLine} ${styles.getDirection}`}
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <span>GET DIRECTION</span>
                  <div className={styles.directionLine}></div>
                </div>
              )}
            </div>
          </div>
          <form onChange={func}>
            <div
              className={styles.formContainer}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div
                className={`${styles.topContainer} animated fadeInDown slow`}
              ></div>
              <div
                className={`${styles.bottomContainer} animated fadeInUp slow`}
              ></div>
              <div className={styles.formBox}>
                <h3>
                  Contact
                  <strong> InApp Solutions.</strong>
                </h3>
                <div className={styles.inputFlexBox}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name*</label>
                    <input
                      className={styles.formInputs}
                      placeholder="Your Name"
                      type="text"
                      value={formData.fullName}
                      name="name"
                      id="name"
                      maxLength={30}
                      disabled={formData.applicationInProgress}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                    <div className={styles.errorMessage}>{formError.fullName && formError.fullName}</div>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.emailField} htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      className={styles.formInputs}
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      name="email"
                      id="email"
                      maxLength={30}
                      disabled={formData.applicationInProgress}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    <div className={styles.errorMessage}>{formError.email && formError.email || invalidEmail && invalidEmail}</div>
                  </div>
                </div>
                <div className={styles.inputFlexBox}>
                  <div className={styles.formGroup}>
                    <label
                      style={{ margin: 0, display: "block" }}
                      htmlFor="number"
                    >
                      Phone *
                    </label>
                    <input
                      className={styles.formInputs}
                      type="number"
                      placeholder="Phone Number"
                      value={formData.phone}
                      name="number"
                      id="number"
                      disabled={formData.applicationInProgress}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                    <div className={styles.errorMessage}>{formError.phone && formError.phone}</div>
                  </div>
                  <div className={styles.formGroup}>
                    <label
                      style={{ margin: 0, display: "block" }}
                      htmlFor="company"
                    >
                      Company *
                    </label>
                    <input
                      className={styles.formInputs}
                      type="text"
                      value={formData.company}
                      name="company"
                      placeholder="Company"
                      id="company"
                      maxLength={30}
                      disabled={formData.applicationInProgress}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                    <div className={styles.errorMessage}>{formError.company && formError.company}</div>
                  </div>
                </div>
                <div className={styles.inputFlexBox}>
                  <div
                    className={`${styles.formGroup} ${styles.projectTypesBox}`}
                    ref={projectRef}
                  >
                    <label
                      style={{ margin: 0, display: "block" }}
                      htmlFor="type"
                    >
                      Project Type * <i className={`fas fa-chevron-down ${showDropDown && styles.rotate}`}></i>
                    </label>
                    <input
                      onClick={projectTypes}
                      placeholder="Select the project type"
                      className={styles.formInputs}
                      type="text"
                      value={formData.projectType}
                      name="type"
                      disabled={formData.applicationInProgress}
                      onChange={() => { }}
                      id="type"
                    />
                    {showDropDown && (
                      <div className={`${styles.projectTypes} projectTypes`}>
                        <a
                          onClick={() =>
                            getProjectTypeValue("Web/App Development")
                          }
                        >
                          Web App Development
                        </a>
                        <a
                          onClick={() =>
                            getProjectTypeValue("Mobile App Development")
                          }
                        >
                          Mobile App Development
                        </a>
                        <a
                          onClick={() =>
                            getProjectTypeValue("Animated video creation")
                          }
                        >
                          Animated Video Creation
                        </a>
                        <a
                          onClick={() =>
                            getProjectTypeValue("SEO and Deployment")
                          }
                        >
                          SEO and Deployment
                        </a>
                      </div>
                    )}
                    <div className={styles.errorMessage}>{formError.projectType && formError.projectType}</div>
                  </div>
                </div>
                <label htmlFor="description" className={styles.terms}>
                  Description of your Project and Requirements *
                </label>

                <div className={styles.sendButtonBox}>
                  <div className={styles.mandatoryInput}>
                    <input
                      placeholder="*Mandatory field"
                      className={styles.formInputs}
                      type="text"
                      value={formData.description}
                      name="description"
                      id="description"
                      maxLength={300}
                      disabled={formData.applicationInProgress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                    />
                    <div className={styles.errorMessage}>{formError.description && formError.description}</div>
                  </div>
                </div>
                <div>
                  <div
                    className={styles.buttonsContainer}
                  >
                    {formData.formValidated && (
                      <span
                        onClick={() => {
                          if (!formData.applicationInProgress) {
                            sendDetails()
                          }
                        }}
                        className={styles.sendButtonActive}
                      >
                        SEND
                      </span>
                    )}
                    {!formData.formValidated && (
                      <span
                        onClick={() => {
                          if (!formData.applicationInProgress) {
                            sendDetails()
                          }
                        }}
                        className={styles.sendButtonInactive}
                      >
                        SEND
                      </span>
                    )}
                    {!formData.applicationInProgress && (
                      <div className={styles.line}></div>
                    )}
                    {formData.applicationInProgress && (
                      <div className={styles.loading}></div>
                    )}
                  </div>
                </div>
                <div className={styles.telBox}>
                  <div className="d-flex" style={{ alignItems: 'center' }}>
                    <i className="fas fa-mobile-alt"></i>
                    <p>Or just pick up the phone.</p>
                  </div>
                  <div>
                    {countryName === "Pakistan" ? (
                      <div>
                        <a
                          style={{ textDecoration: "none", color: "white" }}
                          href="tel:+923122999338"
                        >
                          <strong>+92 312 2999338</strong>
                        </a>
                      </div>
                    ) : (
                      <div>
                        <a
                          style={{ textDecoration: "none", color: "white" }}
                          href="tel:+18567407148"
                        >
                          <strong>+1 (856) 740-7148</strong>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>

        <section className={styles.paragraphSection}>
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className={styles.paragraphSvgLine}>
              <span>Looking for a job?</span>
              <svg width="60px" height="30px" viewBox="0 0 10 10">
                <line className={styles.point} x1="0" x2="20" y1="5" y2="5" />
              </svg>
            </div>
            <Link href="/careers">
              <span className={styles.paragraphThree}>
                <strong>Check out our careers section.</strong>
              </span>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default GetInTouch;
