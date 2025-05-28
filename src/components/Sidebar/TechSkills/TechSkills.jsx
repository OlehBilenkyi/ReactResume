import {
  SkillsContainer,
  SkillsTitle,
  SkillsList,
  SkillsListItem,
} from "../LanguagesSoftSkillsTechSkills.styled";

const TechSkills = () => (
  <SkillsContainer>
    <SkillsTitle>Tech Stack</SkillsTitle>
    <SkillsList>
      <SkillsListItem>
        <strong>Languages & Libraries:</strong> HTML5, CSS3, JavaScript (ES6+),
        React (Hooks, Router), Bootstrap, SASS, TypeScript (basic),Redux
      </SkillsListItem>
      <SkillsListItem>
        <strong>Tools:</strong> Git, GitHub, Webpack, Vite, Figma, Trello,
        Chrome DevTools
      </SkillsListItem>
      <SkillsListItem>
        <strong>APIs & Backend:</strong> REST API, PHP (basic), MySQL (basic)
      </SkillsListItem>
      <SkillsListItem>
        <strong>UI Frameworks:</strong> Material UI (MUI), Bootstrap
      </SkillsListItem>
      <SkillsListItem>
        <strong>Soft Skills:</strong> Teamwork, communication, adaptability,
        self-motivation, time management
      </SkillsListItem>
    </SkillsList>
  </SkillsContainer>
);
export default TechSkills;
