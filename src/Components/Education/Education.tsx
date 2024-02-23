import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import "./Education.css";
import LearningItem from "./LearningItem";
import learnings from "../../data/learnings";

type ActiveState = "education" | "experience";

// Education Section
const Education = () => {
  const [active, setActive] = useState<ActiveState>("education");

  return (
    <AnimatedSection css="tab__education">
      <div className="left">
        <h1
          className={`heading heading--dy ${
            active === "education" ? "active" : ""
          }`}
          onClick={() => setActive("education")}
        >
          Education
        </h1>

        <h1
          className={`heading heading--dy ${
            active === "experience" ? "active" : ""
          }`}
          onClick={() => setActive("experience")}
        >
          Experience
        </h1>
      </div>

      <div className="right">
        {/* Education */}
        {active === "education" && (
          <AnimatedSection css="learning__list" side="top">
            {learnings.education.map((data) => (
              <LearningItem key={data.title} data={data} /> // change key
            ))}
          </AnimatedSection>
        )}

        {/* Experience */}
        {active === "experience" && (
          <AnimatedSection css="learning__list" side="top">
            {learnings.experience.map((data) => (
              <LearningItem key={data.title} data={data} />
            ))}
          </AnimatedSection>
        )}
      </div>
    </AnimatedSection>
  );
};

export default Education;
