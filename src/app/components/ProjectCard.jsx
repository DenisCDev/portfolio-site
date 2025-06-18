"use client";
import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiJava,
  SiSpringboot,
  SiReactnative,
  SiExpo,
  SiCss3,
  SiNetlify,
  SiHtml5,
} from "react-icons/si";

const ICON_MAP = {
  "react": SiReact,
  "next.js": SiNextdotjs,
  "nextjs": SiNextdotjs,
  "tailwindcss": SiTailwindcss,
  "node.js": SiNodedotjs,
  "nodejs": SiNodedotjs,
  "express": SiExpress,
  "javascript": SiJavascript,
  "java": SiJava,
  "spring boot": SiSpringboot,
  "react native": SiReactnative,
  "expo": SiExpo,
  "css": SiCss3,
  "netlify": SiNetlify,
  "html": SiHtml5,
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  previewUrl,
  technologies = [], 
}) => {
  const handleOpen = () => {
    if (previewUrl) {
      window.open(previewUrl, "_blank");
    }
  };

  return (
    <div
      className="rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 cursor-pointer"
      onClick={handleOpen}
    >
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={previewUrl || "#"}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-yellow-400 transition duration-300 group/link"
            target="_blank"
            onClick={(e) => e.stopPropagation()}
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-yellow-400" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 transition-colors duration-300 hover:bg-gray-800 flex flex-col">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>

        {/* Bloco de ícones de tecnologias */}
        {technologies.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => {
                const key = tech.trim().toLowerCase();
                const IconComponent = ICON_MAP[key];
                if (!IconComponent) {;
                  return null;
                }
                return (
                  <IconComponent
                    key={tech}
                    className="h-6 w-6 text-white"
                    title={tech}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
