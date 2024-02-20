import { FaArrowDown } from "react-icons/fa6";
import "./About.css";
import Photo from "../../assets/about.jpg";
import Resume from "../../assets/About/Aakarshan-Thapa-Resume.pdf";

// About Section
const About = () => {
  return (
    <div className="tab__about">
      <div className="about-left">
        <h1 className="about-heading">ABOUT</h1>
        <hr className="separator" />

        <p className="about-text">
          Hey there! I'm Aakarshan Thapa, a passionate web dev wielding React,
          Next.js, and more. I love tackling challenges and building solutions.
          When I'm not coding, catch me cheering on my favorite football club!
          Let's chat tech or the beautiful game!
        </p>

        <a href={Resume} target="_blank" rel="noreferrer">
          <FaArrowDown /> curriculum vitae
        </a>
      </div>

      <img src={Photo} alt="About photo" className="about-image" />
    </div>
  );
};

export default About;
