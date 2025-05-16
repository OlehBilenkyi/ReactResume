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
import MyEducation from "./Education/Education";

export const Experience = () => {
  return (
    <>
      <MyProjectsContainer>
        <MyProjectsContainerName>Work Experience</MyProjectsContainerName>
        <WordExperienceContainer>
          <WorkExperienH4>
            Junior JavaScript Developer (Internship)
          </WorkExperienH4>
          <WorkExperienTime>
            February 2023 - Present
            <WorkExperionseSeparator>|</WorkExperionseSeparator> Remote
          </WorkExperienTime>
          <WorkExperionseList>
            <WorkExperionseItems>
              Developed and maintained web applications including landing pages,
              small e-commerce platforms, and mobile apps
            </WorkExperionseItems>
            <WorkExperionseItems>
              Integrated payment systems (Stripe API) and worked with various
              APIs (Google OAuth, Telegram)
            </WorkExperionseItems>
            <WorkExperionseItems>
              Optimized performance of web services and managed server
              configurations
            </WorkExperionseItems>
            <WorkExperionseItems>
              Created responsive web components and interactive user interfaces
              using modern JavaScript
            </WorkExperionseItems>
            <WorkExperionseItems>
              Implemented security measures including CSRF protection and Google
              reCAPTCHA
            </WorkExperionseItems>
            <WorkExperionseItems>
              Managed tasks using Trello and followed technical specifications
              (ToR)
            </WorkExperionseItems>
            <WorkExperionseItems>
              Used Git for version control and Composer for PHP dependency
              management
            </WorkExperionseItems>
          </WorkExperionseList>
        </WordExperienceContainer>

        <MyEducation />
      </MyProjectsContainer>
    </>
  );
};
