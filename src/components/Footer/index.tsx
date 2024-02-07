import { Link } from "react-router-dom";
import {
  FooterTaxi,
  FooterCopyRightDetailDescription,
  FooterCopyRightDetail,
  LinkBar,
  LinkLi,
  FooterTaxiContainer,
  FooterTaxiContainerLeft,
  FooterTaxiContainerRight,
  FooterTaxiContainerLeftFrist,
  FooterTaxiContainerLeftSecond,
  FooterTaxiContainerLeftThird,
  FooterTaxiImg,
  FooterTaxiP,
  FooterTaxiIconA,
  FooterTaxiContainerLeftLi,
  FooterTaxiContainerRightTitle,
  FooterTaxiContainerRightLi,
} from "./style";

import Logo from "../../assets/img/logo-taxin1.png";
import Phone from "../../assets/svg/Phone";
import Email from "../../assets/svg/email";
import WorldTaxi from "../../assets/svg/WorldTaxi";
import Facebook from "../../assets/svg/Facebook";
import Instagram from "../../assets/svg/Instagram";
const links = [
  { text: "Inicio", url: "/" },
  { text: "Servicios", url: "/service" },
  { text: "Portfolio", url: "/portfolio" },
  { text: "Contact Us", url: "/FormularioPresupuesto" },
  { text: "About Us", url: "/carreras" },
  { text: "Politica de cookies", url: "/PoliticaDeCookies" },
];

const footerDescriptions = [
  "© 2023 Todos los derechos reservados",
  "Diseño y desarrollo CTF - Codetofit",
];

function Footer() {
  return (
    <FooterTaxi>
      <FooterTaxiContainer>
        <FooterTaxiContainerLeft>
          <FooterTaxiContainerLeftFrist>
            <FooterTaxiImg src={Logo} alt="" />
          </FooterTaxiContainerLeftFrist>{" "}
          <FooterTaxiContainerLeftSecond>
            <FooterTaxiP>
              <FooterTaxiIconA />
              <WorldTaxi />
              Bilbao. Pais Vasco
            </FooterTaxiP>{" "}
            <FooterTaxiP>
              <FooterTaxiIconA />
              <Phone />
              +34 633 556 379
            </FooterTaxiP>
            <FooterTaxiP>
              <FooterTaxiIconA />
              <Email />
              email@email.com
            </FooterTaxiP>
          </FooterTaxiContainerLeftSecond>
          <FooterTaxiContainerLeftThird>
            <FooterTaxiContainerLeftLi>
              <Facebook />
            </FooterTaxiContainerLeftLi>
            <FooterTaxiContainerLeftLi>
              <Instagram />
            </FooterTaxiContainerLeftLi>
          </FooterTaxiContainerLeftThird>
        </FooterTaxiContainerLeft>
        <FooterTaxiContainerRight>
          <FooterTaxiContainerRightTitle>
            Servicios
            <FooterTaxiContainerRightLi>
              Traslado Interurbano
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi>
              Traslado Del Aeropuerto
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi>
              Traslado Hospitalario
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi>
              Traslado De Equipaje
            </FooterTaxiContainerRightLi>
          </FooterTaxiContainerRightTitle>
          <FooterTaxiContainerRightTitle>
            Tarifas Especiales
            <FooterTaxiContainerRightLi>
              Transporte Privado
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi>Aeropuerto</FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi>
              Servicio Empresa
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi>Colectivo </FooterTaxiContainerRightLi>
          </FooterTaxiContainerRightTitle>
          <FooterTaxiContainerRightTitle>
            Seccion
            <FooterTaxiContainerRightLi href="/">
              Home
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi href="/GetTaxi">
              Get Taxi
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi href="/AboutUs">
              Sobre Nosotros
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi href="/Servicios">
              Services
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi href="/Tariffs">
              Tarifas
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi href="/Contact">
              Contacto
            </FooterTaxiContainerRightLi>
          </FooterTaxiContainerRightTitle>
        </FooterTaxiContainerRight>
      </FooterTaxiContainer>
      <FooterCopyRightDetail>
        {footerDescriptions.map((description, index) => (
          <FooterCopyRightDetailDescription key={index}>
            {description}
          </FooterCopyRightDetailDescription>
        ))}
      </FooterCopyRightDetail>
    </FooterTaxi>
  );
}

export default Footer;
