import {
  InfoMainDown,
  InfoMainDownContainer,
  InfoMainDownContainerCircle,
  InfoMainDownContainerH3,
  InfoMainDownContainerIconBox,
  InfoMainDownContainerOrbit,
  InfoMainDownContainerP,
  InfoMainTop,
  InfoMainTopH2,
  InfoMainTopP,
  InfoTop,
} from "./style";

import RutaIcon from "../../assets/svg/Ruta";
import HospitalIcon from "../../assets/svg/Hospital";
import PlaneIcon from "../../assets/svg/World";
import BadgeIcon from "../../assets/svg/Travel";

const OurServices = () => {
  return (
    <InfoTop>
      <InfoMainTop>
        <InfoMainTopH2>Nuestros Servicios De Transporte Urgente</InfoMainTopH2>
        <InfoMainTopP>
          Estamos a su servicio inmediatamente para sus necesidades urgentes de
          traslado.{" "}
        </InfoMainTopP>
      </InfoMainTop>
      <InfoMainDown>
        <InfoMainDownContainer>
          <InfoMainDownContainerH3>
            Traslado interurbano
          </InfoMainDownContainerH3>
          <InfoMainDownContainerIconBox>
            <InfoMainDownContainerOrbit />
            <InfoMainDownContainerCircle>
              <RutaIcon />
            </InfoMainDownContainerCircle>
          </InfoMainDownContainerIconBox>
          <InfoMainDownContainerP>
            Nos aseguramos de que su traslado interurbano sea rápido y fiable.
          </InfoMainDownContainerP>
        </InfoMainDownContainer>
        <InfoMainDownContainer>
          <InfoMainDownContainerH3>
            Traslado Del Aeropuerto
          </InfoMainDownContainerH3>
          <InfoMainDownContainerIconBox>
            <InfoMainDownContainerOrbit />
            <InfoMainDownContainerCircle>
              <PlaneIcon />
            </InfoMainDownContainerCircle>
          </InfoMainDownContainerIconBox>
          <InfoMainDownContainerP>
            Proporcionamos viajes rápidos y fiables para sus desplazamientos
          </InfoMainDownContainerP>
        </InfoMainDownContainer>
        <InfoMainDownContainer>
          <InfoMainDownContainerH3>
            Traslado Hospitalario
          </InfoMainDownContainerH3>
          <InfoMainDownContainerIconBox>
            <InfoMainDownContainerOrbit />
            <InfoMainDownContainerCircle>
              <HospitalIcon />
            </InfoMainDownContainerCircle>
          </InfoMainDownContainerIconBox>
          <InfoMainDownContainerP>
            Nuestros conductores le entregarán rápidamente para sus necesidades
            hospitalarias.
          </InfoMainDownContainerP>
        </InfoMainDownContainer>
        <InfoMainDownContainer>
          <InfoMainDownContainerH3>
            Transporte De Equipajes
          </InfoMainDownContainerH3>
          <InfoMainDownContainerIconBox>
            <InfoMainDownContainerOrbit />
            <InfoMainDownContainerCircle>
              <BadgeIcon />
            </InfoMainDownContainerCircle>
          </InfoMainDownContainerIconBox>
          <InfoMainDownContainerP>
            Le quitamos el peso de encima. Aproveche nuestro servicio equipaje.
          </InfoMainDownContainerP>
        </InfoMainDownContainer>
      </InfoMainDown>
    </InfoTop>
  );
};

export default OurServices;
