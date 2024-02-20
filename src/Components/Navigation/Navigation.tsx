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
    <nav className="nav">
      <NavLink to="/">
        <BsEmojiSmile />
        <span>Me</span>
      </NavLink>

      <NavLink to="/projects">
        <FaCode />
        <span>Projects</span>
      </NavLink>

      <NavLink to="/about">
        <MdOutlinePerson />
        {/* <GiSkills /> */}
        {/* <FaConnectdevelop /> */}
        {/* <SiAboutdotme /> */}
        <span>About</span>
      </NavLink>

      <NavLink to="/education">
        <PiGraduationCap />
        <span>Education</span>
      </NavLink>
      <NavLink to="/contact">
        <MdOutlineMessage />
        <span>Contact</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
