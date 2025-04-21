import React from "react";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../constants";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = PROJECTS.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === slug);
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (!project) return <div>{t("Project not found")}</div>;

  return (
    <div className="p-4">
        <button onClick={() => navigate(-1)} className="text-purple-600 underline mb-4">
        {t("← Back to Projects")}
        </button>
      <div className="flex flex-col mb-4">
        <h1 className="text-3xl text-center font-bold mb-4">{project.title}</h1>
        <div className="flex flex-row gap-1 w-1/4 mb-4">
          <img src={project.image} alt={project.title} className="rounded" />
        </div>
        <p className="mb-4 text-neutral-400">{project.description}</p>
      <div className="mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="mr-2 mt-4 px-2 py-1 rounded bg-neutral-900 text-sm font-medium text-purple-800">
            {tech}
          </span>
        ))}
      </div>
      </div>
      <a href={project.link} target="_blank" className="text-blue-500 underline">{t("Visit Project")}</a>
    </div>
  );
};

export default ProjectDetails;