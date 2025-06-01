import React from "react";
import {
  MyProjects,
  ProjName,
  MyProjectsList,
  ProjectItem,
  ProjectItemTitle,
  ProjectDetails,
} from "./MyProjects.styled";

const Projects = () => (
  <MyProjects>
    <ProjName>Sample Projects</ProjName>
    <MyProjectsList>
      <ProjectItem>
        <ProjectItemTitle>Meal Planner Pro</ProjectItemTitle>
        <ProjectDetails>
          <li>Calorie tracker with customizable meals and diet types.</li>
          <li>Tech: React, Hooks, Firebase, Bootstrap, Chart.js</li>
        </ProjectDetails>
      </ProjectItem>
      <ProjectItem>
        <ProjectItemTitle>RealEstateHub</ProjectItemTitle>
        <ProjectDetails>
          <li>Property listing platform with filters and mock backend.</li>
          <li>Tech: React, SCSS, REST API</li>
        </ProjectDetails>
      </ProjectItem>
      <ProjectItem>
        <ProjectItemTitle>StudyMate</ProjectItemTitle>
        <ProjectDetails>
          <li>Digital learning tracker with task/module management.</li>
          <li>Tech: React, MUI, localStorage</li>
        </ProjectDetails>
      </ProjectItem>
      <ProjectItem>
        <ProjectItemTitle>CryptoCompare</ProjectItemTitle>
        <ProjectDetails>
          <li>Live crypto rates with interactive charts.</li>
          <li>Tech: React, REST API, CSS Modules</li>
        </ProjectDetails>
      </ProjectItem>
      <ProjectItem>
        <ProjectItemTitle>Taxi — Smart Car Rental System</ProjectItemTitle>
        <ProjectDetails>
          <li>Secure platform with AI recommendations and Stripe payments.</li>
          <li>Tech: PHP, JavaScript, MySQL, Docker</li>
        </ProjectDetails>
      </ProjectItem>
    </MyProjectsList>
  </MyProjects>
);

export default Projects;
