import {
  SkillsContainer,
  SkillsTitle,
  SkillsList,
  SkillsListItem,
} from "../LanguagesSoftSkillsTechSkills.styled";

const TechSkills = () => (
  <SkillsContainer>
    <SkillsTitle>Technical Skills</SkillsTitle>
    <SkillsList>
      <SkillsListItem>
        <strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React
        (beginner)
      </SkillsListItem>
      <SkillsListItem>
        <strong>Backend:</strong> PHP, Node.js (beginner)
      </SkillsListItem>
      <SkillsListItem>
        <strong>Databases:</strong> MySQL
      </SkillsListItem>
      <SkillsListItem>
        <strong>Tools:</strong> Git, Composer, REST API
      </SkillsListItem>
      <SkillsListItem>
        <strong>APIs:</strong> Stripe, Google OAuth, PHPMailer
      </SkillsListItem>
      <SkillsListItem>
        <strong>Security:</strong> CSRF Protection, Google reCAPTCHA
      </SkillsListItem>
      <SkillsListItem>
        <strong>Workflow:</strong> Trello, Figma
      </SkillsListItem>
    </SkillsList>
  </SkillsContainer>
);
