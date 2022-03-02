import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import styles from "./Slider.module.scss";
import { sliderItems } from "../../constants";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
function Slider() {
  const [slideIndex, setSlicerIndex] = useState(0);
  const slideRef = useRef();
  const handleSlide = (direction) => {
    if (direction === "left") {
      setSlicerIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlicerIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  useEffect(() => {
    const valueTranslateX = slideIndex * -100;
    slideRef.current.style.transform = `translateX(${valueTranslateX}vw)`;
  }, [slideIndex]);
  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        <div
          onClick={() => handleSlide("left")}
          className={clsx(styles.arrowLeft, styles.arrow)}
        >
          <ArrowLeftIcon />
        </div>
        <div className={styles.wrapper} ref={slideRef}>
          {sliderItems.map((slide) => (
            <div
              key={slide.id}
              className={styles.slide}
              style={{ background: `#${slide.bg}` }}
            >
              <div className={styles.imageContainer}>
                <img src={require(`../../images/${slide.img}`)} />
              </div>
              <div className={styles.infoContainer}>
                <div className={styles.infoWrapper}>
                  <h1 className={styles.title}>{slide.title}</h1>
                  <div className={styles.desc}>{slide.desc}</div>
                  <div className={styles.btn}>
                    <button>SHOW NOW</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={() => handleSlide("right")}
          className={clsx(styles.arrowRight, styles.arrow)}
        >
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider;
