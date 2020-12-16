import {
  Action,
  configureStore,
  createSlice,
  Dispatch,
  PayloadAction,
} from "@reduxjs/toolkit";
import { FeedbackItemType, IAppState } from "./types";

interface IAppAction extends Action {
  type: string;
  payload: string;
}

const initialState: IAppState = {
  feedbacks: [
    { id: 0, feedbackType: FeedbackItemType.Pro, text: "Alles super" },
    { id: 1, feedbackType: FeedbackItemType.Con, text: "Alles shit" },
    { id: 2, feedbackType: FeedbackItemType.Pro, text: "Gut, aber zu lang" },
  ],
};

const slice = createSlice({
  name: "feedback",
  initialState: initialState,
  reducers: {
    addProFeedback: (state, action: PayloadAction<string>) => {
      const id = state.feedbacks.length + 1;
      state.feedbacks.push({
        id: id,
        feedbackType: FeedbackItemType.Pro,
        text: action.payload,
      });
    },
    addConFeedback: (state, action: PayloadAction<string>) => {
      const id = state.feedbacks.length + 1;
      state.feedbacks.push({
        id: id,
        feedbackType: FeedbackItemType.Con,
        text: action.payload,
      });
    },
  },
});

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
  reducer: slice.reducer,
  middleware: [shortenMiddleware],
});

export { reduxStore };
export const { addProFeedback, addConFeedback } = slice.actions;
