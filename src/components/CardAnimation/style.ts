import styled from "styled-components";

export const CardAnimationBox = styled.div`
  height: 20rem;
  width: 300px;
  /* position: relative; */
  perspective: 150rem;
  cursor: pointer;
`;

export const CardAnimationFace = styled.div`
  background-color: #fff;
  padding: 26px 15px 25px 15px;
  height: 100%;
  border-radius: 3rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.8s ease;
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transform: rotateX(0);

  ${CardAnimationBox}:hover & {
    transform: rotateX(-180deg);
  }
`;
export const IconCircle = styled.div`
  background-color: #ffc61a;
  border-radius: 23rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 114px;
  height: 114px;
  border: 1px solid black;
`;
export const CardAnimationBack = styled.div`
  background-color: #ffffff;
  padding: 26px 15px 25px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
  border-radius: 3rem;
  transition: transform 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transform: rotateX(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;

  ${CardAnimationBox}:hover & {
    transform: rotateX(0);
  }
`;

export const CardAnimationTitle = styled.h3`
  font-size: 23px;
  text-align: center;
  font-weight: 700;
`;
export const CardAnimationDefinition = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #212529;
  text-align: center;
`;
