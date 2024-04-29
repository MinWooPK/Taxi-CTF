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
            "Proporcionamos servicios precisos, fiables y éticos con nuestro personal experto. Aplicamos los métodos más rápidos y fiables para su marca."
          }
          imgCard={<TravelAbout />}
        />
        <CardAnimation
          titleText={"Loyalty"}
          subTitleText={
            "Nuestro trabajo a largo plazo continúa hasta que el trabajo está terminado. Establecemos relaciones sólidas y duraderas con todas las empresas con las que trabajamos."
          }
          imgCard={<Award />}
        />
        <CardAnimation
          titleText={"Experiencia"}
          subTitleText={
            "Gracias a la experiencia adquirida a lo largo de los años, el especialista presta servicio con dispositivos de última tecnología."
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
