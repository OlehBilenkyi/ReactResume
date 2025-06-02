import React from "react";
import {
  ExperienceSection,
  ExperienceTitle,
  ExperienceCard,
  ExperiencePosition,
  ExperiencePeriod,
  Separator,
  ExperienceList,
  ExperienceListItem,
} from "./WorkExperience.module";

/**
 * Опыт работы и проекты пользователя
 * @returns {JSX.Element}
 */
const Experience: React.FC = () => (
  <ExperienceSection>
    <ExperienceTitle>Experience</ExperienceTitle>

    <ExperienceCard>
      <ExperiencePosition>
        Front-End Developer (Personal Projects & Freelance)
      </ExperiencePosition>
      <ExperiencePeriod>
        Jan 2024 – Present
        <Separator>|</Separator> Remote
      </ExperiencePeriod>
      <ExperienceList>
        <ExperienceListItem>
          Developed 4 React applications with Firebase, APIs, and responsive
          design. Key projects: Meal Planner Pro, RealEstateHub (details in
          Projects).
        </ExperienceListItem>
      </ExperienceList>
    </ExperienceCard>

    <ExperienceCard>
      <ExperiencePosition>
        Web Developer (Project Owner) | FoodCase Catering — Kraków, Poland
      </ExperiencePosition>
      <ExperiencePeriod>
        Feb 2023 – Dec 2023
        <Separator>|</Separator> Remote
      </ExperiencePeriod>
      <ExperienceList>
        <ExperienceListItem>
          Full-cycle development of a smart catering system: UI/UX, admin
          dashboard, secure authentication. Built order/payment system with
          Stripe, Google OAuth, and MySQL. Implemented AI-powered menu
          generation and real-time analytics.
        </ExperienceListItem>
      </ExperienceList>
    </ExperienceCard>

    <ExperienceCard>
      <ExperiencePosition>
        Junior JavaScript Developer (Internship)
      </ExperiencePosition>
      <ExperiencePeriod>
        Feb 2022 – Mar 2022
        <Separator>|</Separator> Remote
      </ExperiencePeriod>
      <ExperienceList>
        <ExperienceListItem>
          Developed e-commerce platforms with Stripe and Telegram API
          integrations.
        </ExperienceListItem>
      </ExperienceList>
    </ExperienceCard>
  </ExperienceSection>
);

export default Experience;
