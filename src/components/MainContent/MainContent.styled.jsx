import styled from "styled-components";

export const MainContentWrapper = styled.div`
  padding: 40px 80px;
  flex: 1;
  position: relative;
  z-index: 2; // Чтобы контент был поверх красной линии
  margin-left: -2px; // Чтобы компенсировать ширину линии

  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    color: #ffffff;
  }

  h2 {
    font-size: 1.2rem;
    color: #ffffff;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  section {
    margin-bottom: 2rem;

    h3 {
      border-bottom: 1px solid #eee;
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
      color: #ffffff;
    }
  }
`;
