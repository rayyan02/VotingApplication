import { ActionCreator } from "redux";
import { questionsService } from "../../services";
import { ChoiceInterface, SubmitVoteActionType, SUBMIT_VOTE_SUCCESS_RESPONSE} from "../types/questions.types";

// This method call API to submit the response
export function submitChoice(url) {
 // console.log("url",url)
    return dispatch => { 
      return questionsService.submitChoice(url)
        .then(
          response => {
            dispatch(submitSuccess(url))
          },
          error => {
            //
          })
    }
}

const submitSuccess: ActionCreator<SubmitVoteActionType> = (choice: ChoiceInterface) => {
  return { type: SUBMIT_VOTE_SUCCESS_RESPONSE, payload: choice };
}