interface IFeedbackItem {
  id: number;
  text: string;
  feedbackType: FeedbackItemType;
}

enum FeedbackItemType {
  Pro,
  Con,
}

interface IAppState {
  feedbacks: Array<IFeedbackItem>;
}

export type { IFeedbackItem, IAppState };
export { FeedbackItemType };
