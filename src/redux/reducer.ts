import { Action, configureStore, Dispatch } from "@reduxjs/toolkit";
import { FeedbackItemType, IAppState } from "./types";

const addProFeedback = (text: string): IAppAction => {
  return {
    type: ACTION_ADD_PRO,
    payload: text,
  };
};

const addConFeedback = (text: string): IAppAction => {
  return {
    type: ACTION_ADD_CON,
    payload: text,
  };
};

interface IAppAction extends Action {
  type: string;
  payload: string;
}

const ACTION_ADD_PRO = "ADD_PRO";
const ACTION_ADD_CON = "ADD_CON";

const initialState: IAppState = {
  feedbacks: [
    { id: 0, feedbackType: FeedbackItemType.Pro, text: "Alles super" },
    { id: 1, feedbackType: FeedbackItemType.Con, text: "Alles shit" },
    { id: 2, feedbackType: FeedbackItemType.Pro, text: "Gut, aber zu lang" },
  ],
};

const reducer = (
  state: IAppState = initialState,
  action: IAppAction
): IAppState => {
  switch (action.type) {
    case ACTION_ADD_PRO: {
      const id = state.feedbacks.length + 1;
      return {
        feedbacks: [
          ...state.feedbacks,
          {
            id: id,
            feedbackType: FeedbackItemType.Pro,
            text: action.payload,
          },
        ],
      };
    }
    case ACTION_ADD_CON: {
      const id = state.feedbacks.length + 1;
      return {
        feedbacks: [
          ...state.feedbacks,
          {
            id: id,
            feedbackType: FeedbackItemType.Con,
            text: action.payload,
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
};

interface MyMiddlewareAPI {
  getState: () => IAppState;
}

const shortenMiddleware = (store: MyMiddlewareAPI) => (
  next: Dispatch<IAppAction>
) => (action: IAppAction) => {
  if (action.payload && action.payload.length > 10) {
    action.payload = `${action.payload.substring(0, 10)}...`;
  }
  next(action);
};

const reduxStore = configureStore({
  reducer: reducer,
  middleware: [shortenMiddleware],
});

export { addProFeedback, addConFeedback, reduxStore };
