import styled from "styled-components";

export const TariffsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;
export const TariffsTitle = styled.div`
  max-height: 160px;
`;
export const TariffsH2 = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;
export const TariffsP = styled.p`
  color: #212529;
  font-size: 16px;
  font-weight: 400;
`;
export const TariffsElection = styled.div`
  width: 100%;
  display: flex;
  gap: 4rem;
  padding-top: 5rem;
  justify-content: center;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
