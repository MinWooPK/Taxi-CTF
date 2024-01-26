import styled, { keyframes } from "styled-components";

export const InputForm = styled.input`
  height: 70px;
  padding: 0 30px;
  width: 100%;
  font-size: 1rem;
  background: #fff;
  border-bottom: 0.3rem solid #ffc61a !important;
  border-radius: 23rem;
  border: none;
  color: #1a1a1a;
  display: block;
  transition: all 0.3s;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const DivSection = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
export const SubmitForm = styled.button`
  max-width: 100%;
  height: 70px;
  padding: 0 30px;
  background: #fff;
  border-bottom: 0.3rem solid #ffc61a !important;
  border-radius: 23rem;
  font-size: 1rem;
  border: none;
  color: #1a1a1a;
  width: 100%;
  display: block;
  transition: all 0.3s;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const FormMain = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 2rem 9rem 5rem;
  @media (max-width: 768px) {
    padding: 2rem 5rem 5rem;
  }
  @media (max-width: 425px) {
    padding: 2rem 2rem 5rem;
  }
`;

export const DivFormMain = styled.div`
  width: 100%;
`;

export const RequireForm = styled.div`
  color: #dc3232;
  font-size: 1em;
  font-weight: normal;
  text-align: center;
  margin-top: 5px;
`;

export const RequireFormSend = styled.div`
  color: #dc3232;
  font-size: 1em;
  font-weight: normal;
  text-align: center;
  margin-top: 5px;
  border-top: 1px solid #dc3232;
  border-bottom: 1px solid #dc3232;
`;
