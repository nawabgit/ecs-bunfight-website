import { Reducer } from "react";
import produce from "immer";
import exhaustivenessCheck from "../common/hooks/exhaustivenessCheck";
import { ThunkAction } from "../store";
import * as Redux from "redux";

interface Question {
  answer: {
    question: number;
    answer_text: string;
  };
  user: number;
  title: string;
}

// Plain actions
interface QuestionsStarted {
  type: "questions/get/started";
}

interface QuestionsFinished {
  type: "questions/get/finished";
  questions?: Question[];
  error?: string;
}

export type QuestionActions = QuestionsStarted | QuestionsFinished;

// States
interface QuestionState {
  pending: boolean;
  questions: Question[] | undefined;
  error: string | undefined;
}

const defaultQuestionState: QuestionState = {
  pending: false,
  questions: undefined,
  error: undefined,
};

// Reducers

export const questionReducer: Redux.Reducer<QuestionState, QuestionActions> = (
  state = defaultQuestionState,
  action
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "questions/get/started":
        draft.pending = true;
        return;

      case "questions/get/finished":
        draft.pending = false;
        draft.questions = action.questions;
        draft.error = action.error;
        return;

      default:
        exhaustivenessCheck(action);
    }
  });

// Thunk Actions

export const doGetQuestions = (): ThunkAction<Promise<void>> => async (
  dispatch,
  getState,
  { api }
) => {
  dispatch({ type: "questions/get/started" });

  try {
    const response = await api.get<Question[]>("/core/questions/");

    dispatch({
      type: "questions/get/finished",
      questions: response.data,
    });
  } catch (e) {
    dispatch({
      type: "questions/get/finished",
      error: "We fucked up",
    });
  }
};
