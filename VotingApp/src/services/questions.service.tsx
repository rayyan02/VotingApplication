import {  ChoiceInterface, QuestionInterface }  from '../redux/types/questions.types';
import { getFromServer, postToServer } from './base.services';

export const questionsService = {
    getQuestionsList,
    submitChoice
};

async function getQuestionsList(): Promise<QuestionInterface[]> {
 return await getFromServer('https://polls.apiblueprint.org/questions');   
}

async function submitChoice(url: String ): Promise<ChoiceInterface> {
    let path = "https://polls.apiblueprint.org" + url
    return await postToServer(path)
}
