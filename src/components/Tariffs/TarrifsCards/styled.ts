import styled from "styled-components";

export const TariffsCard = styled.div`
  cursor: pointer;
  height: auto;
  border-radius: 0.3rem;
  position: relative;
  background-color: white;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  border: 3px solid #ffc61a;
  transition: transform 0.3s ease;
  &:hover {
    transform: perspective(300px) rotateX(-2.65deg) rotateY(-0.37deg)
      scale3d(1, 1, 1);
  }
`;
export const TariffsCardTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: auto;
  box-shadow: none;
  padding: 3rem 2rem 6.5rem;
  background-image: linear-gradient(to right bottom, #000000, #000000);
  transition: all 0.8s ease;
  width: 100%;
  border-radius: 0.3rem;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
`;
export const TariffsCardH3 = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
`;
export const TariffsCardTopP = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
`;

export const TariffsCardBottom = styled.div`
  background-image: linear-gradient(to right bottom, #000000, #000000);
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  padding: 5rem 4rem 4rem 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const TariffsCardBottomPrice = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
`;

export const ButtonGet = styled.button`
  background: #ffc61a;
  color: #000000;
  border: none;
  padding: 0 40px;
  position: relative;
  border-radius: 23rem;
  font-size: 16px;
  height: 70px;
  line-height: 70px;
  display: inline-block;
`;
