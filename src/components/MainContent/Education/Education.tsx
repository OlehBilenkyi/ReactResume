import React from "react";
import {
  EducationContainer,
  EducationTitle,
  NameEducation,
  EducationDip,
  WorkExperienceTime,
  WorkExperienceList,
  WorkExperienceItem,
  WorkExperienceTimeClass,
} from "./Education.module";

const MyEducation = () => {
  return (
    <>
      <EducationContainer>
        <EducationTitle>Self-Taught Frontend Development</EducationTitle>
        <EducationDip>
          Resources: YouTube (GO-IT, Net Ninja), JavaScript.info, freeCodeCamp,
          ChatGPT.
        </EducationDip>
        <WorkExperienceTimeClass>2022 - Present</WorkExperienceTimeClass>
        <WorkExperienceList>
          <WorkExperienceItem>
            Focused on HTML, CSS, JavaScript (ES6+), React fundamentals
          </WorkExperienceItem>
          <WorkExperienceItem>
            Completed projects in both frontend development
          </WorkExperienceItem>
        </WorkExperienceList>
      </EducationContainer>
      <EducationContainer>
        <EducationTitle>Education</EducationTitle>
        <NameEducation>
          <a
            href="https://nuos.edu.ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Admiral Makarov National University of Shipbuilding, Mykolaiv,
            Ukraine
          </a>
        </NameEducation>
        <EducationDip>
          Master’s Degree (with Honors), Electrical Engineering
        </EducationDip>
        <WorkExperienceTime>September 2010 – June 2018</WorkExperienceTime>
      </EducationContainer>
    </>
  );
};

export default MyEducation;
