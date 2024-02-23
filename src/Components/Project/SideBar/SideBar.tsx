import "./SideBar.css";
import projects from "../../../data/projects";

interface Props {
  onSelectProject: (id: number) => void;
  selectedProject: number | null;
}

const SideBar = ({ onSelectProject, selectedProject }: Props) => {
  return (
    <aside className="sidebar">
      {projects.map((project) => (
        <p
          className={project.id === selectedProject ? "active" : ""}
          onClick={() => onSelectProject(project.id)}
        >
          {project.title}
        </p>
      ))}
    </aside>
  );
};

export default SideBar;
