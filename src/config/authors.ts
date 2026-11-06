/**
 * Paper 272 Authors & Research Collaboration Configuration
 * Centralized academic and professional profile data for IEEE ACROSET 2026.
 * Features the two primary collaborating researchers while preserving
 * official IEEE publication authorship integrity.
 */

import {
  SLOCK_NAME,
  SLOCK_DESIGNATION,
  SLOCK_ROLE,
  SLOCK_EMAIL,
  SLOCK_GOOGLE_SCHOLAR_URL,
  SLOCK_LINKEDIN_URL,
  SLOCK_GITHUB_URL,
  SLOCK_PERSONAL_WEBSITE_URL,
  SLOCK_IMAGE_URL,
  SLOCK_RESEARCH_INTERESTS,
  SLOCK_DEPARTMENT,
  SLOCK_INSTITUTION,
  SLOCK_LOCATION,
} from './profile';

// Re-export Slock constants
export {
  SLOCK_NAME,
  SLOCK_DESIGNATION,
  SLOCK_ROLE,
  SLOCK_EMAIL,
  SLOCK_GOOGLE_SCHOLAR_URL,
  SLOCK_LINKEDIN_URL,
  SLOCK_GITHUB_URL,
  SLOCK_PERSONAL_WEBSITE_URL,
  SLOCK_IMAGE_URL,
  SLOCK_RESEARCH_INTERESTS,
};

// Verified Current Supervisor Profile Details (Prof. Dr. Praveen Kumar Sharma)
export const PRAVEEN_NAME: string = "Prof. Dr. Praveen Kumar Sharma";
export const PRAVEEN_DESIGNATION: string = "Head of Department (HoD) | Professor & Research Leader";
export const PRAVEEN_ROLE: string = "Professor, Head of Department (ECE) & Research Supervisor";
export const PRAVEEN_DEPARTMENT: string = "Department of Electronics and Communication Engineering (ECE)";
export const PRAVEEN_INSTITUTION: string = "MIT, Pune";
export const PRAVEEN_LOCATION: string = "Maharashtra, India";

export const PRAVEEN_EMAIL: string = "impraveenkumarsharma@gmail.com";
export const PRAVEEN_GOOGLE_SCHOLAR_URL: string = "https://scholar.google.com/citations?user=GjM7CAYAAAAJ&hl=en";
export const PRAVEEN_LINKEDIN_URL: string = "https://kr.linkedin.com/in/dr-praveen-kumar-sharma-832aa11aa";
export const PRAVEEN_IMAGE_URL: string = "./images/praveen-kumar-sharma.jpg";

export const PRAVEEN_ACADEMIC_BACKGROUND: string[] = [
  "Ph.D., Birla Institute of Technology and Science (BITS), Pilani, India.",
  "Previous Research Scientist experience at Seoul National University of Science and Technology (SeoulTech), South Korea.",
  "Head of Department (HoD) & Professor, Department of Electronics and Communication Engineering (ECE), MIT, Pune, Maharashtra, India.",
];

export const PRAVEEN_RESEARCH_EXPERTISE: string[] = [
  "Antenna Design and Engineering",
  "Flexible Electronics",
  "Metamaterials",
  "Metasurfaces",
  "Wearable Electronics",
  "Electromagnetic Characterization",
  "Machine Learning for Engineering Applications",
];

export interface FeaturedResearcher {
  id: string;
  name: string;
  designation: string;
  role: string;
  cardRole: string;
  department: string;
  institution: string;
  location: string;
  image: string;
  email: string;
  googleScholar?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  academicBackground?: string[];
  expertiseOrInterests: string[];
  bio: string;
  supervisoryRole?: string;
}

/**
 * Featured Two-Researcher Team for the Academic Collaboration Platform
 */
