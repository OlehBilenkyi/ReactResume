import styled from "styled-components";
import { motion } from "framer-motion";

export const MainContentWrapper = styled(motion.div)`
  padding: 40px 18px 80px 30px;
  flex: 1;
  position: relative;
  z-index: 2;
  margin-left: -2px;
  background: rgba(248, 248, 248, 0.9);
  overflow: hidden;
  border-left: 1px solid var(--soft-pink);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: url("https://i.imgur.com/JQlq5kP.png") no-repeat;
    opacity: 0.05;
    z-index: -1;
  }

  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    color: var(--ink-black);
    font-family: "Ma Shan Zheng", cursive;
  }

  h2 {
    font-size: 1.2rem;
    color: var(--ink-black);
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-family: "Ma Shan Zheng", cursive;
  }

  section {
    margin-bottom: 2rem;

    h3 {
      border-bottom: 1px solid var(--soft-pink);
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
      color: var(--ink-black);
      font-family: "Ma Shan Zheng", cursive;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-family: "Ma Shan Zheng", cursive;
  color: var(--ink-black);
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 20px;

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
