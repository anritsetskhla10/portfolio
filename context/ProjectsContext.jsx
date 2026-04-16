import{ createContext, useState, useEffect } from 'react';
import { PROJECTS as LOCAL_PROJECTS } from '../src/constants/index';

export const ProjectsContext = createContext();
// eslint-disable-next-line react/prop-types
export const ProjectsProvider = ({ children }) => {

  const [projects, setProjects] = useState(LOCAL_PROJECTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDynamicProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (response.ok) {
          const dynamicProjects = await response.json();
          setProjects([...dynamicProjects, ...LOCAL_PROJECTS]);
        }
      } catch (err) {
        console.error("Failed to fetch dynamic projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDynamicProjects();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects, loading }}>
      {children}
    </ProjectsContext.Provider>
  );
};