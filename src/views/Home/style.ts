import styled, { keyframes } from "styled-components";
import VehiculoHome from "../../assets/img/VehiculoHome.jpg";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;
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

const Openclose = keyframes`
  
  0%, 100% {
    visibility: hidden;
    width: 0;
  }
  50% {
    visibility: visible;
    width: 320px;
  }`;

export const SliderTaxi = styled.section`
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: multiply;
  display: flex;
  background-image: url(${VehiculoHome});
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
export const SliderTaxiTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SliderTaxiP = styled.p`
  visibility: visible;
  animation: ${slideInFromBottom} 0.4s ease-out 0.4s both;
  font-size: 25px;
  font-weight: 700;

  color: #ffffff;
  text-align: center;
`;

export const StyledSliderTaxiH2 = styled.h2`
  visibility: visible;
  overflow: hidden;
  font-weight: 400;
  animation: ${Openclose} 6s infinite;
  font-size: 50px;
  text-align: center;
  color: #ffc61a;
  padding-top: 1rem;
`;

export const ElectionService = styled.section`
  background-color: #ffc61a;
  /* padding: 0.5rem 9rem 8rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainImgDiv = styled.div`
  max-height: 160px;
`;

export const MainImgElectionService = styled.img`
  margin-top: -300px;
  visibility: visible;
  animation-delay: 0.6s;
  width: 100%;
  max-width: 660px;
  animation: ${fadeIn} 1s ease-out 0.6s both;
`;

export const FormHome = styled.section`
  max-width: 126rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 2;
`;

export const ButtonCall = styled.button`
  font-size: 18px;
  padding: 10px 34px;
  background-color: transparent;
  cursor: pointer;
  color: #ffc61a;
  border: 2px solid #ffc61a;
  border-radius: 0.5rem;
  font-weight: 600;
  z-index: 4;
  min-width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-width: 265px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 198, 26, 0.2);
  }
`;
export const ButtonWhatssap = styled.button`
  font-size: 18px;
  min-width: 265px;
  padding: 10px 34px;

  cursor: pointer;
  font-weight: 600;
  color: white;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #25be3e;
  border: 2px solid #25be3e;
  justify-content: center;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  border-radius: 0.5rem;
  &:hover {
    background-color: rgba(37, 190, 62, 0.7);
    border-color: rgba(37, 190, 62, 0.1);
  }
`;
export const ButtonEmail = styled.button`
  font-size: 18px;
  z-index: 4;
  min-width: 265px;
  padding: 10px 34px;

  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: transparent;
  color: #ffc61a;
  border: 2px solid #ffc61a;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 0.5rem;
  &:hover {
    background-color: rgba(255, 198, 26, 0.2);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;
`;
