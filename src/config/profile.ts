/**
 * Slock Ahuja - Researcher Profile Configuration
 * Centralized configuration for Lead Researcher and Presenter.
 * Official verified profile URLs for IEEE ACROSET 2026.
 */

// Verified Profile & Social URLs
export const SLOCK_NAME: string = "Slock Ahuja";
export const SLOCK_DESIGNATION: string = "Lead Researcher | Research Paper Presenter";
export const SLOCK_ROLE: string = "Lead Author & Conference Presenter";
export const SLOCK_INSTITUTION: string = "Marwadi University";
export const SLOCK_DEPARTMENT: string = "Department of Information and Communication Technology";
export const SLOCK_LOCATION: string = "Gujarat, India";

export const SLOCK_EMAIL: string = "slockahuja321@gmail.com";
export const SLOCK_GOOGLE_SCHOLAR_URL: string = "https://scholar.google.com/citations?user=f4EQzx4AAAAJ";
export const SLOCK_LINKEDIN_URL: string = "https://www.linkedin.com/in/slock-ahuja-32839b315/";
export const SLOCK_GITHUB_URL: string = "https://github.com/SlockAhuja";
export const SLOCK_PERSONAL_WEBSITE_URL: string = "https://slockahuja.github.io/AI_Based_resource_management/";
export const SLOCK_IMAGE_URL: string = "./images/slock-ahuja.jpg";

export const SLOCK_RESEARCH_INTERESTS: string[] = [
  "Artificial Intelligence",
  "Non-Terrestrial Networks",
  "6G Communication Systems",
  "Satellite Communications",
  "Reinforcement Learning",
  "Wireless Resource Management",
  "Machine Learning",
];

export interface ResearcherProfile {
  name: string;
  designation: string;
  role: string;
  title: string;
  image: string;
  affiliation: {
    department: string;
    institution: string;
    state: string;
    country: string;
  };
  email: string;
  googleScholar: string;
  linkedin: string;
  github: string;
  website: string;
  bio: string;
  researchInterests: string[];
  conference: {
    name: string;
    paperId: string;
    paperTitle: string;
    date: string;
    location: string;
    role: string;
  };
}

export const presenterProfile: ResearcherProfile = {
  name: SLOCK_NAME,
  designation: SLOCK_DESIGNATION,
  role: SLOCK_ROLE,
  title: "Lead Researcher & Presenter",
  image: SLOCK_IMAGE_URL,
  affiliation: {
    department: SLOCK_DEPARTMENT,
    institution: SLOCK_INSTITUTION,
    state: "Gujarat",
    country: "India",
  },
  email: SLOCK_EMAIL,
  googleScholar: SLOCK_GOOGLE_SCHOLAR_URL,
  linkedin: SLOCK_LINKEDIN_URL,
  github: SLOCK_GITHUB_URL,
  website: SLOCK_PERSONAL_WEBSITE_URL,
  bio: "Lead researcher and conference presenter for IEEE ACROSET 2026 Paper 272 at Marwadi University. Formulated the multi-tier deep reinforcement learning policy with Proximal Policy Optimization (PPO), developed the end-to-end 3GPP Non-Terrestrial Network simulation environment, and empirically evaluated over 12,000 realistic communication samples.",
  researchInterests: SLOCK_RESEARCH_INTERESTS,
  conference: {
    name: "IEEE ACROSET 2026",
    paperId: "272",
    paperTitle: "AI-Enabled Resource Management for Non-Terrestrial Network Integrated 6G Communication Systems",
    date: "12–13 September 2026",
    location: "Indore, Madhya Pradesh, India",
    role: "Paper Presenter & Lead Author",
  },
};
