import { combineReducers } from 'redux';
import { screenReducer } from './screen.reducer';
import { questionsReducer } from './questions.reducer';
import { choiceReducer} from "./submitChoice.reducer"

export const rootReducer = combineReducers({
  screen: screenReducer,
  questions: questionsReducer,
  choice: choiceReducer
});

export type RootState = ReturnType<typeof rootReducer>;