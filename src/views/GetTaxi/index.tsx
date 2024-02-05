import ElectionService from "../../components/ElectionService";
import Tariffs from "../../components/Tariffs";
import TitleContainer from "../../components/TitleContainer";
import { FirstContainer } from "./style";

const GetTaxiPage = () => {
  return (
    <>
      <FirstContainer>
        <TitleContainer subTitleText={"Get Taxi"} titleText={"Get Taxi"} />
      </FirstContainer>
      <ElectionService></ElectionService>
      <Tariffs></Tariffs>
    </>
  );
};

export default GetTaxiPage;
