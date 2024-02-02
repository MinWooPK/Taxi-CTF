import FormPhone from "../FormPhone";
import {
  ElectionServiceSection,
  FormHome,
  MainImgDiv,
  MainImgElectionService,
} from "./style";
import MercedezMain from "../../assets/img/Mercedez.png";

const ElectionService = () => {
  return (
    <>
      <ElectionServiceSection>
        <MainImgDiv>
          <MainImgElectionService src={MercedezMain} />
        </MainImgDiv>
        <FormHome>
          <FormPhone></FormPhone>
        </FormHome>
      </ElectionServiceSection>
    </>
  );
};

export default ElectionService;
