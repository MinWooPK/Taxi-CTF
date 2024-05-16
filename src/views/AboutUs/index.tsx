import CardAnimation from "../../components/CardAnimation";
import Information from "../../components/Information";
import TitleContainer from "../../components/TitleContainer";
import { CardContainer, FirstContainer } from "./style";
import Award from "../../assets/svg/Award";
import GoodHand from "../../assets/svg/GoodHand";
import TravelAbout from "../../assets/svg/TravelAbout";
import Support from "../../assets/svg/Support";
const AboutUsPage = () => {
  return (
    <>
      <FirstContainer>
        <TitleContainer
          subTitleText={"Información"}
          titleText={"Información"}
        />
      </FirstContainer>
      <Information />
      <CardContainer>
        <CardAnimation
          titleText={"Fiabilidad"}
          subTitleText={
            "Tu elección de confianza para cada viaje. Nuestros conductores expertos y tecnología de vanguardia garantizan llegadas puntuales sin excepción."
          }
          imgCard={<TravelAbout />}
        />
        <CardAnimation
          titleText={"Loyalty"}
          subTitleText={
            "Tu satisfacción es nuestra prioridad. Apreciamos tu elección y trabajamos incansablemente para ofrecerte la mejor experiencia en cada trayecto."
          }
          imgCard={<Award />}
        />
        <CardAnimation
          titleText={"Experiencia"}
          subTitleText={
            "Nuestros años de experiencia en la carretera aseguran un viaje cómodo, seguro y sin contratiempos."
          }
          imgCard={<GoodHand />}
        />
        {/* <CardAnimation
          titleText={"Soporte"}
          subTitleText={
            "Aceleramos sus procesos empresariales proporcionándole asistencia profesional. Resolvemos sus problemas y proporcionamos soluciones al instante."
          }
          imgCard={<Support />}
        /> */}
      </CardContainer>
    </>
  );
};

export default AboutUsPage;
