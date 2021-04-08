import { QuestionActionType, QuestionInterface, QUESTION_LIST_SUCCESS_RESPONSE, REQUEST_QUESTION_LIST, SET_SELECTED_QUESTION } from '../types/questions.types';
import { getSelectedQuestions } from './helper'
interface QuestionState {
  questions?: QuestionInterface[],
  loader: Boolean,
  selectedQuestion?: QuestionInterface
}

const initialState: QuestionState = {
  questions: [],
  loader: false,
  selectedQuestion: undefined,
};

export function questionsReducer(state: QuestionState = initialState, action: QuestionActionType): QuestionState {
  switch (action.type) {
    case REQUEST_QUESTION_LIST: {
      return {
        ...state,
        questions: action.payload,
         loader: true
      };
    }

    case QUESTION_LIST_SUCCESS_RESPONSE: {
      return {
        ...state,
        questions: action.payload,
        loader: false
      };
    }

    case SET_SELECTED_QUESTION: {
      const selectedQuestion = getSelectedQuestions(state.questions, action.payload)
      return {
        ...state,
        selectedQuestion: selectedQuestion
      };
    }

    default:
      return state
  }
};
