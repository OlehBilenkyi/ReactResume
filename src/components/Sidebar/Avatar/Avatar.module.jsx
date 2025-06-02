import styled from "styled-components";

export const AvatarWrapper = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  margin: 0 auto 40px auto;
  border-radius: 50%;
  background: #0f172a;
  box-shadow: 0 0 15px 5px rgba(56, 189, 248, 0.3);
  padding: 6px;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(56, 189, 248, 0.4),
      transparent 70%
    );
    filter: blur(8px);
    z-index: 0;
  }
`;

export const AvatarImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #1e293b;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.4);
  z-index: 1;
`;
