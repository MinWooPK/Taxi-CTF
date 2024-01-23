import { Link } from "react-router-dom";
import {
  FooterCodeToFit,
  FooterDescription,
  FooterDetail,
  LinkBar,
  LinkLi,
} from "./style";

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
    <FooterCodeToFit>
      <FooterDetail>
        {footerDescriptions.map((description, index) => (
          <FooterDescription key={index}>{description}</FooterDescription>
        ))}
      </FooterDetail>
    </FooterCodeToFit>
  );
}

export default Footer;
