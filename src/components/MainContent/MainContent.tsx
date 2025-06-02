// MainContent.tsx
import React from "react";
import MyInfo from "./MyInfo/MyInfo";
import Projects from "./MyProjects/MyProjects";
import Experience from "./WorkExperience/WorkExperience";
import MyEducation from "./Education/Education";
import { MainContentWrapper } from "./MainContent.styled";

/**
 * @component MainContent
 * Основной лэйаут контента внутри страницы резюме/портфолио.
 * Используется в центральной части layout-а.
 *
 * @param {string} profession - Профессия или роль
 * @param {string} name - Имя пользователя
 * @param {string} description - Краткое описание
 */
interface MainContentProps {
  profession: string;
  name: string;
  description: string;
}

const MainContent = React.forwardRef<HTMLDivElement, MainContentProps>(
  ({ profession, name, description }, ref) => {
    return (
      <MainContentWrapper
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        ref={ref}
      >
        <MyInfo profession={profession} name={name} description={description} />
        <Experience />
        <Projects />
        <MyEducation />
        {/* 👉 Дополнительно можно вставить Skills, Certificates и т.д. */}
      </MainContentWrapper>
    );
  }
);

MainContent.displayName = "MainContent";

export default MainContent;
