import "./SideBar.css";
// import projects from "../../../data/projects";
import Project from "../../../entities/Project";
import AnimatedSection from "../../AnimatedSection";

interface Props {
  onSelectProject: (_id: string) => void;
  selectedProject: string | undefined;
  projects: Project[] | undefined;
}

const SideBar = ({ onSelectProject, selectedProject, projects }: Props) => {
  return (
    <AnimatedSection css="sidebar" side="top">
      {projects?.map((project) => (
        <p
          key={Math.random()}
          className={project._id === selectedProject ? "active" : ""}
          onClick={() => onSelectProject(project._id)}
        >
          {project.title}
        </p>
      ))}
    </AnimatedSection>
  );
};

export default SideBar;
