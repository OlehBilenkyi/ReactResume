import React from "react";
import {
  SkillsContainer,
  SkillsTitle,
  SkillsList,
  SkillsListItem,
} from "../LanguagesSoftSkillsTechSkills.styled";

const Languages: React.FC = () => (
  <SkillsContainer>
    <SkillsTitle>Languages</SkillsTitle>
    <SkillsList>
      <SkillsListItem>🇺🇦 Ukrainian — Native</SkillsListItem>
      <SkillsListItem>🇵🇱 Polish — A2 (Basic)</SkillsListItem>
      <SkillsListItem>🇬🇧 English — A2</SkillsListItem>
      <SkillsListItem>🇷🇺 Russian — C2</SkillsListItem>
    </SkillsList>
  </SkillsContainer>
);

export default Languages;
