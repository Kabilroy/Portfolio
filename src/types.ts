export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend / Database' | 'Programming Languages';
  percentage: number;
  iconClass: string;
  color?: string;
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  iconClass: string;
  accent?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  iconClass: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  imagePlaceholderText: string;
  projectUrl: string;
  githubUrl?: string;
}

export interface PersonalDetails {
  name: string;
  dob: string;
  location: string;
  email: string;
  languagesKnown: string[];
  college: string;
  degree: string;
  status: string;
  phone: string;
  whatsappUrl: string;
  github: string;
  linkedin: string;
}
