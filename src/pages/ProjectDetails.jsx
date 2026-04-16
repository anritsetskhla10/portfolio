import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { ProjectsContext } from '../../context/ProjectsContext';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const GITHUB_USER = 'anritsetskhla10';

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { projects, loading } = useContext(ProjectsContext);

  if (loading) return <div className="text-center mt-10">{t("loading")}</div>;

  const project = projects.find(p => 
    p.repoName === slug || p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!project) return <div className="text-center mt-10 text-red-500">{t("Project not found")}</div>;

  const isDynamic = !!project.repoName;

  const projectImages = isDynamic
    ? Array.from({ length: project.imageCount || 1 }, (_, index) => `https://raw.githubusercontent.com/${GITHUB_USER}/${project.repoName}/main/screenshots/${index + 1}.png`)
    : project.images;

  const currentLang = i18n.language?.includes('ka') ? 'ka' : 'en';
  const displayDescription = isDynamic 
    ? project.description?.[currentLang] 
    : t(`descriptions.${project.title}`);

  return (
    <div className="p-4">
      <button onClick={() => navigate(-1)} className="text-black dark:text-purple-600 underline mb-4">
        {t("Back to Projects")}
      </button>

      <div className="flex flex-col items-center mb-4">
        <h1 className="text-3xl text-center font-bold mb-4">{project.title}</h1>

        {/* Main Image Swiper */}
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          loop={true}
          className="w-full max-w-md mb-4 rounded"
        >
          {projectImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${project.title} ${index + 1}`}
                className="w-full h-[400px] object-contain rounded bg-transparent"
                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Image+Not+Found'; }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails */}
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          className="w-full max-w-md"
        >
          {projectImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${project.title} thumbnail ${index + 1}`}
                className="w-full h-20 object-cover rounded cursor-pointer"
                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150?text=No+Thumb'; }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="mb-4 text-black dark:text-neutral-400 mt-6 text-center max-w-2xl">
          {displayDescription}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {project.technologies?.map((tech, index) => (
            <span key={index} className="px-2 py-1 rounded bg-neutral-900 text-sm font-medium text-purple-800">
              {tech}
            </span>
          ))}
        </div>

        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-black dark:text-blue-500 underline font-bold mt-2">
          {t("Visit Project")}
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;