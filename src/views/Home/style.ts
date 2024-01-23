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
export const SliderTaxi = styled.section`
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: multiply;

  background-image: url(${VehiculoHome});
  background-size: cover;
  background-position: center;
  padding: 9rem 0 1rem;
  min-height: 380px;
  display: flex;
  flex-direction: column;
`;

export const SliderTaxiP = styled.p`
  visibility: visible;
  animation: ${slideInFromBottom} 0.4s ease-out 0.4s both;
  font-size: 25px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
`;

export const SliderTaxiH2 = styled.h2`
  visibility: visible;
  animation: ${slideInFromBottom} 0.4s ease-out 0.4s both;
  font-size: 50px;
  font-weight: 700;
  color: #ffc61a;
  text-align: center;
`;

export const ElectionService = styled.section`
  background-color: #ffc61a;
  padding: 0.5rem 9rem 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 425x) {
    padding: 0.5rem 2rem 8rem;
  }
`;

export const MainImgDiv = styled.div`
  max-height: 160px;
`;

export const MainImgElectionService = styled.img`
  margin-top: -350px;
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
