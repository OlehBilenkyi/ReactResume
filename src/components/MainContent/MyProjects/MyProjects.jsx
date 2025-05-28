import {
  MyProjects,
  ProjName,
  ProjectDetails,
  ProjectItemTitle,
  MyProjectsList,
  ProjectItemTech,
  ProjectItem,
} from "./MyProjects.styled";

const Projects = () => (
  <MyProjects>
    <ProjName>Sample Projects</ProjName>
    <MyProjectsList>
      <ProjectItem>
        <ProjectItemTitle>Meal Planner Pro</ProjectItemTitle>
        {/* <ProjectItemTech>Jan 2024 – Present</ProjectItemTech> */}
        <ProjectDetails>
          <ProjectItem>
            Calorie tracker with customizable meals and diet types.
          </ProjectItem>
          <ProjectItem>
            Tech: React, Hooks, Firebase, Bootstrap, Chart.js
          </ProjectItem>
        </ProjectDetails>
      </ProjectItem>
      <ProjectItem>
        <ProjectItemTitle>RealEstateHub</ProjectItemTitle>
        {/* <ProjectItemTech>Feb 2023 – Dec 2023</ProjectItemTech> */}
        <ProjectDetails>
          <ProjectItem>
            Property listing platform with filters and mock backend.
          </ProjectItem>
          <ProjectItem>Tech: React, SCSS, REST API</ProjectItem>
          {/*<ProjectItem>
            Secure Stripe payments with Google OAuth and reCAPTCHA v3
          </ProjectItem>
          <ProjectItem>
            Automated Telegram/email notifications and multi-factor
            authentication
          </ProjectItem> */}
        </ProjectDetails>
      </ProjectItem>
      <ProjectItem>
        <ProjectItemTitle>StudyMate</ProjectItemTitle>
        {/* <ProjectItemTech>Feb 2022 – Mar 2022</ProjectItemTech> */}
        <ProjectDetails>
          <ProjectItem>
            Digital learning tracker with task/module management.
          </ProjectItem>
          <ProjectItem>Tech: React, MUI, localStorage</ProjectItem>
        </ProjectDetails>
      </ProjectItem>
      <ProjectItem>
        <ProjectItemTitle>CryptoCompare</ProjectItemTitle>
        {/* <ProjectItemTech>[ JavaScript ]</ProjectItemTech> */}
        <ProjectDetails>
          <ProjectItem>Live crypto rates with interactive charts.</ProjectItem>
          <ProjectItem>Tech: React, REST API, CSS Modules</ProjectItem>
        </ProjectDetails>
      </ProjectItem>
      <ProjectItem>
        <ProjectItemTitle>Taxi — Smart Car Rental System </ProjectItemTitle>
        {/* <ProjectItemTech>[ JavaScript ]</ProjectItemTech> */}
        <ProjectDetails>
          <ProjectItem>
            Secure platform with AI recommendations and Stripe payments.
          </ProjectItem>
          <ProjectItem>Tech: PHP, JavaScript, MySQL, Docker</ProjectItem>
        </ProjectDetails>
      </ProjectItem>
    </MyProjectsList>
  </MyProjects>
);

export default Projects;
