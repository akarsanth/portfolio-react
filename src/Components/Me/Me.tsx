import { Link } from "react-router-dom";
import styles from "./Me.module.css";
import AnimatedSection from "../AnimatedSection";

import { FaArrowRight } from "react-icons/fa6";
import Photo from "./../../assets/photo.png";
import { PiHandWavingLight } from "react-icons/pi";

const Me = () => {
  return (
    <AnimatedSection css={styles["tab__me"]}>
      <img src={Photo} alt="Aakarshan Thapa" className={styles["me__image"]} />
      <div className={styles["me__content"]}>
        <p>
          Hi, I'm Aakarshan.{" "}
          <PiHandWavingLight size="3rem" className={styles.handwave} />
        </p>
        <p>
          But you can call me <span>Thapa</span>.
        </p>

        <p className={styles["description"]}>
          I am a Web Developer based in Mississauga, Ontario.
        </p>

        <div className={styles["me__links"]}>
          <Link to="/projects">
            <FaArrowRight /> see my projects
          </Link>

          <Link to="/about">
            <FaArrowRight /> more about me
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Me;
