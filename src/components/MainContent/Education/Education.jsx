import {
  EducationContainer,
  EducationTitle,
  NameEducation,
  EducationDip,
  WorkExperienceTime,
} from "./Education.module";

const MyEducation = () => {
  return (
    <EducationContainer>
      <EducationTitle>Education</EducationTitle>
      <NameEducation>
        <a href="https://nuos.edu.ua/" target="_blank">
          Admiral Makarov National University of Shipbuilding
        </a>
      </NameEducation>
      <EducationDip>
        Specialist Diploma (with honors) in Electrical Power Engineering,
        Electrical Mechanics, Electrical Engineering
      </EducationDip>
      <WorkExperienceTime>September 2016 – June 2018</WorkExperienceTime>
    </EducationContainer>
    //  <EducationContainer>
    //         <EducationTitle>Web Development Education</EducationTitle>
    //         <EducationDip>
    //           Self-taught through Udemy courses, YouTube tutorials, and official
    //           documentation
    //         </EducationDip>
    //         <p class="work-experien-time">2022 - Present</p>
    //         <ul class="work-experionse-list">
    //           <li class="work-experionse-items">
    //             Focused on JavaScript (ES6+), PHP, React, and Node.js
    //             fundamentals
    //           </li>
    //           <li class="work-experionse-items">
    //             Completed projects in both frontend and backend development
    //           </li>
    //         </ul>
    //       </EducationContainer>
  );
};
export default MyEducation;
