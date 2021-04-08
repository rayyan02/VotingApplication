export interface QuestionInterface {
    question: String
    published_at: String
    url: String
    choices: ChoiceInterface[]
}

export interface ChoiceInterface {
    choice: String
    votes: Number
    url: String
}

// Root Screen
export const SET_APPLICATION_SCREEN = "SET_APPLICATION_SCREEN"

interface SET_APPLICATION_SCREEN_ACTION {
    type: typeof SET_APPLICATION_SCREEN,
    payload: string
}


// Question Screen
export const REQUEST_QUESTION_LIST = "REQUEST_QUESTION_LIST"
export const QUESTION_LIST_SUCCESS_RESPONSE = "QUESTION_LIST_SUCCESS_RESPONSE"
export const QUESTION_LIST_ERROR_RESPONSE = "QUESTION_LIST_ERROR_RESPONSE"
export const SET_SELECTED_QUESTION = "SET_SELECTED_QUESTION"

interface REQUESTQUESTIONACTION {
    type: typeof REQUEST_QUESTION_LIST,
    payload?: QuestionInterface[]
}

interface QUESTION_LIST_SUCCESS_ACTION {
    type: typeof QUESTION_LIST_SUCCESS_RESPONSE,
    payload: QuestionInterface[]
}

interface QUESTION_LIST_ERROR_ACTION {
    type: typeof QUESTION_LIST_ERROR_RESPONSE,
    payload?: QuestionInterface[]
}

interface SELECTED_QUESTION_ACTION {
    type: typeof SET_SELECTED_QUESTION,
    payload: string
}

// Question Detail Screen
export const REQUEST_SUBMIT_VOTE = "REQUEST_SUBMIT_VOTE"
export const SUBMIT_VOTE_SUCCESS_RESPONSE = "SUBMIT_VOTE_SUCCESS_RESPONSE"
export const SUBMIT_VOTE_ERROR_RESPONSE = "SUBMIT_VOTE_ERROR_RESPONSE"

interface REQUEST_SUBMIT_VOTE_ACTION {
    type: typeof REQUEST_SUBMIT_VOTE,
    payload?: ChoiceInterface
}

interface SUBMIT_VOTE_SUCCESS_ACTION {
    type: typeof SUBMIT_VOTE_SUCCESS_RESPONSE,
    payload: ChoiceInterface
}

interface SUBMIT_VOTE_ERROR_ACTION {
    type: typeof SUBMIT_VOTE_ERROR_RESPONSE,
    payload?: ChoiceInterface
}

export type SubmitVoteActionType = REQUEST_SUBMIT_VOTE_ACTION | SUBMIT_VOTE_SUCCESS_ACTION | SUBMIT_VOTE_ERROR_ACTION

export type ApplicationActionType = SET_APPLICATION_SCREEN_ACTION 

export type QuestionActionType = REQUESTQUESTIONACTION | QUESTION_LIST_SUCCESS_ACTION | QUESTION_LIST_ERROR_ACTION | SELECTED_QUESTION_ACTION