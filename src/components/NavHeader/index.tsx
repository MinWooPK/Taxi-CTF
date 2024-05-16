import {
  Bar,
  ContainerNavbar,
  CopyRightDescription,
  HamburgerMenu,
  IconCircle,
  IconDescription,
  Logo,
  LogoContainer,
  MobileUlDiv,
  NavBlack,
  NavRed,
  Navbar,
  SideBarTitle,
  SiteMenu,
  StieMenuHref,
  StieMenuLi,
  LogoContainerText,
  LogoContainerFirstP,
  LogoContainerSecondP,
} from "./styled";

import LogoTaxi from "../../assets/img/loader-taxin.png";
import { useEffect, useState } from "react";
import Call from "../../assets/svg/call";
import Map from "../../assets/svg/map";
import EmailBlack from "../../assets/svg/emailBlack";

const NavHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState<boolean>(true);
  const [isDesktop, setIsDestkop] = useState(window.innerWidth > 1020);

  useEffect(() => {
    const handleResize = () => {
      setIsDestkop(window.innerWidth > 1020);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setNavVisible(!navVisible);
  };
  return (
    <Navbar>
      <ContainerNavbar>
        <LogoContainer>
          <Logo href="/">
            {/* <img src={LogoTaxi} alt="Logo" width="90" height="75" /> */}
            <LogoContainerText>
              <LogoContainerFirstP>Taxi Zumaia Santa</LogoContainerFirstP>
              <LogoContainerSecondP> Servicios de Taxi</LogoContainerSecondP>
            </LogoContainerText>
          </Logo>
        </LogoContainer>
        <SiteMenu>
          <StieMenuLi>
            <StieMenuHref href="/">Inicio</StieMenuHref>
          </StieMenuLi>
          <StieMenuLi>
            <StieMenuHref href="/GetTaxi">Pedir Taxi</StieMenuHref>
          </StieMenuLi>
          <StieMenuLi>
            <StieMenuHref href="/Info">Información</StieMenuHref>
          </StieMenuLi>
          <StieMenuLi>
            <StieMenuHref href="/Servicios">Servicios</StieMenuHref>
          </StieMenuLi>
          <StieMenuLi>
            <StieMenuHref href="/Tariffs">Tarifas</StieMenuHref>
          </StieMenuLi>
          <StieMenuLi>
            <StieMenuHref href="/Contact">Contacto</StieMenuHref>
          </StieMenuLi>
        </SiteMenu>
        <HamburgerMenu
          className={isMenuOpen ? "open" : ""}
          onClick={toggleMenu}
        >
          <Bar />
          <Bar />
          <Bar />
        </HamburgerMenu>
        <NavBlack className="nav-black" visiblenav={navVisible}>
          <NavRed className="nav-red" visiblenav={navVisible}>
            <Logo href="/">
              <img src={LogoTaxi} alt="Logo" width="179" height="159" />
            </Logo>
            {isDesktop ? (
              <>
                <SideBarTitle> Informacion Contacto </SideBarTitle>
                <IconCircle>
                  <Call />
                </IconCircle>
                <IconDescription>+34 623 56 56 14</IconDescription>
                <IconCircle>
                  <EmailBlack />
                </IconCircle>
                <IconDescription>
                  juancarlos.blazquezv@gmail.com
                </IconDescription>
                <IconCircle>
                  <Map />
                </IconCircle>
                <IconDescription>Gipuzkoa - Euskadi</IconDescription>
              </>
            ) : (
              <MobileUlDiv>
                <StieMenuLi>
                  <StieMenuHref href="/">Inicio</StieMenuHref>
                </StieMenuLi>
                <StieMenuLi>
                  <StieMenuHref href="/GetTaxi">Pedir Taxi</StieMenuHref>
                </StieMenuLi>
                <StieMenuLi>
                  <StieMenuHref href="/Info">Información</StieMenuHref>
                </StieMenuLi>
                <StieMenuLi>
                  <StieMenuHref href="/Servicios">Servicos</StieMenuHref>
                </StieMenuLi>
                <StieMenuLi>
                  <StieMenuHref href="/Tariffs">Tarifas</StieMenuHref>
                </StieMenuLi>
                <StieMenuLi>
                  <StieMenuHref href="/Contact">Contacto</StieMenuHref>
                </StieMenuLi>
              </MobileUlDiv>
            )}
            <CopyRightDescription>
              © 2024 Taxin - All Rights Reserved.
            </CopyRightDescription>
          </NavRed>
        </NavBlack>
      </ContainerNavbar>
    </Navbar>
  );
};

export default NavHeader;
