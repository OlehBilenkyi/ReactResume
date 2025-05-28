import MyInfo from "./MyInfo/MyInfo";
import Projects from "./MyProjects/MyProjects";
import Experience from "./WorkExperience/WorkExperience";
import { MainContentWrapper } from "./MainContent.styled";
import MyEducation from "../MainContent/Education/Education";

const MainContent = ({ profession, name, description }) => (
  <MainContentWrapper>
    <MyInfo profession={profession} name={name} description={description} />

    <Experience />
    <Projects />
    <MyEducation />
  </MainContentWrapper>
);

export default MainContent;
