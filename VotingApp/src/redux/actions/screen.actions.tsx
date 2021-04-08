import { ActionCreator } from "redux";
import { ApplicationActionType, SET_APPLICATION_SCREEN } from "../types";

// This method sets the application screen
export function setApplicationScreen(screen: string) {
    return dispatch => { 
      dispatch(setScreenType(screen));
    }
}

  const setScreenType: ActionCreator<ApplicationActionType> = (screen: string) => {
    return { type: SET_APPLICATION_SCREEN, payload: screen };
  }