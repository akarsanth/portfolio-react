import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import styles from "./Education.module.css";

type ActiveState = "education" | "experience";

// Education Section
const Education = () => {
  const [active, setActive] = useState<ActiveState>("education");

  return (
    <AnimatedSection css={styles.tab__education}>
      <div className={styles.left}>
        <h1
          className={`heading ${styles["heading--dy"]} ${
            active === "education" ? styles.active : ""
          }`}
          onClick={() => setActive("education")}
        >
          Education
        </h1>
        {/* <hr className="separator" /> */}

        <h1
          className={`heading ${styles["heading--dy"]} ${
            active === "experience" ? styles.active : ""
          }`}
          onClick={() => setActive("experience")}
        >
          Experience
        </h1>
        {/* <hr className="separator" /> */}
      </div>

      <div className={styles.right}>
        {active === "education" && (
          <div className={styles.education__list}>
            <div className={styles["education__list-item"]}>
              <p className={styles.time}>Jan 2024 &#8213; Present</p>
              <div>
                <p className={styles.institution}>
                  Lambton College Mississauga
                </p>
                <p className={styles.course}>Full Stack Software Development</p>

                <p className={styles.description}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aperiam illum autem aspernatur odio delectus, similique
                  accusantium, natus hic ad a dignissimos, minus ipsum minima!
                </p>
              </div>
            </div>

            <div className={styles["education__list-item"]}>
              <p className={styles.time}>2019 &#8213; 2022</p>
              <div>
                <p className={styles.institution}>
                  London Metropolitan University
                </p>

                <p className={styles.course}>BSc(Hons) Computing</p>

                <p className={styles.description}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aperiam illum autem aspernatur odio delectus, similique
                  accusantium, natus hic ad a dignissimos, minus ipsum minima!
                </p>
              </div>
            </div>
          </div>
        )}
        {active === "experience" && <div className="experience__list"></div>}
      </div>
    </AnimatedSection>
  );
};

export default Education;
