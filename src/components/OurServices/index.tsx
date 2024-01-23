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
        <InfoMainTopH2>Our Express Transportation Services</InfoMainTopH2>
        <InfoMainTopP>
          We are at your service immediately for your urgent transfer needs.
        </InfoMainTopP>
      </InfoMainTop>
      <InfoMainDown>
        <InfoMainDownContainer>
          <InfoMainDownContainerH3>Intercity Transfer</InfoMainDownContainerH3>
          <InfoMainDownContainerIconBox>
            <InfoMainDownContainerOrbit />
            <InfoMainDownContainerCircle>
              <RutaIcon />
            </InfoMainDownContainerCircle>
          </InfoMainDownContainerIconBox>
          <InfoMainDownContainerP>
            We enseure that you travel quickly and reliably for your intercity
            transfer.
          </InfoMainDownContainerP>
        </InfoMainDownContainer>
        <InfoMainDownContainer>
          <InfoMainDownContainerH3>Airport Transfer</InfoMainDownContainerH3>
          <InfoMainDownContainerIconBox>
            <InfoMainDownContainerOrbit />
            <InfoMainDownContainerCircle>
              <PlaneIcon />
            </InfoMainDownContainerCircle>
          </InfoMainDownContainerIconBox>
          <InfoMainDownContainerP>
            We provide fast and reliable travel for your emergency airport
            journeys.
          </InfoMainDownContainerP>
        </InfoMainDownContainer>
        <InfoMainDownContainer>
          <InfoMainDownContainerH3>Hospital Transfer</InfoMainDownContainerH3>
          <InfoMainDownContainerIconBox>
            <InfoMainDownContainerOrbit />
            <InfoMainDownContainerCircle>
              <HospitalIcon />
            </InfoMainDownContainerCircle>
          </InfoMainDownContainerIconBox>
          <InfoMainDownContainerP>
            Our drivers will deliver you quickly for your hospital needs.
          </InfoMainDownContainerP>
        </InfoMainDownContainer>
        <InfoMainDownContainer>
          <InfoMainDownContainerH3>
            Baggage Transportation
          </InfoMainDownContainerH3>
          <InfoMainDownContainerIconBox>
            <InfoMainDownContainerOrbit />
            <InfoMainDownContainerCircle>
              <BadgeIcon />
            </InfoMainDownContainerCircle>
          </InfoMainDownContainerIconBox>
          <InfoMainDownContainerP>
            We take the load off your back. Take advantage of our luggage
            service.
          </InfoMainDownContainerP>
        </InfoMainDownContainer>
      </InfoMainDown>
    </InfoTop>
  );
};

export default OurServices;
