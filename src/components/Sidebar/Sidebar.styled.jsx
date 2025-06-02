import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  background: linear-gradient(
    145deg,
    rgba(30, 41, 59, 0.85),
    rgba(15, 23, 42, 0.95)
  );
  width: 350px;
  padding: 60px 25px 40px;
  color: var(--color-text-primary, ${colors.textPrimary});
  position: sticky;
  top: 0;
  min-height: 100vh;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0 0 10px rgba(56, 189, 248, 0.2),
    0 12px 28px rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(56, 189, 248, 0.1);
  border-radius: 0 20px 20px 0;
  backdrop-filter: blur(12px);

  & > div {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    min-height: auto;
    border-radius: 0;
    box-shadow: none;

    & > div {
      margin-top: 30px;
      gap: 24px;
    }
  }
`;
