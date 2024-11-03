"use client";
import React, { useRef, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import anime from "animejs";

const projectsData = [
  {
    id: 1,
    title: "IntLab",
    description: "Website de Estúdio de Design",
    image: "/images/projects/p1.png",
    previewUrl: "https://intlab.vercel.app/",
  },
  {
    id: 2,
    title: "The Gym",
    description: "Website de Rede de Academias",
    image: "/images/projects/p2.png",
    previewUrl: "https://thegym-brasil.netlify.app/",
  },
  {
    id: 3,
    title: "Verve",
    description: "Website de Café Temático de Jazz",
    image: "/images/projects/p3.png",
    previewUrl: "https://verve-cafe.netlify.app/",
  },
  {
    id: 4,
    title: "Aikissoba",
    description: "Website de Trailer de Comida de Rua Japonesa",
    image: "/images/projects/p4.png",
    previewUrl: "https://aikissoba.vercel.app/",
  },
];

const ProjectsSection = () => {
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

  return (
    <section id="projects" ref={sectionRef}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-2 md:mb-4">
        Meus Projetos
      </h2>
      <p className="text-center text-lg text-gray-400 mb-8 md:mb-12">
        Clique na imagem de um projeto para visualizá-lo
      </p>
      <ul className={`grid md:grid-cols-3 gap-8 md:gap-12 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
        {projectsData.map((project) => (
          <li key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
