import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import AnimatedSection from "../AnimatedSection";
import "./About.css";
import Photo from "../../assets/about.jpg";
import Resume from "../../assets/About/Aakarshan-Thapa-Resume.pdf";
import { Link } from "react-router-dom";

// About Section
const About = () => {
  return (
    <AnimatedSection css="tab__about">
      <div className="about-content">
        <h1 className="heading">About</h1>
        <hr className="separator" />

        <p className="about-text">
          Hey there! I'm Aakarshan Thapa, a passionate web dev wielding React,
          Next.js, and more. I love tackling challenges and building solutions.
          When I'm not coding, catch me cheering on my favorite football club!
          Let's chat tech or the beautiful game!
        </p>

        <div className="about-links">
          <a
            href={Resume}
            target="_blank"
            rel="noreferrer"
            aria-label="View Curriculum Vitae"
          >
            <FaArrowDown aria-hidden="true" /> curriculum vitae
          </a>

          <Link to="/contact" rel="noreferrer" aria-label="Navigate to Contact">
            <FaArrowRight aria-hidden="true" /> contact me
          </Link>
        </div>
      </div>

      <img src={Photo} alt="About photo" className="about-image" />
    </AnimatedSection>
  );
};

export default About;
