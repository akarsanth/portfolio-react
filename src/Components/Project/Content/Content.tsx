import Project from "../../../entities/Project";
import AnimatedSection from "../../AnimatedSection";
import styles from "./Content.module.css";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  project: Project;
}

const Content = ({ project }: Props) => {
  const { title, description, github, url, techs } = project;

  return (
    <AnimatedSection css={styles.content} side="top">
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
        {techs?.map((tech) => (
          <a
            href={tech.url}
            key={tech._id}
            style={{ backgroundColor: tech.color }}
            className={styles.tech}
            target="_blank"
          >
            {tech.name}
          </a>
        ))}
      </div>

      <p className={styles.description}>{description}</p>
    </AnimatedSection>
  );
};

export default Content;
