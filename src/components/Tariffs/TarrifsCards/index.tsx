import {
  ButtonGet,
  TariffsCard,
  TariffsCardBottom,
  TariffsCardBottomPrice,
  TariffsCardH3,
  TariffsCardImg,
  TariffsCardTop,
  TariffsCardTopP,
} from "./styled";

import Company from "../../../assets/svg/Company";
import Airport from "../../../assets/svg/Airport";
import Group from "../../../assets/svg/Group";
import Individual from "../../../assets/svg/Individual";
import { ReactNode } from "react";
interface TariffsCardsProps {
  title: string;
  description: string;
  miniTitle: string;
  // price: string;
  icon: ReactNode;
}

const TariffsCards = ({
  title,
  description,
  miniTitle,
  // price,
  icon,
}: TariffsCardsProps) => {
  return (
    <TariffsCard>
      <TariffsCardTop>
        <TariffsCardImg>{icon}</TariffsCardImg>
        <TariffsCardH3>{title}</TariffsCardH3>
        <TariffsCardTopP>{description}</TariffsCardTopP>
      </TariffsCardTop>
      <TariffsCardBottom>
        <TariffsCardH3>{miniTitle}</TariffsCardH3>
        {/* <TariffsCardBottomPrice>{price}</TariffsCardBottomPrice> */}
        <ButtonGet href="/Contact">Contáctanos</ButtonGet>
      </TariffsCardBottom>
    </TariffsCard>
  );
};
export default TariffsCards;
