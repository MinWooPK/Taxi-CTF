import {
  SliderTaxi,
  SliderTaxiP,
  SliderTaxiH2,
  ElectionService,
  MainImgElectionService,
  FormHome,
  MainImgDiv,
} from "./style";

import CochePrueba from "../../assets/img/CochePrueba.png";
import FormPhone from "../../components/FormPhone";
import OurServices from "../../components/OurServices";
import Tariffs from "../../components/Tariffs";

const Home = () => {
  return (
    <>
      <SliderTaxi>
        <SliderTaxiP>Llama a un taxi </SliderTaxiP>
        <SliderTaxiH2> +34 604 18 44 31</SliderTaxiH2>
      </SliderTaxi>
      <ElectionService>
        <MainImgDiv>
          <MainImgElectionService src={CochePrueba} />
        </MainImgDiv>
        <FormHome>
          <FormPhone></FormPhone>
        </FormHome>
      </ElectionService>
      <OurServices />
      <Tariffs />
    </>
  );
};

export default Home;
