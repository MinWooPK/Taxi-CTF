import styled, { keyframes } from "styled-components";
import Donostia from "../../assets/img/Donostia.jpg";

export const FirstContainer = styled.section`
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  display: flex;
  background-image: url(${Donostia});
  background-size: cover;
  background-position: center;
  padding: 9rem 0 1rem;
  min-height: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    min-height: 580px;
  }
`;
export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-weight: 700;
  margin-top: 8rem;
`;
export const MainTitle = styled.div`
  font-size: 50px;
  line-height: 6.5rem;
`;
export const SubTitle = styled.div`
  font-size: 20px;
`;

export const ContactContainer = styled.section`
  background-color: white;
  padding: 2rem;
  @media (max-width: 430px) {
    padding: 1rem;
  }
`;
export const CardContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

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
export const InputFormText = styled.input`
  height: 200px;
  padding: 0 30px;
  width: 100%;
  font-size: 1rem;
  background: #fff;
  border-bottom: 0.3rem solid #ffc61a !important;
  border-radius: 2rem;
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
  &:hover {
    background-color: #737373;
    color: #ffc61a;
  }
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
    padding: 2rem 0rem 5rem;
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
export const RequireFormSendTrue = styled.div`
  color: #4d8f2a;
  font-size: 1em;
  font-weight: normal;
  text-align: center;
  margin-top: 5px;
  border-top: 1px solid #4d8f2a;
  border-bottom: 1px solid #4d8f2a;
`;
