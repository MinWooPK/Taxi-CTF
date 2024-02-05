import styled, { keyframes } from "styled-components";
import BeachHome from "../../assets/img/Beach.jpg";

export const FirstContainer = styled.section`
  background-color: rgba(0, 0, 0, 0.8);
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
