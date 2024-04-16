import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Carousel from "react-bootstrap/Carousel";
import { FaChevronRight } from "react-icons/fa";
import More from "../More/More";
import Line from "../Line/Line";
import { carouselData, carouselData2 } from "../../constants/header-constants";

const Header = () => {
  const [nextSlide, setNextSlide] = useState(0);
  const [slideHeading1, setSlideHeading1] = useState("LATEST PROJECT");
  const [slideHeading2, setSlideHeading2] = useState("Jackwarm");

  const isMobile = () => {
    var check = false;
    // (function (a) {
    //     if (
    //         /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
    //             a
    //         ) ||
    //         /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    //             a.substr(0, 4)
    //         )
    //     )
    //         check = true;
    // })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };
  const next = () => {
    const elm = document.getElementById('loaderanimated');
    elm.classList.remove(styles.loading);
    void elm.offsetWidth;
    const typewriterElm = document.getElementById('typewriter');
    typewriterElm.classList.remove(styles.typewriter);
    void typewriterElm.offsetWidth;
    const slide = nextSlide+1;
    if (nextSlide < 6) {
      setNextSlide(slide);
    } else {
      setNextSlide(0);
    }
    elm.classList.add(styles.loading);
    typewriterElm.classList.add(styles.typewriter);
    if (slide == 1) {
      setSlideHeading1("LATEST PROJECT");
      setSlideHeading2("AudioGrab");
    } else if (slide == 2) {
      setSlideHeading1("LATEST PROJECT");
      setSlideHeading2("CooperSwitch");
    } else if (slide == 3) {
      setSlideHeading1("LATEST PROJECT");
      setSlideHeading2("Sasco Traders");
    } else if (slide == 4) {
      setSlideHeading1("LATEST PROJECT");
      setSlideHeading2("Dia Games");
    } else if (slide == 5) {
      setSlideHeading1("LATEST PROJECT");
      setSlideHeading2("Discover Blockchain");
    } else if (slide == 6) {
      setSlideHeading1("LATEST PROJECT");
      setSlideHeading2("Gram i segreguję");
    }
    else {
      setSlideHeading1("LATEST PROJECT"), setSlideHeading2("Jackwarm");
    }
    var tdElement = document.getElementsByClassName("loading")[0];
    if (tdElement) {
      var trElement = tdElement.parentNode;
      trElement.removeChild(tdElement);
      trElement.insertBefore(tdElement, trElement.children[1]);
    }
  };

  const handleCarouselChange = (slideNo) => {
    const elm = document.getElementById('loaderanimated');
    elm.classList.remove(styles.loading);
    void elm.offsetWidth;
    const typewriterElm = document.getElementById('typewriter');
    typewriterElm.classList.remove(styles.typewriter);
    void typewriterElm.offsetWidth;
    if (slideNo == 1) {
      setSlideHeading1("LATEST PROJECT");
      setSlideHeading2("AudioGrab");
    } else if (slideNo == 2) {
      setSlideHeading1("LATEST PROJECT");
      setSlideHeading2("CooperSwitch");
    } else if (slideNo == 3) {
      setSlideHeading1("LATEST PROJECT");
      setSlideHeading2("Sasco Traders");
    } else if (slideNo == 4) {
      setSlideHeading1("LATEST PROJECT");
      setSlideHeading2("Dia Games");
    } else if (slideNo == 5) {
      setSlideHeading1("LATEST PROJECT");
      setSlideHeading2("Discover Blockchain");
    } else if (slideNo == 6) {
      setSlideHeading1("LATEST PROJECT");
      setSlideHeading2("Gram i segreguję");
    } else {
      setSlideHeading1("LATEST PROJECT"), setSlideHeading2("Jackwarm");
    }
    if (slideNo < 7) {
      setNextSlide(slideNo);
    } else {
      setNextSlide(0);
    }
    elm.classList.add(styles.loading);
    typewriterElm.classList.add(styles.typewriter);
  };

  useEffect(() => {
    const elm = document.getElementById('loaderanimated')
    elm.classList.add(styles.loading)
    const typewriterElm = document.getElementById('typewriter')
    typewriterElm.classList.add(styles.typewriter)
  }, [])


  return (
    <section className={styles.header}>
      <div className={styles.headerLeftSide}>
        <div className={styles.inApp}>
          <div style={{ marginLeft: '-1rem' }}>
            <Line title="WE ARE" />
          </div>
          <h1 className="animated fadeInDown">InApp Solutions</h1>
          <p className="animated fadeInUp">
            InApp Solutions is the one-stop solution for all your technology
            needs in this rapidly transforming digital world. We dive into the
            depth of technology to discover the most innovative, efficient, and
            robust digital solutions for you.
          </p>
        </div>
      </div>
      <div className={styles.headerRightSide}>
        <div className={`${styles.sliderCounts} animated fadeInRight delay-1s`}>
          <span className="infinite fadeOutUp">
            {nextSlide + 1}
          </span>
        </div>
        {isMobile() == false ? (
          <div
            className={`${styles.carousel} slide animated fadeInRight slow ${styles.imageWrapper} ${styles.overlayFadeIn}`}
          >
            <div className={styles.overlay}></div>
            <div className={styles.carouselText}>
              <div className={styles.svgLine}>
                <div className={styles.line}></div>
                <span>{slideHeading1}</span>
              </div>
              <h2>{slideHeading2}</h2>
            </div>
            <Carousel
              controls={false}
              indicators={false}
              interval={5000}
              activeIndex={nextSlide}
              id="carousel-fade"
              variant="dark"
              onSelect={handleCarouselChange}
              className={`${styles.imageWrapper} ${styles.overlayFadeIn}`}
            >
              {carouselData.map((item, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={item.imgSrc}
                      alt={`${index + 1} Slide`}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        ) : (
          <div
            className={`mobile-view ${styles.carousel} slide animated fadeInRight slow ${styles.imageWrapper} ${styles.overlayFadeIn}`}
          >
            <div className="overlay"></div>
            <div className={styles.carouselText}>
              <div className={styles.svgLine}>
                <div className="line"></div>
                <span>{slideHeading1}</span>
              </div>
              <h2>{slideHeading2}</h2>
            </div>
            <Carousel
              controls={false}
              indicators={false}
              interval={5000}
              activeIndex={nextSlide}
              id="carousel-fade"
              variant="dark"
              className={`${styles.imageWrapper} ${styles.overlayFadeIn}`}
            >
              {carouselData2.map((item, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      // className="d-block w-100"
                      src={item.imgSrc}
                      alt={`${index + 1} Slide`}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        )}
        <div
          className={`${styles.headerNextPreview} animated fadeInRight ${styles.imageWrapperBottom} ${styles.overlayFadeInBottom}`}
        >
          <img
            src={
              nextSlide < 6
                ? carouselData[nextSlide + 1].thumbNail
                : carouselData[0].thumbNail
            }
            alt="carousel"
          />

          <button onClick={next} style={{ backgroundColor: "#1d78be" }}>
            <FaChevronRight />
          </button>
        </div>
        <div className={styles.headerRightSideBottom}>
          <div className={styles.headerRightSideBottomItems}>
            <div className="d-flex">
              <span>0{nextSlide + 1}</span>
              <div id='loaderanimated' className={styles.loader}></div>
              <span>07</span>
            </div>
            <div className={styles.nextButton} onClick={next}>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <More />
      <div className={styles.marqeeText}>
        <hr />
        <div className={`d-flex ${styles.marquee}`}>
          <h6 className="animated slideInLeft slow">
            Now proudly working with
          </h6>
          <div id='typewriter' className={`animated slideInRight slow`}>
            <h6>{slideHeading2.toUpperCase()}</h6>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
