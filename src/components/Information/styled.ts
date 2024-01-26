import styled, { keyframes } from "styled-components";

const Spin = keyframes`
 
  100% {
       transform: rotate(360deg);
  }
`;

export const InformationSection = styled.section`
  padding: 4rem 2rem 5rem;
  background-color: #fff;
  @media (max-width: 1103px) {
    padding: 7rem 2rem 5rem;
  }
`;

export const InformationContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap;
  @media (max-width: 425px) {
    gap: 0;
  }
`;

export const InformationContainerImg = styled.div`
  visibility: visible;

  position: relative;
`;
export const ImgInformationCirlce = styled.img`
  max-width: 500px;
  position: absolute;
  top: 0;
  z-index: auto;
  top: -80px;
  left: -10px;
  animation: ${Spin} 15s linear infinite;
  @media (max-width: 700px) {
    max-width: 300px;
    top: -45px;
  }
  @media (max-width: 425px) {
    max-width: 240px;
    left: 30px;
  }
`;
export const ImgInformation = styled.img`
  max-width: 500px;
  position: relative;
  @media (max-width: 700px) {
    max-width: 300px;
  }
`;

export const InformationContainerDefinition = styled.div`
  max-width: 460px;
`;

export const InformationContainerDefinitionH2 = styled.h2`
  color: #212529;
  font-size: 30px;
  font-weight: 700;
`;

export const InformationContainerDefinitionP = styled.p`
  color: #212529;
  font-size: 16px;
  font-weight: 400;
`;

export const ImgDivider = styled.img`
  max-height: 15px;
  max-width: 120px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;
