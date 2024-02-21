import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import styles from "./Education.module.css";

type ActiveState = "education" | "experience";

// Education Section
const Education = () => {
  const [active, setActive] = useState<ActiveState>("experience");

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

      <div className={styles.right}></div>
    </AnimatedSection>
  );
};

export default Education;
