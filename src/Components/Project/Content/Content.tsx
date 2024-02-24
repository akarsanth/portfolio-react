import Project from "../../../entities/Project";
import styles from "./Content.module.css";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  project: Project;
}

const Content = ({ project }: Props) => {
  const { title, description, github, url, techs } = project;

  return (
    <div className={styles.content}>
      <p className={styles.title}>
        {title}
        <div className={styles.links}>
          <a href={github} target="_blank">
            <FaGithub />
          </a>
          <a href={url} target="_blank">
            <MdArrowOutward />
          </a>
        </div>
      </p>

      <div className={styles.techs}>
        {techs.map((tech) => (
          <p className={`${styles.tech} ${styles[tech.short]}`}>{tech.name}</p>
        ))}
      </div>

      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Content;
