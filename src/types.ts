export interface Project {
  id: string;
  title: string;
  description: string;
  company: string;
  link: string;
  date: string;
  category: 'web' | 'mobile';
  technologies: string[];
  bulletPoints: string[];
  image?: string;
  isFeatured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  date: string;
  description: string;
  bulletPoints: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
