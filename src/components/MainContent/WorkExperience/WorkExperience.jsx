import {
  WordExperienceContainer,
  WorkExperienH4,
  WorkExperienTime,
  WorkExperionseSeparator,
  WorkExperionseList,
  WorkExperionseItems,
  MyProjectsContainerName,
  MyProjectsContainer,
} from "./WorkExperience.module";


const Experience = () => (
  <>
    <MyProjectsContainer>
      <MyProjectsContainerName>Experience</MyProjectsContainerName>
      <WordExperienceContainer>
        <WorkExperienH4>
          Front-End Developer (Personal Projects & Freelance)
        </WorkExperienH4>
        <WorkExperienTime>
          Jan 2024 – Present
          <WorkExperionseSeparator>|</WorkExperionseSeparator> Remote
        </WorkExperienTime>
        <WorkExperionseList>
          <WorkExperionseItems>
            Developed 4 React applications with Firebase, APIs, and responsive
            design. Key projects: Meal Planner Pro, RealEstateHub (details in
            Projects).
          </WorkExperionseItems>
        </WorkExperionseList>
      </WordExperienceContainer>
    </MyProjectsContainer>
    <MyProjectsContainer>
      <WordExperienceContainer>
        <WorkExperienH4>
          Web Developer (Project Owner) | FoodCase Catering — Kraków, Poland
        </WorkExperienH4>
        <WorkExperienTime>
          Feb 2023 – Dec 2023
          <WorkExperionseSeparator>|</WorkExperionseSeparator> Remote
        </WorkExperienTime>
        <WorkExperionseList>
          <WorkExperionseItems>
            Full-cycle development of a smart catering system: UI/UX, admin
            dashboard, secure authentication. Built order/payment system with
            Stripe, Google OAuth, and MySQL. Implemented AI-powered menu
            generation and real-time analytics.
          </WorkExperionseItems>
        </WorkExperionseList>
      </WordExperienceContainer>
    </MyProjectsContainer>
    <MyProjectsContainer>
      <WordExperienceContainer>
        <WorkExperienH4>
          Junior JavaScript Developer (Internship)
        </WorkExperienH4>
        <WorkExperienTime>
          Feb 2022 – Mar 2022
          <WorkExperionseSeparator>|</WorkExperionseSeparator> Remote
        </WorkExperienTime>
        <WorkExperionseList>
          <WorkExperionseItems>
            Developed e-commerce platforms with Stripe and Telegram API
            integrations.
          </WorkExperionseItems>
        </WorkExperionseList>
      </WordExperienceContainer>
    </MyProjectsContainer>
    
  </>
);

export default Experience;
