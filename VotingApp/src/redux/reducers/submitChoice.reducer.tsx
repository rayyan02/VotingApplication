import {  REQUEST_SUBMIT_VOTE, SubmitVoteActionType, SUBMIT_VOTE_ERROR_RESPONSE, SUBMIT_VOTE_SUCCESS_RESPONSE, ChoiceInterface } from '../types/questions.types';

interface ChoiceState {
 submited?: ChoiceInterface,
 loader: Boolean
}

const initialState: ChoiceState = {
 submited: undefined,
 loader: false
};

export function choiceReducer(state: ChoiceState = initialState, action: SubmitVoteActionType): ChoiceState {
  switch (action.type) {
    case REQUEST_SUBMIT_VOTE: {
      return {
        ...state,
        loader: true
      };
    }

    case SUBMIT_VOTE_SUCCESS_RESPONSE: {
      return {
        ...state,
        submited: action.payload,
        loader: false
      };
    }

    case SUBMIT_VOTE_ERROR_RESPONSE: {
      return {
        ...state,
        loader: false
      };
    }

    default:
      return state
  }
};
