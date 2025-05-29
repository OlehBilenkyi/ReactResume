import React from 'react';
import MyInfo from "./MyInfo/MyInfo";
import Projects from "./MyProjects/MyProjects";
import Experience from "./WorkExperience/WorkExperience";
import { MainContentWrapper } from "./MainContent.styled";
import MyEducation from "../MainContent/Education/Education";

const MainContent = React.forwardRef((props, ref) => (
  <MainContentWrapper>
    <MyInfo ref={ref} {...props} />
    <Experience />
    <Projects />
    <MyEducation />
  </MainContentWrapper>
));

export default MainContent;