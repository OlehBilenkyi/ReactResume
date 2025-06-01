import React from "react";
import {
  SkillsContainer,
  SkillsTitle,
  SkillsList,
  SkillsListItem,
} from "../LanguagesSoftSkillsTechSkills.styled";

const TechSkills: React.FC = () => (
  <SkillsContainer>
    <SkillsTitle>Tech Stack</SkillsTitle>
    <SkillsList>
      <SkillsListItem>
        <strong>Languages & Libraries:</strong> HTML5, CSS3, JavaScript (ES6+),
        React (Hooks, Router), SASS, TypeScript (basic), Redux
      </SkillsListItem>
      <SkillsListItem>
        <strong>Tools:</strong> Git, GitHub, Webpack, Vite, Figma, Trello
      </SkillsListItem>
      <SkillsListItem>
        <strong>APIs & Backend:</strong> REST API, Firebase, PHP (basic), MySQL
        (basic)
      </SkillsListItem>
      <SkillsListItem>
        <strong>UI Frameworks:</strong> Material UI (MUI), Bootstrap
      </SkillsListItem>
      <SkillsListItem>
        <strong>Soft Skills:</strong> Teamwork, Communication, Adaptability,
        Self-Motivation, Time Management
      </SkillsListItem>
    </SkillsList>
  </SkillsContainer>
);

export default TechSkills;
