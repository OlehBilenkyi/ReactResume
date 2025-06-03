import styled from "styled-components";

// Container for the entire experience section
export const ExperienceContainer = styled.div`
  margin-bottom: 30px;
`;

// Title for the experience section
export const ExperienceTitle = styled.h2`
  background-color: #066;
  color: #fff;
  padding: 8px 15px;
  margin-bottom: 15px;
  font-size: clamp(1.1rem, 0.9rem + 0.6vw, 1.4rem);
  font-weight: 600;
  border-radius: 3px;
`;

// Container for each experience item
export const ExperienceItem = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 25px;
  padding-left: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`;

// Timeline styling
export const Timeline = styled.div`
  position: absolute;
  left: 0;
  top: 5px;
  height: 100%;
  width: 2px;
`;

// Timeline dot styling
export const TimelineDot = styled.span`
  position: absolute;
  left: -5px;
  top: 0;
  width: 12px;
  height: 12px;
  background-color: teal;
  border-radius: 50%;
  border: 2px solid #f4f4f4;
`;

// Timeline line styling
export const TimelineLine = styled.span`
  position: absolute;
  left: 0;
  top: 12px;
  bottom: -10px;
  width: 2px;
  background-color: #ccc;
`;

// Content container for each experience item
export const ExperienceContent = styled.div`
  flex-grow: 1;
`;

// Dates styling
export const Dates = styled.p`
  font-size: 0.9em;
  margin-bottom: 5px;
`;

// Company name styling
export const Company = styled.h3`
  font-weight: 600;
  font-size: 1.1em;
  margin-bottom: 3px;
`;

// Job title styling
export const JobTitle = styled.h4`
  font-weight: 500;
  font-style: italic;
  margin-bottom: 8px;
  color: #555;
`;

// List styling
export const DetailsList = styled.ul`
  padding-left: 18px;
  list-style: disc;
  color: #444;
`;

// List item styling
export const ListItem = styled.li`
  margin-bottom: 8px;
  line-height: 1.4;
`;
