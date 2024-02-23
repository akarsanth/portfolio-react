import Tech from "./Tech";

export default interface Project {
  id: number;
  title: string;
  description: string;
  github: string;
  url: string;
  techs: Tech[];
}
