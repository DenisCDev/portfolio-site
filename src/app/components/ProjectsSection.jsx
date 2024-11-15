"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import anime from "animejs";

const projectsData = [
  {
    id: 1,
    title: "IntLab",
    description: "Website de Estúdio de Design",
    image: "/images/projects/p1.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://intlab.vercel.app/",
    previewUrl: "https://intlab.vercel.app/",
  },
  {
    id: 2,
    title: "The Gym",
    description: "Website de Rede de Academias",
    image: "/images/projects/p2.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://thegym-brasil.netlify.app/",
    previewUrl: "https://thegym-brasil.netlify.app/",
  },
  {
    id: 3,
    title: "Verve",
    description: "Website de Café Temático de Jazz",
    image: "/images/projects/p3.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://verve-cafe.netlify.app/",
    previewUrl: "https://verve-cafe.netlify.app/",
  },
  {
    id: 4,
    title: "Aikissoba",
    description: "Website de Trailer de Comida de Rua Japonesa",
    image: "/images/projects/p4.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://aikissoba.vercel.app/",
    previewUrl: "https://aikissoba.vercel.app/",
  },
  {
    id: 5,
    title: "API RPG Node Express",
    description: "API de registro de personagens RPG",
    image: "/images/projects/4.png",
    tag: ["Todos", "API"],
    gitUrl: "https://github.com/DenisCDev/nodejsexpress-api",
    previewUrl: "https://github.com/DenisCDev/nodejsexpress-api",
  },
  {
    id: 6,
    title: "API PC Java Spring Booot",
    description: "API Restful de registro de computadores com especificação de peças",
    image: "/images/projects/5.png",
    tag: ["Todos", "API"],
    gitUrl: "https://github.com/DenisCDev/API-RegistroDeComputadores",
    previewUrl: "https://github.com/DenisCDev/API-RegistroDeComputadores",
  },
  {
    id: 7,
    title: "App React Native Aluguel de Carros",
    description: "Aplicativo para aluguel de carros de luxo",
    image: "/images/projects/6.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/DenisCDev/reactnative-car-app",
    previewUrl: "https://github.com/DenisCDev/reactnative-car-app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      anime({
        targets: sectionRef.current.querySelectorAll("li"),
        translateY: [70, 0],
        opacity: [0, 1],
        delay: anime.stagger(300),
        duration: 600,
        easing: "easeOutQuad",
      });
    }
  }, [isInView]);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" ref={sectionRef}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-2 md:mb-4">
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("Todos")}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("API")}
          name="API"
          isSelected={tag === "API"}
        />
      </div>
      <ul className={`grid md:grid-cols-3 gap-8 md:gap-12 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
        {filteredProjects.map((project) => (
          <li key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
