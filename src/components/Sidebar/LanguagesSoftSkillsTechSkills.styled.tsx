import styled from "styled-components";

export const SkillsContainer = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid var(--primary-red);
  position: relative;
  overflow: hidden;

  &::before {
    content: "知識";
    position: absolute;
    top: 10px;
    right: 20px;
    font-family: "Ma Shan Zheng", cursive;
    color: rgba(255, 0, 0, 0.05);
    font-size: 64px;
    z-index: 0;
  }
`;

export const SkillsTitle = styled.h3`
  color: var(--primary-red);
  font-family: "Ma Shan Zheng", cursive;
  font-size: 24px;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 2px;
    background: var(--soft-pink);
  }
`;

export const SkillsList = styled.ul`
  padding-left: 20px;
  position: relative;
  z-index: 1;
`;

export const SkillsListItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  color: var(--primary-white);
  margin-bottom: 10px;
  line-height: 1.7;
  position: relative;

  &::marker {
    color: var(--primary-red);
  }
`;

export const ContactsTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: var(--primary-white);
  margin-right: 10px;
`;

export const ContactsLinks = styled.a`
  text-decoration: none;
  color: var(--soft-pink);
  font-weight: 600;
  font-size: 14px;
  position: relative;
  padding-bottom: 2px;
  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--primary-red);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--primary-white);

    &::after {
      width: 100%;
    }
  }
`;
