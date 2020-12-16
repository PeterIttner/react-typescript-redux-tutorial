import styled from "styled-components";
import { FeedbackItemType, IFeedbackItem } from "../redux/types";

interface IGoodOrBad {
  isGood: boolean;
}

const GoodOrBadBox = styled.div<IGoodOrBad>`
  border: 1px solid black;
  background-color: ${(props) => (props.isGood ? "limegreen" : "coral")};
  padding: 20px;
`;

interface IFeedbackItemProps {
  feedback: IFeedbackItem;
}

const FeedbackItem: React.FC<IFeedbackItemProps> = ({ feedback }) => {
  var typeIcon = feedback.feedbackType === FeedbackItemType.Pro ? ":-)" : ":-(";

  return (
    <GoodOrBadBox isGood={feedback.feedbackType === FeedbackItemType.Pro}>
      <div>{typeIcon}</div>
      <strong>{feedback.text}</strong>
    </GoodOrBadBox>
  );
};

export default FeedbackItem;
