import styled from "styled-components";

/**
 * Контейнер секции проектов
 */
export const MyProjects = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(248, 248, 248, 0.9);
  border-top: 3px solid var(--primary-red);
  position: relative;

  &::before {
    content: "プロジェクト"; // "Проекты" по-японски
    position: absolute;
    top: 10px;
    right: 15px;
    font-family: "Ma Shan Zheng", cursive;
    color: rgba(193, 42, 42, 0.1);
    font-size: 60px;
    z-index: 0;
  }
`;

/**
 * Заголовок названия проекта
 */
export const ProjName = styled.h3`
  font-size: 24px;
  color: var(--ink-black);
  margin-bottom: 15px;
  font-family: "Ma Shan Zheng", cursive;
  position: relative;
  z-index: 1;
  padding-bottom: 5px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: var(--primary-red);
  }
`;

/**
 * Список проектов без стандартных маркеров
 */
export const MyProjectsList = styled.ol`
  list-style-type: none;
  padding-left: 0;
  counter-reset: project-counter;
`;

/**
 * Элемент проекта с порядковым номером
 */
export const ProjectItem = styled.li`
  margin-bottom: 25px;
  padding-left: 30px;
  position: relative;
  counter-increment: project-counter;

  &::before {
    content: counter(project-counter);
    position: absolute;
    left: 0;
    top: 0;
    color: var(--primary-white);
    background: var(--primary-red);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
  }
`;

/**
 * Заголовок проекта, интерактивный
 */
export const ProjectItemTitle = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: var(--primary-red);
  display: block;
  margin-bottom: 5px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: var(--accent-red);
  }
`;

/**
 * Технологии проекта (стилизованная подпись)
 */
export const ProjectItemTech = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: var(--dark-charcoal);
  margin-bottom: 5px;
  display: block;
  font-style: italic;
`;

/**
 * Список деталей проекта
 */
export const ProjectDetails = styled.ul`
  padding-left: 20px;
  margin-top: 10px;

  li {
    position: relative;
    padding-left: 15px;
    margin-bottom: 5px;
    line-height: 1.5;
    color: var(--ink-black);

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 8px;
      width: 6px;
      height: 6px;
      background: var(--soft-pink);
      border-radius: 50%;
    }
  }
`;
