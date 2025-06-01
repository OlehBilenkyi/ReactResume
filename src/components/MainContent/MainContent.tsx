import React from "react";
import MyInfo from "./MyInfo/MyInfo";
import Projects from "./MyProjects/MyProjects";
import Experience from "./WorkExperience/WorkExperience";
import { MainContentWrapper } from "./MainContent.styled";
import MyEducation from "./Education/Education";

interface MainContentProps {
  profession: string;
  name: string;
  description: string;
}

const MainContent = React.forwardRef<HTMLDivElement, MainContentProps>(
  (props, ref) => (
    <MainContentWrapper
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      ref={ref}
    >
      <MyInfo {...props} />
      <Experience />
      <Projects />
      <MyEducation />
    </MainContentWrapper>
  )
);

export default MainContent;