export const featuredResearchers: FeaturedResearcher[] = [
  {
    id: "slock-ahuja",
    name: SLOCK_NAME,
    designation: SLOCK_DESIGNATION,
    role: SLOCK_ROLE,
    cardRole: "Lead Researcher & Presenter",
    department: SLOCK_DEPARTMENT,
    institution: SLOCK_INSTITUTION,
    location: SLOCK_LOCATION,
    image: SLOCK_IMAGE_URL,
    email: SLOCK_EMAIL,
    googleScholar: SLOCK_GOOGLE_SCHOLAR_URL,
    linkedin: SLOCK_LINKEDIN_URL,
    github: SLOCK_GITHUB_URL,
    website: SLOCK_PERSONAL_WEBSITE_URL,
    expertiseOrInterests: SLOCK_RESEARCH_INTERESTS,
    bio: "Lead researcher and conference presenter for IEEE ACROSET 2026 Paper 272 at Marwadi University. Formulated the multi-tier deep reinforcement learning policy with Proximal Policy Optimization (PPO), developed the end-to-end 3GPP Non-Terrestrial Network simulation environment, and empirically evaluated over 12,000 realistic communication samples.",
    supervisoryRole: "System Architecture, Deep RL Policy Formulation & Simulation Modeling",
  },
  {
    id: "praveen-kumar-sharma",
    name: PRAVEEN_NAME,
    designation: PRAVEEN_DESIGNATION,
    role: PRAVEEN_ROLE,
    cardRole: "Head of Department (HoD), ECE • Professor & Research Leader",
    department: PRAVEEN_DEPARTMENT,
    institution: PRAVEEN_INSTITUTION,
    location: PRAVEEN_LOCATION,
    image: PRAVEEN_IMAGE_URL,
    email: PRAVEEN_EMAIL,
    googleScholar: PRAVEEN_GOOGLE_SCHOLAR_URL,
    linkedin: PRAVEEN_LINKEDIN_URL,
    academicBackground: PRAVEEN_ACADEMIC_BACKGROUND,
    expertiseOrInterests: PRAVEEN_RESEARCH_EXPERTISE,
    bio: "Distinguished academician, Head of Department (HoD), Professor & Research Leader in the Department of Electronics and Communication Engineering (ECE) at MIT, Pune, Maharashtra, India. Ph.D. from Birla Institute of Technology and Science (BITS), Pilani, with previous research scientist experience at Seoul National University of Science and Technology (SeoulTech), South Korea. Guiding advanced investigations in wireless systems, electromagnetic metasurfaces, antenna engineering, and AI-enabled telecommunications.",
    supervisoryRole: "Academic Supervision, Theoretical Framework Oversight & Methodology Review",
  },
];

export const supervisorProfile = featuredResearchers.find((r) => r.id === "praveen-kumar-sharma")!;
export const leadAuthorProfile = featuredResearchers.find((r) => r.id === "slock-ahuja")!;

/**
 * Official Published IEEE Authorship for Academic Integrity
 * Preserves the exact 4-author publication record of Paper 272.
 */
export interface OfficialPublicationAuthor {
  sequence: number;
  name: string;
  roleInPaper: string;
  affiliation: string;
  isPresenter?: boolean;
  isSupervisor?: boolean;
}

export const officialPublicationAuthors: OfficialPublicationAuthor[] = [
  {
    sequence: 1,
    name: "Slock Ahuja",
    roleInPaper: "Lead Author & Conference Presenter",
    affiliation: "Department of ICT, Marwadi University, Gujarat, India",
    isPresenter: true,
  },
  {
    sequence: 2,
    name: "Prof. Dr. Praveen Kumar Sharma",
    roleInPaper: "Research Supervisor & Co-Author",
    affiliation: "Department of ICT, Marwadi University, Gujarat, India",
    isSupervisor: true,
  },
  {
    sequence: 3,
    name: "Dr. C. D. Parmar",
    roleInPaper: "Co-Author",
    affiliation: "Department of ICT, Marwadi University, Gujarat, India",
  },
  {
    sequence: 4,
    name: "Indu Jaiswal",
    roleInPaper: "Co-Author",
    affiliation: "Department of ICT, Marwadi University, Gujarat, India",
  },
];

// Backwards compatibility for any legacy references
export const authorsList = officialPublicationAuthors.map((a) => ({
  id: a.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  name: a.name,
  title: a.roleInPaper,
  role: a.roleInPaper,
  department: "Department of Information and Communication Technology",
  institution: "Marwadi University",
  location: "Gujarat, India",
  image: a.isPresenter ? SLOCK_IMAGE_URL : a.isSupervisor ? PRAVEEN_IMAGE_URL : undefined,
  email: a.isPresenter ? SLOCK_EMAIL : a.isSupervisor ? PRAVEEN_EMAIL : undefined,
  googleScholar: a.isPresenter ? SLOCK_GOOGLE_SCHOLAR_URL : a.isSupervisor ? PRAVEEN_GOOGLE_SCHOLAR_URL : undefined,
  linkedin: a.isPresenter ? SLOCK_LINKEDIN_URL : a.isSupervisor ? PRAVEEN_LINKEDIN_URL : undefined,
  isPresenter: a.isPresenter,
  isSupervisor: a.isSupervisor,
}));
