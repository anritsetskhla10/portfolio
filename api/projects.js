export default async function handler(req, res) {
  const repos = [
    "PAC-MAN",
    "StatX",
    "smti-kanban"
  ]; 
  const githubUser = 'anritsetskhla10';

  try {
    if (repos.length === 0) {
      return res.status(200).json([]);
    }

    const promises = repos.map(async (repoName) => {
      const response = await fetch(`https://raw.githubusercontent.com/${githubUser}/${repoName}/main/portfolio.json`);
      if (!response.ok) return null;
      
      const data = await response.json();
      return { ...data, repoName }; 
    });

    const results = await Promise.all(promises);
    const validProjects = results.filter(p => p !== null);

    res.status(200).json(validProjects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
}