import AnimatedSection from "../AnimatedSection";
import "./Project.css";
import { useEffect, useState } from "react";
import Content from "./Content/Content";
import SideBar from "./SideBar/SideBar";
import ProjectEntity from "../../entities/Project";
import projects from "../../data/projects";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const [project, setProject] = useState<ProjectEntity | undefined>(undefined);

  // selecting first project from the list
  useEffect(() => {
    setSelectedProject(projects[0]?.id);
  }, []);

  // finding the selected list
  useEffect(() => {
    setProject(projects.find((project) => project.id === selectedProject));
  }, [selectedProject]);

  return (
    <AnimatedSection css="tab__project" side="left">
      <SideBar
        selectedProject={selectedProject}
        onSelectProject={(id) => setSelectedProject(id)}
      />
      {project && <Content project={project} />}
    </AnimatedSection>
  );
};

export default Project;
