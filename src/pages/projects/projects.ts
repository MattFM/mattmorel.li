import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'Giveback',
    description: 'Amazing ways to give back to the place you visit',
    demoLink: 'https://giveback.guide',
    tags: ['Apps']
  },
]
