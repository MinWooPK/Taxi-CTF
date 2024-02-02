import {
  Bar,
  ContainerNavbar,
  CopyRightDescription,
  HamburgerMenu,
  IconCircle,
  IconDescription,
  Logo,
  LogoContainer,
  LogoImg,
  MobileUlDiv,
  NavBlack,
  NavRed,
  Navbar,
  NavbarButton,
  SideBarTitle,
  SiteMenu,
  StieMenuHref,
  StieMenuLi,
} from "./styled";

import LogoImgNav from "../../assets/img/logo-taxin1.png";
import LogoTaxi from "../../assets/img/loader-taxin.png";
import Phone from "../../assets/svg/Phone";
import { useEffect, useState } from "react";
import Call from "../../assets/svg/call";
import Email from "../../assets/svg/email";
import Map from "../../assets/svg/map";

const NavHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [isDesktop, setIsDestkop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDestkop(window.innerWidth > 768);
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
          <Logo href="#">
            <LogoImg src={LogoImgNav} alt="Logo" />
          </Logo>
        </LogoContainer>
        <SiteMenu>
          <StieMenuLi>
            <StieMenuHref href="/">Home</StieMenuHref>
          </StieMenuLi>
          <StieMenuLi>
            <StieMenuHref href="/GetTaxi">Get Taxi</StieMenuHref>
          </StieMenuLi>
          <StieMenuLi>
            <StieMenuHref href="/AboutUs">About Us</StieMenuHref>
          </StieMenuLi>
          <StieMenuLi>
            <StieMenuHref href="/Servicios">Services</StieMenuHref>
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
        <NavBlack className="nav-black" visible={navVisible}>
          <NavRed className="nav-red" visible={navVisible}>
            <Logo href="#">
              <img src={LogoTaxi} alt="Logo" width="179" height="159" />
            </Logo>
            {isDesktop ? (
              <>
                <SideBarTitle> Informacion Contacto </SideBarTitle>
                <IconCircle>
                  <Call />
                </IconCircle>
                <IconDescription>+34 603 18 44 31</IconDescription>
                <IconCircle>
                  <Email />
                </IconCircle>
                <IconDescription>taxi@example.com</IconDescription>
                <IconCircle>
                  <Map />
                </IconCircle>
                <IconDescription>
                  Calle Jose Ricardo -Pais Vasco
                </IconDescription>
              </>
            ) : (
              <MobileUlDiv>
                <StieMenuLi>
                  <StieMenuHref>Get Taxi</StieMenuHref>
                </StieMenuLi>
                <StieMenuLi>
                  <StieMenuHref>About Us</StieMenuHref>
                </StieMenuLi>
                <StieMenuLi>
                  <StieMenuHref>Services</StieMenuHref>
                </StieMenuLi>
                <StieMenuLi>
                  <StieMenuHref>Tarifas</StieMenuHref>
                </StieMenuLi>
                <StieMenuLi>
                  <StieMenuHref>Contacto</StieMenuHref>
                </StieMenuLi>
              </MobileUlDiv>
            )}
            <CopyRightDescription>
              © 2023 Taxin - All Rights Reserved.
            </CopyRightDescription>
          </NavRed>
        </NavBlack>
      </ContainerNavbar>
    </Navbar>
  );
};

export default NavHeader;
