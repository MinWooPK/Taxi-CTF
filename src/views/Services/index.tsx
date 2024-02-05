import Information from "../../components/Information";
import OurServices from "../../components/OurServices";
import Tariffs from "../../components/Tariffs";
import TitleContainer from "../../components/TitleContainer";
import { FirstContainer } from "./style";

const ServicesPage = () => {
  return (
    <>
      <FirstContainer>
        <TitleContainer subTitleText={"Servicios"} titleText={"Servicios"} />
      </FirstContainer>
      <OurServices />
      <Tariffs />
    </>
  );
};

export default ServicesPage;
