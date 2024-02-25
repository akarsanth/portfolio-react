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
        {/* Linkedin */}
        <a
          href="https://www.linkedin.com/in/thapaakarsan"
          target="_blank"
          aria-label="LinkedIn Profile Link"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="link-icon" />
          <span className="pb-1">linkedin.com/in/thapaakarsan</span>
        </a>

        {/* Github */}
        <a
          href="https://github.com/akarsanth"
          target="_blank"
          aria-label="GitHub Profile Link: akarsanth"
          rel="noopener noreferrer"
        >
          <FaGithub className="link-icon" />
          <span>github.com/akarsanth</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/akarsanthapa"
          target="_blank"
          aria-label="Instagram Profile Link: akarsanthapa"
          rel="noopener noreferrer"
        >
          <FaInstagram className="link-icon" />
          <span className="pb-1">instagram.com/akarsanthapa</span>
        </a>

        {/* Twitter */}
        <a
          href="https://www.x.com/ThapaAkarsan"
          target="_blank"
          aria-label="Twitter Profile Link: ThapaAkarsan"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="link-icon" />
          <span>x.com/ThapaAkarsan</span>
        </a>

        {/* Mail */}
        <a
          href="mailto:akarsan.thapa@gmail.com"
          target="_blank"
          aria-label="Send an email to akarsan.thapa@gmail.com"
          rel="noopener noreferrer"
        >
          <FiMail className="link-icon" />
          <span className="pb-2">akarsan.thapa@gmail.com</span>
        </a>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
