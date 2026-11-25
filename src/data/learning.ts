import { claudeCertifications } from "@/data/certifications";

export interface Course {
  id: string;
  title: string;
  provider: string;
  summary?: string;
  href?: string;
  status: "current focus" | "planned" | "completed";
  date?: string;
}

export const courses: Course[] = [
  {
    id: "google-cloud-genai",
    title: "Build and Modernize Applications With Generative AI",
    provider: "Google Skills · Google Cloud",
    summary: "The first course covers prompt design and includes hands-on labs with the Gemini SDK and Agent Studio.",
    href: "https://www.skills.google/paths/1282",
    status: "current focus",
  },
  {
    id: "ibm-ml-python",
    title: "Machine Learning with Python",
    provider: "IBM · Coursera",
    summary: "Regression, classification, clustering and model evaluation with scikit-learn.",
    href: "https://www.coursera.org/learn/machine-learning-with-python?specialization=ai-engineer",
    status: "planned",
  },
  ...claudeCertifications.map((certificate): Course => ({
    id: certificate.id,
    title: certificate.name,
    provider: certificate.detail,
    href: certificate.url,
    status: "completed",
    date: certificate.date,
  })),
];
