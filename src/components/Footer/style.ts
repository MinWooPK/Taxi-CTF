import styled from "styled-components";

export const FooterCodeToFit = styled.footer`
  background-color: ${({ theme }) => theme.colors.principal.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  min-height: 200px;
  gap: 2rem;
`;

export const LinkBar = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const LinkLi = styled.li`
  color: ${({ theme }) => theme.colors.principal.grey};
  cursor: pointer;
`;

export const FooterDetail = styled.div`
  display: flex;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.principal.pure};
`;
export const FooterDescription = styled.p``;
