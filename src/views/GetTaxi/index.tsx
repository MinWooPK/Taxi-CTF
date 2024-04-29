import ElectionService from "../../components/ElectionService";
import Tariffs from "../../components/Tariffs";
import TitleContainer from "../../components/TitleContainer";
import { FirstContainer } from "./style";

const GetTaxiPage = () => {
  return (
    <>
      <FirstContainer>
        <TitleContainer subTitleText={"Pedir Taxi"} titleText={"Pedir Taxi"} />
      </FirstContainer>
      <ElectionService></ElectionService>
      <Tariffs></Tariffs>
    </>
  );
};

export default GetTaxiPage;
