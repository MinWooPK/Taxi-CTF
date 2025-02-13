import styled, { keyframes } from "styled-components";
import BeachHome from "../../assets/img/Beach.jpg";

interface SlideProps {
  active: boolean;
}

interface ButtonProps {
  position: "left" | "right";
}

export const FirstContainer = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  display: flex;
  background-image: url(${BeachHome});
  background-size: cover;
  background-position: center;
  padding: 9rem 0 1rem;
  min-height: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    min-height: 680px;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  gap: 2rem;
  padding: 26px 15px 25px 15px;
`;

export const fade = keyframes`
  from { opacity: 0.4; }
  to { opacity: 1; }
`;

export const SlideshowContainer = styled.div`
  max-width: 500px;
  max-height: 332px;
  position: relative;
  margin: auto;
`;

export const Slide = styled.div<SlideProps>`
  display: ${({ active }) => (active ? "block" : "none")};
  animation: ${fade} 1.5s;
  position: relative;
`;

export const NumberText = styled.div`
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
`;

export const Caption = styled.div`
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
`;

export const Button = styled.a<ButtonProps>`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 3px;
  user-select: none;
  ${({ position }) => (position === "left" ? "left: 0;" : "right: 0;")}

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const DotsContainer = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const Dot = styled.span<SlideProps>`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: ${({ active }) => (active ? "#717171" : "#bbb")};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
`;
