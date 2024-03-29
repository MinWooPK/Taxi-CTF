import styled, { keyframes } from "styled-components";
import Street from "../../assets/img/Street.jpeg";

export const FirstContainer = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  display: flex;
  background-image: url(${Street});
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
