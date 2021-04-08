import { act } from 'react-test-renderer';
import { ApplicationActionType, SET_APPLICATION_SCREEN } from '../types';

interface ScreenState {
    screenType: string
  }

const initialState: ScreenState = {
    screenType: "QuestionsScreen"
};

export function screenReducer(state: ScreenState = initialState, action: ApplicationActionType): ScreenState {
  switch (action.type) {
    case SET_APPLICATION_SCREEN: {
      return {
        ...state,
        screenType: action.payload
      };
    }

    default:
      return state
  }
};
