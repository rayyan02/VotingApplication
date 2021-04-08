import { ActionCreator } from "redux";
import { questionsService } from "../../services";
import { QuestionActionType, QuestionInterface, QUESTION_LIST_ERROR_RESPONSE, QUESTION_LIST_SUCCESS_RESPONSE, REQUEST_QUESTION_LIST, SET_SELECTED_QUESTION } from "../types/questions.types";

// This method call API to get the questios
export function getQuestions() {
    return (dispatch: (arg0: QuestionActionType) => void) => { 
      dispatch(requestQuestions());
      return questionsService.getQuestionsList()
        .then(
          response => {
            dispatch(getQuestionsSuccess(response))
          },
          error => {
            dispatch(getQuestionsError(error))
          })
    }
}


export function selectQuestion(url: string) {
  return (dispatch: (arg0: QuestionActionType) => void) => { 
    dispatch(setSelectedQuestion(url)); 
  }
}


const requestQuestions: ActionCreator<QuestionActionType> = (list: QuestionInterface[]) => {
  
    return { type: REQUEST_QUESTION_LIST, payload: list || {} };
}

const getQuestionsSuccess: ActionCreator<QuestionActionType> = (list: QuestionInterface[]) => {
    return { type: QUESTION_LIST_SUCCESS_RESPONSE, payload: list };
}
  
const getQuestionsError: ActionCreator<QuestionActionType> = (list: QuestionInterface[]) => {
    return { type: QUESTION_LIST_ERROR_RESPONSE, payload: list || {} };
}

const setSelectedQuestion: ActionCreator<QuestionActionType> = (value: string) => {
  return { type: SET_SELECTED_QUESTION, payload: value };
}