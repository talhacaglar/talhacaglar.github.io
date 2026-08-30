import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Talha Çağlar",
    url: "https://talhacaglar.github.io/",
    email: "mailto:talhacaglarr@proton.me",
    jobTitle: "Computer Engineering Student",
    homeLocation: {
      "@type": "Place",
      name: "Bursa, Türkiye",
    },
    sameAs: [
      "https://github.com/talhacaglar",
      "https://www.linkedin.com/in/talhacaglar1/",
      "https://t.me/Cgllar",
    ],
    knowsAbout: ["Computer Engineering", "Linux", "Arch Linux", "Cyber Security", "Python", "Open Source"],
    owns: projects.map((project) => ({
      "@type": "SoftwareSourceCode",
      name: project.name,
      description: project.description,
      codeRepository: project.url,
      programmingLanguage: project.lang,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
