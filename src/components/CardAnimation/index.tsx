import {
  CardAnimationBack,
  CardAnimationBox,
  CardAnimationDefinition,
  CardAnimationFace,
  CardAnimationTitle,
  IconCircle,
} from "./style";
interface TitleContainerProps {
  subTitleText: string;
  titleText: string;
  imgCard: any;
}

const CardAnimation = ({
  subTitleText,
  titleText,
  imgCard,
}: TitleContainerProps) => {
  return (
    <CardAnimationBox>
      <CardAnimationFace>
        <IconCircle>{imgCard}</IconCircle>
        <CardAnimationTitle>{titleText}</CardAnimationTitle>
      </CardAnimationFace>
      <CardAnimationBack>
        <CardAnimationTitle>{titleText}</CardAnimationTitle>
        <CardAnimationDefinition>{subTitleText}</CardAnimationDefinition>
      </CardAnimationBack>
    </CardAnimationBox>
  );
};

export default CardAnimation;
