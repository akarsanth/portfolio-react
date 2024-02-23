import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import AnimatedSection from "../AnimatedSection";
import "./Contact.css";

// Contact Section
const Contact = () => {
  return (
    <AnimatedSection css="tab__contact">
      <div className="links-wrapper">
        <a href="https://www.linkedin.com/in/thapaakarsan" target="_blank">
          <FaLinkedinIn className="link-icon" />
          <span className="pb-1">linkedin.com/in/thapaakarsan</span>
        </a>
        <a href="https://github.com/akarsanth" target="_blank">
          <FaGithub className="link-icon" />
          <span>github.com/akarsanth</span>
        </a>
        <a href="https://www.instagram.com/akarsanthapa" target="_blank">
          <FaInstagram className="link-icon" />
          <span className="pb-1">instagram.com/akarsanthapa</span>
        </a>
        <a href="https://www.x.com/ThapaAkarsan" target="_blank">
          <FaXTwitter className="link-icon" />
          <span>x.com/ThapaAkarsan</span>
        </a>
        <a href="mailto:akarsan.thapa@gmail.com" target="_blank">
          <FiMail className="link-icon" />
          <span className="pb-2">akarsan.thapa@gmail.com</span>
        </a>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
