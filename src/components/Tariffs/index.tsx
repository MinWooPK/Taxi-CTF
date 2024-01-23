import TariffsIcon from "../../assets/svg/TariffsIcon";
import TariffsCards from "./TarrifsCards";
import { TariffsElection, TariffsH2, TariffsP, TariffsSection } from "./styled";

const Tariffs = () => {
  return (
    <TariffsSection>
      <TariffsIcon />
      <TariffsH2> Special Tariffs</TariffsH2>
      <TariffsP> Select tariffs plan to get more</TariffsP>
      <TariffsElection>
        <TariffsCards /> <TariffsCards /> <TariffsCards /> <TariffsCards />
      </TariffsElection>
    </TariffsSection>
  );
};

export default Tariffs;
