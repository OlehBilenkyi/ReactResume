import styled from "styled-components";

export const EducationContainer = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(248, 248, 248, 0.9);
  border-left: 4px solid var(--primary-red);
  position: relative;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);

  &::before {
    content: "学歴"; // "Образование" по-японски
    position: absolute;
    top: 10px;
    right: 15px;
    font-family: "Ma Shan Zheng", cursive;
    color: rgba(193, 42, 42, 0.1);
    font-size: 70px;
    z-index: 0;
  }
`;

export const EducationTitle = styled.h4`
  font-weight: 700;
  font-size: 22px;
  color: var(--ink-black);
  margin-bottom: 15px;
  font-family: "Ma Shan Zheng", cursive;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--primary-red);
  }
`;

export const NameEducation = styled.h5`
  font-weight: 700;
  font-size: 18px;
  color: var(--primary-red);
  margin-bottom: 8px;
  position: relative;
  display: inline-block;

  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: var(--accent-red);
    }
  }

  &::before {
    content: "•";
    margin-right: 8px;
    color: var(--soft-pink);
  }
`;

export const EducationDip = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: var(--ink-black);
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--soft-pink);
  }
`;

export const WorkExperienceTime = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: var(--dark-charcoal);
  margin-bottom: 10px;
  padding-left: 20px;
  font-style: italic;
`;

export const WorkExperienceList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 15px;
`;

export const WorkExperienceItem = styled.li`
  font-weight: 400;
  font-size: 15px;
  color: var(--ink-black);
  margin-bottom: 8px;
  padding-left: 25px;
  position: relative;
  line-height: 1.5;

  &::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--primary-red);
  }
`;

export const WorkExperienceTimeClass = styled(WorkExperienceTime)`
  border-top: 1px dashed var(--soft-pink);
  padding-top: 8px;
`;
