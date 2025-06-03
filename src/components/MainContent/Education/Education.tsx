import {
  EducationContainer,
  EducationTitle,
  NameEducation,
  EducationDip,
  WorkExperienceTime,
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
        <p className="work-experien-time">2022 - Present</p>
        <ul className="work-experionse-list">
          <li className="work-experionse-items">
            Focused on HTML, CSS,JavaScript (ES6+), React fundamentals
          </li>
          <li className="work-experionse-items">
            Completed projects in both frontend development
          </li>
        </ul>
      </EducationContainer>
      <EducationContainer>
        <EducationTitle>Education</EducationTitle>
        <NameEducation>
          <a href="https://nuos.edu.ua/" target="_blank">
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
