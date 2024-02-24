import { useEffect, useState } from "react";
import AnimatedSection from "../AnimatedSection";
import "./Project.css";
import Content from "./Content/Content";
import SideBar from "./SideBar/SideBar";
import ProjectEntity from "../../entities/Project";
// import projects from "../../data/projects";
import { client } from "../../config/sanity";

const Project = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [projects, setProjects] = useState<ProjectEntity[] | undefined>();
  const [selectedProject, setSelectedProject] = useState<string | undefined>();

  // selecting first project from the list
  useEffect(() => {
    const query = `*[_type == 'project'] {
      _id,
      title,
      description,
      github,
      url,
      "techs": techs[]->
        { _id, name, short, color }
    }`;

    setLoading(true);
    const fetchProjects = async () => {
      const projects = await client.fetch(query);
      console.log(projects);

      setProjects(projects);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  // Selecting the project for first time
  useEffect(() => {
    if (projects && projects.length > 0) {
      setSelectedProject(projects[0]?._id);
    }
  }, [projects]);

  const project = projects?.find((project) => project._id === selectedProject);

  return (
    <AnimatedSection css="tab__project" side="left">
      {isLoading && <p>hello</p>}
      {!isLoading && (
        <>
          <SideBar
            selectedProject={selectedProject}
            onSelectProject={(_id) => setSelectedProject(_id)}
            projects={projects}
          />
          {project && <Content project={project} />}
        </>
      )}
    </AnimatedSection>
  );
};

export default Project;
