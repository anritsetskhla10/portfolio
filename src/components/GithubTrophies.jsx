import React from 'react';

function GithubTrophies() {
  return (
    <section className="my-8 text-center">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">GitHub Achievements</h2>
      
      {/* Trophy Cards */}
      <a
        href="https://github.com/ryo-ma/github-profile-trophy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://github-profile-trophy.vercel.app/?username=anritsetskhla10&theme=dark&row=1&column=4"
          alt="GitHub Trophies"
          className="max-w-full h-auto mx-auto mb-6"
        />
      </a>
      
      {/* Streak Stats */}
      <div>
        <h3 className="text-xl md:text-2xl font-medium mb-2">GitHub Streak</h3>
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=anritsetskhla10"
          alt="GitHub Streak Stats"
          className="max-w-full h-auto mx-auto"
        />
      </div>
    </section>
  );
}

export default GithubTrophies;

