import styled, { css, keyframes } from "styled-components";

/**
 * Плавное появление блока опыта при монтировании
 */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px);}
  to { opacity: 1; transform: translateY(0);}
`;

/**
 * Контейнер всего блока опыта
 */
export const ExperienceSection = styled.section`
  margin: 50px 0 40px;
  position: relative;
  animation: ${fadeIn} 0.6s ease forwards;

  &::before {
    content: "経験"; /* "Опыт" по-японски */
    position: absolute;
    top: -30px;
    right: 15px;
    font-family: "Ma Shan Zheng", cursive;
    color: rgba(193, 42, 42, 0.1);
    font-size: 80px;
    z-index: 0;
    user-select: none;
  }
`;

/**
 * Заголовок секции опыта
 */
export const ExperienceTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: var(--ink-black);
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 12px;
  font-family: "Ma Shan Zheng", cursive;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, var(--primary-red), var(--soft-pink));
    border-radius: 3px;
  }
`;

/**
 * Общий контейнер одного блока опыта
 */
export const ExperienceCard = styled.article`
  margin-bottom: 30px;
  background: rgba(248, 248, 248, 0.9);
  padding: 20px 25px;
  border-left: 4px solid var(--primary-red);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12);
  position: relative;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.18);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(to right, var(--primary-red), var(--soft-pink));
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

/**
 * Заголовок позиции / роли
 */
export const ExperiencePosition = styled.h4`
  font-weight: 700;
  font-size: 20px;
  color: var(--ink-black);
  margin-bottom: 12px;
  font-family: "Ma Shan Zheng", cursive;
`;

/**
 * Временные рамки и локация
 */
export const ExperiencePeriod = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: var(--dark-charcoal);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-style: italic;
  user-select: none;
`;

/**
 * Вертикальный разделитель |
 */
export const Separator = styled.span`
  color: var(--primary-red);
  font-weight: bold;
  user-select: none;
`;

/**
 * Список обязанностей / достижений
 */
export const ExperienceList = styled.ul`
  padding-left: 24px;
  margin: 0;
`;

/**
 * Элемент списка с точкой и отступом
 */
export const ExperienceListItem = styled.li`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: var(--ink-black);
  margin-bottom: 10px;
  position: relative;
  padding-left: 22px;

  &::before {
    content: "•";
    color: var(--primary-red);
    position: absolute;
    left: 0;
    font-size: 20px;
    line-height: 1;
  }
`;
