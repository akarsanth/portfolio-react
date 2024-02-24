import Tech from "./Tech";

export default interface Project {
  _id: string;
  title: string;
  description: string;
  github: string;
  url: string;
  techs: Tech[];
}
