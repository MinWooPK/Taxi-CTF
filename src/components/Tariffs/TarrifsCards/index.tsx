import {
  ButtonGet,
  TariffsCard,
  TariffsCardBottom,
  TariffsCardBottomPrice,
  TariffsCardH3,
  TariffsCardTop,
  TariffsCardTopP,
} from "./styled";

const TariffsCards = () => {
  return (
    <TariffsCard>
      <TariffsCardTop>
        <TariffsCardH3>Colectivo</TariffsCardH3>
        <TariffsCardTopP>
          En Este Metodo sera el tranporte colectivo
        </TariffsCardTopP>
      </TariffsCardTop>
      <TariffsCardBottom>
        <TariffsCardH3>Colectivo</TariffsCardH3>
        <TariffsCardBottomPrice>13€ /Km</TariffsCardBottomPrice>
        <ButtonGet>Get Taxi</ButtonGet>
      </TariffsCardBottom>
    </TariffsCard>
  );
};

export default TariffsCards;
