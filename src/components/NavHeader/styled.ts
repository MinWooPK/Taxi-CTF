import styled, { keyframes } from "styled-components";

export const Navbar = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  /* padding: 0.5rem 1rem; */
  height: 114px;
  top: -20px;
  left: 0;
  z-index: 5;
  position: fixed;
  background-color: black;
  width: 100%;
  @media (max-width: 768px) {
    flex-flow: row nowrap;
  }
`;
export const ContainerNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;
export const LogoContainer = styled.div`
  margin: auto;
  /* padding: 22px 0; */
`;
export const LogoImg = styled.img`
  width: 205.5px;
  height: 75px;
  @media (max-width: 768px) {
    height: 50px;
    width: 137px;
  }
`;
export const Logo = styled.a`
  display: inline-block;
`;

export const SiteMenu = styled.div`
  margin: 0 auto;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StieMenuUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StieMenuLi = styled.li`
  cursor: pointer;
  display: inline-block;
  margin: 0;
  padding: 0 12px;
  font-weight: 700;
  list-style: none;
  transition: all 0.35s ease-in-out;
`;

export const StieMenuHref = styled.a`
  color: #fff;
  font-size: 18px;
  letter-spacing: 0;
  position: relative;
  text-decoration: none; /* Para quitar el subrayado predeterminado */
  overflow: hidden;
  display: inline-block;
  padding-bottom: 3px;
  &:hover {
    color: #ffc61a;
  }

  &:before,
  &:after {
    content: attr(data-hover);
    position: absolute;
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
  }

  &:before {
    height: 3px;
    width: 100%;
    background-color: #ffc61a;
    bottom: -1px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.35s ease;
  }

  &:hover:before {
    transform-origin: left;
    transform: scaleX(1);
  }

  &:after {
    top: 0;
    left: 0;
    padding: 0.5em 0;
    max-width: 0%;
    transition: max-width 0.35s ease;
  }

  &:hover:after {
    max-width: 100%;
  }
`;

export const HamburgerMenu = styled.div`
  width: 30px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  cursor: pointer;
  /* margin: auto; */
  &:hover span:nth-child(2) {
    width: 100%;
  }
  & span:nth-child(1) {
    top: 0px;
    width: 100%;
  }
  & span:nth-child(2) {
    top: 9px;
    width: 22px;
  }
  & span:nth-child(3) {
    top: 18px;
    width: 100%;
  }

  &.open span:nth-child(1) {
    top: 9px;
    right: 0;
    transform: rotate(135deg);
    width: 28px !important;
  }

  &.open span:nth-child(3) {
    top: 9px;
    right: 0;
    transform: rotate(-135deg);
    width: 28px !important;
  }

  &.open span:nth-child(2) {
    opacity: 0;
    left: -20px;
  }
`;

export const Bar = styled.span`
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #ffc61a;
  opacity: 1;
  left: 0;
  top: 0;
  transform: rotate(0deg);
  transition: width 0.3s ease;
`;

export const NavbarButton = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 30px;
  color: #ffc61a;
  height: 64px;
  line-height: 64px;
  padding: 0 21px;
  position: relative;
  font-size: 17px;
  font-weight: 600;
  border-radius: 3rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavBlack = styled.div<{ visible?: boolean }>`
  background-color: #ffc61a;
  width: 60%;
  max-width: 480px;
  min-width: 260px;
  position: fixed;
  top: 0;
  left: 0; // Cambiado a 0
  z-index: 1000;
  height: 100vh;
  transform: translateX(${(props) => (props.visible ? "-100%" : "0%")});
  transition: transform 0.3s ease-in-out;
`;

export const NavRed = styled.div<{ visible?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  background-color: black;
  width: 95%;
  gap: 2rem;
  transition-delay: 0.2s;
  position: fixed;
  top: 0;
  left: 0; // Cambiado a 0
  z-index: 1000;
  height: 100vh;
  transform: translateX(${(props) => (props.visible ? "-100%" : "0%")});
  transition: transform 1.3s ease-in-out;
`;

export const SideBarTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  color: #ffc61a;
`;

export const IconCircle = styled.div`
  background-color: #ffc61a;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 91px;
  border-radius: 23rem;
`;

export const IconDescription = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export const CopyRightDescription = styled.p`
  color: #ffc61a;
  font-size: 16px;
  font-weight: 600;
  margin: auto;
  text-align: center;
`;

export const MobileUlDiv = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: auto;
`;
