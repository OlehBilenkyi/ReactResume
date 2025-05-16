import {MyProjects,ProjName,ProjectDetails,MyProjectsList,ProjectItemTech,ProjectItem,} from "./MyProjects.styled";

const Projects = () => (
  <MyProjects>
    <ProjName>Projects</ProjName>
    <MyProjectsList>
      <ProjectItem>
        <ProjectItemTitle>FoodCase Catering</ProjectItemTitle>
        <ProjectItemTech>
          [ PHP, JavaScript, MySQL, Stripe API, PHPMailer ]
        </ProjectItemTech>
        <ProjectDetails>
          <ProjectItem>
            Corporate food ordering platform with AI-powered recommendations
          </ProjectItem>
          <ProjectItem>Full-cycle order management with real-time analytics</ProjectItem>
          <ProjectItem>Secure Stripe payments with Google OAuth and reCAPTCHA v3</ProjectItem>
          <ProjectItem>
            Enterprise-grade security (CSRF protection, XSS/SQL prevention)
          </ProjectItem>
        </ProjectDetails>
      </ProjectItem>
      <ProjectItem>
        <ProjectItemTitle>Taxi Rent</ProjectItemTitle>
        <ProjectItemTech>
          [ JavaScript, PHP, HTML, CSS, Stripe, MySQL ]
        </ProjectItemTech>
        <ProjectDetails>
          <ProjectItem>
            Car rental platform with AI-powered recommendations and real-time
            analytics
          </ProjectItem>
          <ProjectItem>Full-cycle fleet management system with admin dashboard</ProjectItem>
          <ProjectItem>Secure Stripe payments with Google OAuth and reCAPTCHA v3</ProjectItem>
          <ProjectItem>
            Automated Telegram/email notifications and multi-factor
            authentication
          </ProjectItem>
        </ProjectDetails>
      </ProjectItem>
      <ProjectItem>
        <ProjectItemTitle>Tic-Tac-Toe</ProjectItemTitle>
        <ProjectItemTech>[ JavaScript, DOM ]</ProjectItemTech>
        <ProjectDetails>
          <ProjectItem>Interactive browser game with win detection logic</ProjectItem>
          <ProjectItem>Responsive design works on all device sizes</ProjectItem>
        </ProjectDetails>
      </ProjectItem>
      <ProjectItem>
        <ProjectItemTitle>Currency Count</ProjectItemTitle>
        <ProjectItemTech>[ JavaScript ]</ProjectItemTech>
        <ProjectDetails>
          <ProjectItem>Real-time currency conversion calculator</ProjectItem>
          <ProjectItem>Fetches latest exchange rates from pubProjectItemc API</ProjectItem>
        </ProjectDetails>
      </ProjectItem>
      <ProjectItem>
        <ProjectItemTitle>Quote Generator</ProjectItemTitle>
        <ProjectItemTech>[ JavaScript, API ]</ProjectItemTech>
      </ProjectItem>
      <ProjectItem>
        <ProjectItemTitle>To-Do List</ProjectItemTitle>
        <ProjectItemTech>[ JavaScript, Local Storage ]</ProjectItemTech>
      </ProjectItem>
      <ProjectItem>
        <ProjectItemTitle>Calorie Calculator</ProjectItemTitle>
        <ProjectItemTech>[ JavaScript ]</ProjectItemTech>
      </ProjectItem>
    </MyProjectsList>
  </MyProjects>
);

export default Projects;
