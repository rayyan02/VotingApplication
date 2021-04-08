import { QuestionInterface } from "../types";

// This method returns the selected question of first screen
export const getSelectedQuestions = (questionList?: QuestionInterface[], selectedId?: string) => {
    if (questionList != undefined && selectedId != undefined) {
        return questionList.filter(item => item.url == selectedId)[0];[]
    }
};
