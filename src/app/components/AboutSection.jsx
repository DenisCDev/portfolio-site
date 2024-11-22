"use client";
import React, { useTransition, useState } from "react";
import Link from "next/link";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>Node.js</li>
        <li>React</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "Educação",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Ciência da Computação - Bacharelado</li>
        <em>Universidade Virtual Cruzeiro do Sul</em>
      </ul>
    ),
  },
  {
    title: "Certificações",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <Link
          href="https://www.coursera.org/account/accomplishments/certificate/8GTWGD9JR77J"
          target="_blank"
          className="text-white hover:text-yellow-500"
        >
          <li>
            Fundamentos de Design UX -{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB4437] via-[#F4B400] to-[#0F9D58]">
              Google
            </span>
            : <em>Especializado em criar designs amigáveis para o usuário.</em>
          </li>
        </Link>
        <Link
          href="https://www.cloudskillsboost.google/public_profiles/18698d44-e14f-4338-b6b3-6e015b323d41/badges/1696274"
          target="_blank"
          className="text-white hover:text-yellow-500"
        >
          <li>
            Essenciais do Google Cloud -{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#F4B400] to-[#0F9D58]">
              Google
            </span>
            : <em>Compreensão dos serviços de nuvem do Google.</em>
          </li>
        </Link>
        <Link
          href="https://empresas.descomplica.com.br/#/certificado/7e3cd356-2012-41f5-b715-a6af58e7b08a"
          target="_blank"
          className="text-white hover:text-yellow-500"
        >
          <li>
            Design Thinking, UX e Metodologias Ágeis -{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
              Nubank
            </span>
            : <em>Treinado em métodos de design inovadores e centrados no usuário.</em>
          </li>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1P8PAad_ZuuSwVQUzEm1r04tOMSxQjVts/view"
          target="_blank"
          className="text-white hover:text-yellow-500"
        >
          <li>
            Discover: Trilha Conectar -{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-400">
              Rocketseat
            </span>
            : <em>Habilidades aprimoradas em desenvolvimento web moderno.</em>
          </li>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1ZChCvEEHDa_bgfFw091uZ7jau2ghUCk7/view"
          target="_blank"
          className="text-white hover:text-yellow-500"
        >
          <li>
            Desenvolvedor Back-end -{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              Tech4me
            </span>
            : <em>Especializado em desenvolvimento web server-side.</em>
          </li>
        </Link>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex justify-center md:block">
          <div className="rounded-lg bg-[#181818] w-[300px] h-[200px] lg:w-[400px] lg:h-[400px] relative overflow-hidden shadow-xl transition-transform transform hover:scale-105 duration-300 border border-[#181818]">
            <iframe
              src="https://lottie.host/embed/563f84c2-ff9d-49cd-b275-991e2d7c78d6/QDsnI1jRtW.json"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ position: 'absolute', top: 0, left: 0 }}
            ></iframe>
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
          <p className="text-base lg:text-lg">
            Sou um desenvolvedor web. Atualmente cursando Ciência da Computação, tenho modernizado e digitalizado empresas no Brasil, criando experiências web incríveis que aumentaram sua lucratividade e crescimento. Minha expertise em criar soluções centradas no usuário ajudou empresas a expandirem sua presença digital e alcançarem resultados notáveis. Estou sempre pronto para enfrentar novos desafios.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "} Habilidades {" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "} Educação {" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "} Certificações {" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
