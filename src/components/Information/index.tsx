import {
  ImgDivider,
  ImgInformation,
  ImgInformationCirlce,
  InformationContainer,
  InformationContainerDefinition,
  InformationContainerDefinitionH2,
  InformationContainerDefinitionP,
  InformationContainerImg,
  InformationSection,
  TitleContainer,
} from "./styled";

import MercedezFront from "../../assets/img/MercedezFront.png";
import CircleTaxi from "../../assets/img/circle-taxi.png";
import ConfortyIcon from "../../assets/img/Confort.png";
import SafetyIcon from "../../assets/img/Safety.png";
import EfficacyIcon from "../../assets/img/Efficiency.png";
import Divider from "../../assets/img/divider.jpg";
import InformationDetail from "./InformationDetail";

const Information = () => {
  return (
    <InformationSection>
      <InformationContainer>
        <InformationContainerImg>
          <ImgInformationCirlce src={CircleTaxi} />
          <ImgInformation src={MercedezFront} alt="" />
        </InformationContainerImg>
        <InformationContainerDefinition>
          <TitleContainer>
            <InformationContainerDefinitionH2>
              ¿Necesitas transporte?
            </InformationContainerDefinitionH2>
            <InformationContainerDefinitionP>
              Siempre estamos listos para sus viajes urgentes con nuestros años
              de experiencia y conductores expertos.
            </InformationContainerDefinitionP>
            <ImgDivider src={Divider} />
          </TitleContainer>
          <InformationDetail
            img={SafetyIcon}
            title={"Seguridad"}
            definition={
              " Nuestro enfoque en la seguridad garantiza una experiencia tranquila en cada trayecto."
            }
          />
          <InformationDetail
            img={ConfortyIcon}
            title={"Comodidad"}
            definition={
              "Rapidez asegurada con nuestro conductor experto. Experimente la comodidad en cada viaje "
            }
          />
          <InformationDetail
            img={EfficacyIcon}
            title={"Eficacia"}
            definition={
              "Gracias a nuestros expertos conductores, nos aseguramos de que llegue rápidamente a su destino."
            }
          />
        </InformationContainerDefinition>
      </InformationContainer>
    </InformationSection>
  );
};

export default Information;
