import MyInfo from "./MyInfo/MyInfo";
import Projects from "./MyProjects/MyProjects";
import Experience from "./WorkExperience/WorkExperience";
import { MainContentWrapper } from "./MainContent.styled";

const MainContent = ({ profession, name, description }) => (
  <MainContentWrapper>
    <MyInfo profession={profession} name={name} description={description} />
    <Projects />
    <Experience />
  </MainContentWrapper>
);

export default MainContent;
