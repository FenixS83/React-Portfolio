import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'all-things-pets',
      description: 'Group created API with Pet Integration App',
      link: "https://vast-retreat-92642.herokuapp.com/",
      repo: "https://github.com/gabrielcalk/all_things_pets"
    },
    {
      name: 'weather-dashboard',
      description: 'Use third party API to create Weather Dashboard',
      link: "https://fenixs83.github.io/weather-dashboard/",
      repo: "https://github.com/FenixS83/weather-dashboard"
    },
    {
      name: 'employee-tracker',
      description: 'Command Line Employee Management System',
      link: "https://youtu.be/itDD6llxDMM",
      repo: "https://github.com/FenixS83/employee-tracker"
    },
    {
      name: 'work-day-scheduler',
      description: 'Calendar application',
      link: "https://fenixs83.github.io/work-day-scheduler/",
      repo: "https://github.com/FenixS83/work-day-scheduler"
    },
    {
      name: 'tech-blog',
      description: 'CMS style blog',
      link: "https://fenix-sampson-tech-blog.herokuapp.com/",
      repo: "https://github.com/FenixS83/MVC-Tech-Blog"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
