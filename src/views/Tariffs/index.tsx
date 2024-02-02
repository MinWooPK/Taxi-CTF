import Tariffs from "../../components/Tariffs";
import { FirstContainer } from "./style";

const TariffsPage = () => {
  return (
    <>
      <FirstContainer>
        {/* <SliderTaxiTitle>
          <SliderTaxiP>¿ TE LLEVAMOS ? </SliderTaxiP>
          {texts.map((text, index) => (
            <StyledSliderTaxiH2
              key={index}
              style={{ display: index === showText ? "block" : "none" }}
            >
              {text}
            </StyledSliderTaxiH2>
          ))}asdfsd
        </SliderTaxiTitle>
        <ButtonContainer>
          <ButtonCall onClick={handleCall}>
            <PhoneIcon /> +34 633 556 379
          </ButtonCall>
          <ButtonWhatssap onClick={handleWhatsapp}>
            <WhatsAppIcon></WhatsAppIcon> WhatsApp
          </ButtonWhatssap>
          <ButtonEmail onClick={handleEmail}>
            <EmailIcon></EmailIcon>
            Email
          </ButtonEmail>
        </ButtonContainer> */}
      </FirstContainer>
      {/* <ElectionService>
        <MainImgDiv>
          <MainImgElectionService src={MercedezMain} />
        </MainImgDiv>
        <FormHome>
          <FormPhone></FormPhone>
        </FormHome>
      </ElectionService>
      <Information />
      <OurServices /> */}
      <Tariffs />
    </>
  );
};

export default TariffsPage;
