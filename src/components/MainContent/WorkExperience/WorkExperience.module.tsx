import styled from "styled-components";

export const MyProjectsContainer = styled.div`
  margin-bottom: 40px;
  margin-top: 50px;
  position: relative;

  &::before {
    content: "経験"; // "Опыт" по-японски
    position: absolute;
    top: -20px;
    right: 15px;
    font-family: 'Ma Shan Zheng', cursive;
    color: rgba(193, 42, 42, 0.1);
    font-size: 80px;
    z-index: 0;
  }
`;

export const MyProjectsContainerName = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: var(--ink-black);
  margin-bottom: 10px;
  position: relative;
  padding-bottom: 10px;
  font-family: 'Ma Shan Zheng', cursive;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(to right, var(--primary-red), var(--soft-pink));
  }
`;

export const WordExperienceContainer = styled.div`
  margin-bottom: 20px;
  background: rgba(248, 248, 248, 0.9);
  padding: 20px;
  border-left: 3px solid var(--primary-red);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, var(--primary-red), var(--soft-pink));
  }
`;

export const WorkExperienH4 = styled.h4`
  font-weight: 700;
  font-size: 20px;
  color: var(--ink-black);
  margin-bottom: 10px;
  font-family: 'Ma Shan Zheng', cursive;
`;

export const WorkExperienTime = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: var(--dark-charcoal);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-style: italic;
`;

export const WorkExperionseSeparator = styled.span`
  color: var(--primary-red);
  font-weight: bold;
`;

export const WorkExperionseList = styled.ul`
  padding-left: 20px;
`;

export const WorkExperionseItems = styled.li`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: var(--ink-black);
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;

  &::before {
    content: "•";
    color: var(--primary-red);
    position: absolute;
    left: 0;
    font-size: 20px;
  }
`;