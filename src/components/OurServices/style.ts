import styled, { keyframes } from "styled-components";
const slideInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const InfoTop = styled.section`
  padding: 3rem 0 5rem;
  background-color: #000;
`;

export const InfoMainTop = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-bottom: 5rem;
  text-align: center;
`;

export const InfoMainTopH2 = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: #ffc61a;
  animation: ${slideInFromBottom} 0.4s ease-out 0.4s both;
`;

export const InfoMainTopP = styled.p`
  color: #ffffff;
  animation: ${slideInFromBottom} 0.4s ease-out 0.4s both;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
`;

export const InfoMainDown = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 3rem;
`;

export const InfoMainDownContainer = styled.div`
  /* margin-right: 3rem;
  width: calc((100% - 3 * 6rem) / 4);
  float: left; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 260px;
  gap: 4rem;
  text-align: center;
`;
export const InfoMainDownContainerH3 = styled.h3`
  color: #ffc61a;
`;

export const InfoMainDownContainerP = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
`;
export const InfoMainDownContainerCircle = styled.div`
  background-color: white;
  border-radius: 23rem;
  width: fit-content;
  padding: 1.7rem;
`;
export const InfoMainDownContainerOrbit = styled.span`
  position: absolute;
  width: 140px;
  height: 140px;
  /* left: -10px;
  top: -10px; */
  border: 2px solid #fff;
  border-radius: 50%;
  transition: all 500ms ease;
  &::before {
    position: absolute;
    content: "";
    background: #fff;
    width: 12px;
    height: 12px;
    left: 15px;
    bottom: 9px;
    border-radius: 50%;
  }
  &:hover {
    animation: ${rotateAnimation} 2s linear infinite; // Aplica la animación al hacer hover
  }
`;
export const InfoMainDownContainerIconBox = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
