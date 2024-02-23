import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import styles from "./Education.module.css";
import { MdArrowOutward } from "react-icons/md";

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
        {/* Education */}
        {active === "education" && (
          <div className={styles.education__list}>
            <a
              className={styles["education__list-item"]}
              href="https://www.lambtoncollege.ca/programs/international/fsds"
              target="_blank"
            >
              <p className={styles.time}>Jan 2024 &#8213; Present</p>

              <div>
                <p className={styles.institution}>
                  Lambton College Mississauga
                  <span>
                    <MdArrowOutward />
                  </span>
                </p>
                <p className={styles.title}>Full Stack Software Development</p>

                <p className={styles.description}>
                  Actively pursuing Full Stack Software Development with a focus
                  on front-end (HTML5, CSS3, React) and backend (Node.js, SQL,
                  MongoDB) technologies. Excited to apply this expertise in
                  creating user-centric web applications.
                </p>
              </div>
            </a>

            <a
              className={styles["education__list-item"]}
              href="https://www.londonmet.ac.uk/courses/undergraduate/computing---bsc-hons/"
              target="_blank"
            >
              <p className={styles.time}>2019 &#8213; 2022</p>

              <div>
                <p className={styles.institution}>
                  London Metropolitan University
                  <span>
                    <MdArrowOutward />
                  </span>
                </p>

                <p className={styles.title}>BSc(Hons) Computing</p>

                <p className={styles.description}>
                  Acquired essential skills in commercial applications and
                  sought-after programming abilities. Explored specialized
                  topics aligned with industry demands, enhancing my readiness
                  for diverse roles in the field.
                </p>
              </div>
            </a>
          </div>
        )}

        {/* Experience */}
        {active === "experience" && (
          <div className={styles.experience__list}>
            <a
              className={styles["experience__list-item"]}
              href="https://www.ekbana.com/"
              target="_blank"
            >
              <p className={styles.time}>Aug 2022 &#8213; Nov 2022</p>
              <div>
                <p className={styles.institution}>
                  E.K. Solutions Pvt. Ltd.
                  <span>
                    <MdArrowOutward />
                  </span>
                </p>
                <p className={styles.title}>
                  Frontend Web Developer Internship
                </p>

                <p className={styles.description}>
                  Acquired proficiency in React Frontend development, utilizing
                  tools/libraries like Formik, Redux, React Router, and Next JS.
                  Gained essential knowledge in Git/Github, QA, SDLC, API, and
                  Postman to enhance software development skills.
                </p>
              </div>
            </a>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
};

export default Education;
