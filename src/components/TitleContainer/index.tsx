import { MainTitle, SubTitle, TitleSection } from "./style";
interface TitleContainerProps {
  subTitleText: string;
  titleText: string;
}
const TitleContainer = ({ subTitleText, titleText }: TitleContainerProps) => {
  return (
    <TitleSection>
      <MainTitle>{titleText}</MainTitle>
      <SubTitle>
        Inicio {">"} {subTitleText}
      </SubTitle>
    </TitleSection>
  );
};
export default TitleContainer;
