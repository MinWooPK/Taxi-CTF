import {
  InformationContainerDefinitionH3,
  InformationContainerDefinitionImg,
  InformationContainerDefinitionImgContainer,
  InformationContainerDefinitionP,
  InformationDetailContainer,
  InformationDetailContainerText,
} from "./style";
interface InformationDetailProps {
  img: string;
  title: string;
  definition: string;
}
const InformationDetail = ({
  img,
  title,
  definition,
}: InformationDetailProps) => {
  return (
    <InformationDetailContainer>
      <InformationContainerDefinitionImgContainer>
        <InformationContainerDefinitionImg src={img} alt="" />
      </InformationContainerDefinitionImgContainer>
      <InformationDetailContainerText>
        <InformationContainerDefinitionH3>
          {title}
        </InformationContainerDefinitionH3>
        <InformationContainerDefinitionP>
          {definition}
        </InformationContainerDefinitionP>{" "}
      </InformationDetailContainerText>
    </InformationDetailContainer>
  );
};

export default InformationDetail;
