import styled, { keyframes } from "styled-components";

export const TarifasUl = styled.ul`
  margin: 20px 0;
  padding: 0px;
  list-style: none;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

export const TarifaLi = styled.li`
  background: none;
  align-items: center;
  color: #5a5a5a;
  display: flex;
  flex-direction: column;
  padding: 6px 13px;
  cursor: pointer;
  font-weight: 600;
  border-bottom: 4px solid #ffffff;
  min-width: 270px;
  &.active {
    border-bottom-color: black; // Cambia el color del borde a azul cuando la clase active está presente
  }
`;

export const TarifaImg = styled.img`
  width: 146px;
  position: relative;
  top: 25px;
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
