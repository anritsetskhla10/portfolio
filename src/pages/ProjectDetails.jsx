import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS } from "../constants";
import { useTranslation } from "react-i18next";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const project = PROJECTS.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) return <div>{t("Project not found")}</div>;


  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="text-black dark:text-purple-600 underline mb-4"
      >
        {t("← Back to Projects")}
      </button>

      <div className="flex flex-col mb-4">
        <h1 className="text-3xl text-center font-bold mb-4">{project.title}</h1>

        <div className="grid grid-cols-4 gap-2 max-w-5xl mb-4">
        {project.images.slice(0, 1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} ${index + 1}`}
            className="rounded col-span-2 row-span-2 w-full h-full object-cover"
          />
        ))}

        {project.images.slice(1, 5).map((image, index) => (
          <img
            key={index + 1}
            src={image}
            alt={`${project.title} ${index + 2}`}
            className="rounded w-full h-full object-cover"
          />
        ))}

        {/* "More photos" tile */}
        <div className="relative rounded overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-lg font-semibold">
            +{project.images.length} Photos
          </div>
        </div>
      </div>


        <p className="mb-4 text-black dark:text-neutral-400">
          {project.description}
        </p>

        <div className="mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="mr-2 mt-4 px-2 py-1 rounded bg-neutral-900 text-sm font-medium text-purple-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black dark:text-blue-500 underline"
      >
        {t("Visit Project")}
      </a>
    </div>
  );
};

export default ProjectDetails;
