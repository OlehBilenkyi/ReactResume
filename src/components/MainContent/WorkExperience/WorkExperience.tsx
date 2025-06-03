import {
  ExperienceContainer,
  ExperienceTitle,
  ExperienceItem,
  Timeline,
  TimelineDot,
  TimelineLine,
  ExperienceContent,
  Dates,
  Company,
  JobTitle,
  DetailsList,
  ListItem,
} from "./WorkExperience.module";

const Experience = () => (
  <ExperienceContainer>
    <ExperienceTitle>Work Experience</ExperienceTitle>
    <ExperienceItem>
      <Timeline>
        <TimelineDot />
        <TimelineLine />
      </Timeline>
      <ExperienceContent>
        <Dates>February 2023 - Present</Dates>
        <Company>Remote</Company>
        <JobTitle>Junior JavaScript Developer (Internship)</JobTitle>
        <DetailsList>
          <ListItem>
            Developed and maintained web applications including landing pages,
            small e-commerce platforms, and mobile apps
          </ListItem>
          <ListItem>
            Integrated payment systems (Stripe API) and worked with various APIs
            (Google OAuth, Telegram)
          </ListItem>
          <ListItem>
            Optimized performance of web services and managed server
            configurations
          </ListItem>
          <ListItem>
            Created responsive web components and interactive user interfaces
            using modern JavaScript
          </ListItem>
          <ListItem>
            Implemented security measures including CSRF protection and Google
            reCAPTCHA
          </ListItem>
          <ListItem>
            Managed tasks using Trello and followed technical specifications
            (ToR)
          </ListItem>
          <ListItem>
            Used Git for version control and Composer for PHP dependency
            management
          </ListItem>
        </DetailsList>
      </ExperienceContent>
    </ExperienceItem>
  </ExperienceContainer>
);

export default Experience;
