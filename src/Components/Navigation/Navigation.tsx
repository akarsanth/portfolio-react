import { NavLink } from "react-router-dom";
import { BsEmojiSmile } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { PiGraduationCap } from "react-icons/pi";
// import { GiSkills } from "react-icons/gi";
// import { SiAboutdotme } from "react-icons/si";
// import { FaConnectdevelop } from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="nav" role="navigation" aria-label="Main">
      <NavLink to="/" aria-label="Navigate to Me">
        <BsEmojiSmile aria-hidden="true" />
        <span>Me</span>
      </NavLink>

      <NavLink to="/projects" aria-label="Navigate to Projects">
        <FaCode aria-hidden="true" />
        <span>Projects</span>
      </NavLink>

      <NavLink to="/about" aria-label="Navigate to About">
        <MdOutlinePerson aria-hidden="true" />
        <span>About</span>
      </NavLink>

      <NavLink to="/education" aria-label="Navigate to Education">
        <PiGraduationCap aria-hidden="true" />
        <span>Education</span>
      </NavLink>

      <NavLink to="/contact" aria-label="Navigate to Contact">
        <MdOutlineMessage aria-hidden="true" />
        <span>Contact</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
