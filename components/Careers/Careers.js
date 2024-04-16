import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Careers.module.css";
import { careersCollection } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

function Careers() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    reasonForWorking: "",
    pastProjectLinks: "",
    applicationInProgress: false,
    formValidated: false,
    coverLetterAttach: {},
    uploadCVAttach: {},
    input: "file-upload",
    infoArea: "file-upload-filename",
    selectedFile: null,
  });

  const [formError, setFormError] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    reasonForWorking: "",
    cv: "",
    coverLetter: ""
  });

  const [invalidEmail, setInvalidEmail] = useState("")

  const func = () => {
    if (
      formData.fullName != "" &&
      formData.email != "" &&
      formData.phone != "" &&
      formData.role != "" &&
      formData.reasonForWorking != ""
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
  const onChange = () => {
    setFormData((prev) => {
      return {
        ...prev,
        coverLetterAttach:
          document.getElementById("coverLetterButton").files[0],
      };
    });
  };
  const onClick = () => {
    setFormData((prev) => {
      return {
        ...prev,
        uploadCVAttach: document.getElementById("CVButton").files[0],
      };
    });
  };
  const uploadCoverLetter = () => {
    document.getElementById("coverLetterButton").click();
  };
  const uploadCV = () => {
    document.getElementById("CVButton").click();
  };
  const sendDetails = () => {
    let coverLetterURL, cvURL, cover_letter, cv_upload;

    const requiredFields = ['fullName', 'email', 'phone', 'role', 'reasonForWorking'];

    setFormError({
      fullName: "",
      email: "",
      phone: "",
      role: "",
      reasonForWorking: "",
      cv: "",
      coverLetter: ""
    });

    setInvalidEmail("")

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        setFormError((prev) => {
          return {
            ...prev,
            [field]: `${field == 'fullName' ? "full name" : field == 'reasonForWorking' ? "reason for working" : field} is required`
          }
        })
      }
    });

    if (document.getElementById("CVButton").files[0] == null) {
      setFormError((prev) => {
        return {
          ...prev,
          cv: 'CV is required'
        }
      })
    };

    const isValidCv = fileValidation(formData?.uploadCVAttach?.name)

    if (!isValidCv && document.getElementById("CVButton").files[0] != null) {
      setFormError((prev) => {
        return {
          ...prev,
          cv: 'CV must be in pdf or doc format'
        }
      })
    };

    if (document.getElementById("coverLetterButton").files[0] == null) {
      setFormError((prev) => {
        return {
          ...prev,
          coverLetter: 'cover letter is required'
        }
      })
    };

    const isValidCoverLetter = fileValidation(formData?.coverLetterAttach?.name);

    if (!isValidCoverLetter && document.getElementById("coverLetterButton").files[0] != null) {
      setFormError((prev) => {
        return {
          ...prev,
          coverLetter: 'cover letter must be in pdf or doc format'
        }
      })
    };

    if (formData.email) {
      ValidateEmail(formData.email)
    };

    if (formData.formValidated &&
      fileValidation(formData?.coverLetterAttach?.name) &&
      fileValidation(formData?.uploadCVAttach?.name) &&
      ValidateEmail(formData.email)) {
      let data = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        reasonForWorking: formData.reasonForWorking,
        pastProjectLinks: formData.pastProjectLinks,
        status: "unread",
      };

      let email = formData.email;

      formData.applicationInProgress = true;
      const coverLetter = document.getElementById("coverLetterButton").files[0];

      const firebaseStorage = getStorage();
      const coverLetters = ref(
        firebaseStorage,
        `coverLetters/${coverLetter.name}`
      );

      cover_letter = uploadBytesResumable(coverLetters, coverLetter);
      cover_letter.on(
        "state_changed",
        function (snapshot) {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        function (error) {
          console.log("Error while uploading CoverLetter", error);
        },
        function () {
          getDownloadURL(cover_letter.snapshot.ref).then(function (
            downloadURL
          ) {
            coverLetterURL = downloadURL;
            const cvFile = document.getElementById("CVButton").files[0];
            const cv = ref(firebaseStorage, `CVs/${cvFile.name}`);
            cv_upload = uploadBytesResumable(cv, cvFile);
            cv_upload.on(
              "state_changed",
              function (snapshot) {
                var progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              },
              function (error) {
                console.log("Error while uploading CV", error);
              },
              function () {
                getDownloadURL(cv_upload.snapshot.ref).then(function (
                  downloadURL
                ) {
                  cvURL = downloadURL;
                  setDoc(doc(careersCollection, email), {
                    ...data,
                    coverLetterURL,
                    cvURL,
                  })
                    .then(function (docRef) {
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        role: "",
                        reasonForWorking: "",
                        pastProjectLinks: "",
                        applicationInProgress: false,
                        formValidated: false,
                        coverLetterAttach: {},
                        uploadCVAttach: {},
                        input: "file-upload",
                        infoArea: "file-upload-filename",
                        selectedFile: null,
                      });
                      setInvalidEmail("");
                      setFormError({
                        fullName: "",
                        email: "",
                        phone: "",
                        role: "",
                        reasonForWorking: "",
                        cv: "",
                        coverLetter: ""
                      });
                    })
                    .catch(function (error) {
                      console.error("Error while adding document: ", error);
                      setFormData(prev => {
                        return {
                          ...prev,
                          applicationInProgress: false
                        }
                      })
                    });
                });
              }
            );
          });
        }
      );
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

  const fileValidation = (file) => {
    // Allowing file type
    var allowedExtensions =
      /(\.doc|\.docx|\.pdf)$/i;

    if (!allowedExtensions.exec(file)) {
      return false;
    }
    else {
      return true
    }
  }

  return (
    <>
      <div>
        <Sidebar />
        <section>
          <div className={styles.careerSection}>
            <h1
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              Careers.
            </h1>
            <p
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              We are big on collaboration, pushing, and knowledge sharing.
              <br />
              We’re always expanding our enthusiastic, hard-working group of
              creators, believers, and achievers.
              <strong> Let’s do great work together.</strong>
            </p>
          </div>
        </section>

        <section className={styles.aboutUsSection}>
          <div
            className={`${styles.topContainer} animated fadeInDown slow`}
          ></div>
          <div
            className={`${styles.bottomContainer} animated fadeInUp slow`}
          ></div>
          <div className={styles.brandsBox}>
            <div className={styles.brandsHeading}>
              <div className={styles.svgLine}>
                <svg width="50px" height="30px" viewBox="0 0 10 10">
                  <line className={styles.point} x1="0" x2="10" y1="5" y2="5" />
                </svg>
                <span>ABOUT INAPP SOLUTIONS</span>
              </div>
              <h2
                className="text-center"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <span>Our</span>
                <strong> philosophy.</strong>
              </h2>
            </div>
            <div className={styles.headings}>
              <div
                className={styles.headingsItems}
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div>
                  <h3>.01</h3>
                </div>
                <div className={styles.paragraph}>
                  <p>
                    <strong>Creativity</strong> with
                    <strong> simplicity</strong>
                  </p>
                  <p>
                    InApp Solutions. enjoys the culture of simple functionality
                    and user interaction, which we best describe as the minimal
                    style
                    <strong> “less is more”</strong>
                  </p>
                </div>
              </div>
              <div
                className={styles.headingsItems}
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div>
                  <h3>.02</h3>
                </div>
                <div className={styles.paragraph}>
                  <p>
                    <strong>Work</strong> hard, play
                    <strong> hard</strong>
                  </p>
                  <p>
                    we push a balance approach to work and life, even when the
                    pressure high we can workout anyone. But happiness is always
                    our goal.
                  </p>
                </div>
              </div>
              <div
                className={styles.headingsItems}
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div>
                  <h3>.03</h3>
                </div>
                <div className={styles.paragraph}>
                  <p>
                    <strong>Partnership</strong> within and out
                  </p>
                  <p>
                    Yes, it’s work, and we get things done. Our steady growth
                    comes from building a long lasting relationship which is
                    built on trust and respect. This has helped us push through
                    year after year.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form
            onChange={func}
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className={styles.formContainer}>
              <div className={styles.svgLineCv}>
                <span>SEND YOUR CV</span>
                <svg width="60px" height="30px" viewBox="0 0 10 10">
                  <line className={styles.point} x1="0" x2="15" y1="5" y2="5" />
                </svg>
              </div>
              <h2>
                Make the
                <strong> Move.</strong>
              </h2>
              <p className="form-paragraph">
                Can’t find an open position that matches your talents? Doesn’t
                matter. There’s always an opportunity at InApp Solutions. for
                the right person to push you through your career path.
              </p>
              <div className={styles.inputFlexBox}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    className={styles.formInputs}
                    value={formData.fullName}
                    type="text"
                    name="name"
                    id="name"
                    maxLength={30}
                    disabled={formData.applicationInProgress}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                  {
                    formError.fullName && <div className={styles.errorMessage}>{formError.fullName}</div>
                  }
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    className={styles.formInputs}
                    type="email"
                    value={formData.email}
                    name="email"
                    id="email"
                    maxLength={30}
                    disabled={formData.applicationInProgress}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  {
                    (formError.email || invalidEmail) && <div className={styles.errorMessage}>{(formError.email && formError.email) || (invalidEmail && invalidEmail)}</div>
                  }
                </div>
              </div>
              <div className={styles.inputFlexBox}>
                <div className={styles.formGroup}>
                  <label htmlFor="number">Phone Number *</label>
                  <input
                    className={styles.formInputs}
                    value={formData.phone}
                    type="number"
                    name="number"
                    id="number"
                    disabled={formData.applicationInProgress}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  {
                    formError.phone && <div className={styles.errorMessage}>{formError.phone}</div>
                  }
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="role">Role*</label>
                  <input
                    className={styles.formInputs}
                    value={formData.role}
                    type="text"
                    name="role"
                    id="role"
                    maxLength={20}
                    disabled={formData.applicationInProgress}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                  />
                  {
                    formError.role && <div className={styles.errorMessage}>{formError.role}</div>
                  }
                </div>
              </div>
              <label htmlFor="reasonToJoin" style={{ marginTop: 17, display: "inline-block" }}>
                Why Do You Want To Work Here?
              </label>
              <div className={styles.formGroup}>
                <input
                  className={styles.formInputs}
                  value={formData.reasonForWorking}
                  type="text"
                  id="reasonToJoin"
                  maxLength={200}
                  disabled={formData.applicationInProgress}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      reasonForWorking: e.target.value,
                    })
                  }
                />
                {
                  formError.reasonForWorking && <div className={styles.errorMessage}>{formError.reasonForWorking}</div>
                }
              </div>
              <label htmlFor="projectsLinks" style={{ marginTop: 17, display: "inline-block" }}>
                Add links to your past project(s)
              </label>
              <div className={styles.formGroup}>
                <input
                  className={styles.formInputs}
                  value={formData.pastProjectLinks}
                  type="text"
                  id="projectsLinks"
                  maxLength={200}
                  disabled={formData.applicationInProgress}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pastProjectLinks: e.target.value,
                    })
                  }
                />
              </div>
              <div className={styles.sendButtonBox}>
                <div className={styles.attachment}>
                  <div>
                    <div className={styles.fileName}>
                      <h5 className={styles.text}>
                        {formData?.coverLetterAttach?.name?.length > 20 ? formData?.coverLetterAttach?.name?.substring(0, 9) + "... " + formData?.coverLetterAttach?.name?.slice(-10) : formData?.coverLetterAttach?.name}
                      </h5>
                    </div>

                    <input
                      className={styles.fileField}
                      type="file"
                      id="coverLetterButton"
                      disabled={formData.applicationInProgress}
                      onChange={onChange}
                      onClick={uploadCoverLetter}
                    />
                    <label style={{ opacity: '1' }} htmlFor="coverLetterButton" accept=".pdf, .doc, .docx">
                      Attach Cover Letter
                    </label>
                    {
                      formError.coverLetter && <div className={styles.errorMessage}>{formError.coverLetter}</div>
                    }
                  </div>
                  <div>
                    <div className={styles.fileName}>
                      <h5 className={styles.text}>
                        {formData?.uploadCVAttach?.name?.length > 20 ? formData?.uploadCVAttach?.name?.substring(0, 9) + "... " + formData?.uploadCVAttach?.name?.slice(-10) : formData?.uploadCVAttach?.name}
                      </h5>
                    </div>
                    <input
                      className={styles.fileField}
                      type="file"
                      id="CVButton"
                      disabled={formData.applicationInProgress}
                      onChange={onClick}
                      onClick={uploadCV}
                    />
                    <label style={{ opacity: '1' }} htmlFor="CVButton">Attach CV/Portfolio</label>
                    {
                      formError.cv && <div className={styles.errorMessage}>{formError.cv}</div>
                    }
                  </div>
                  <div className={styles.buttonsContainer}>
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
              </div>

              <h2>
                We are
                <strong> waiting</strong> for
                <strong> you</strong>
              </h2>
            </div>
          </form>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Careers;
