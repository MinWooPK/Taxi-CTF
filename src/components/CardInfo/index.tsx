import { CardInfoBox, CardSubtitle, CardTitle, IconCircle } from "./style";

interface TitleContainerProps {
  subTitleCard: string;
  titleCard: string;
  imgCard: any;
}
const CardInfo = ({
  imgCard,
  titleCard,
  subTitleCard,
}: TitleContainerProps) => {
  return (
    <CardInfoBox>
      <IconCircle>{imgCard}</IconCircle>
      <CardTitle>{titleCard}</CardTitle>
      <CardSubtitle>{subTitleCard}</CardSubtitle>
    </CardInfoBox>
  );
};
export default CardInfo;
