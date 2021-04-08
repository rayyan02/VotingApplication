/**
 * @format
 */

import 'react-native';
import { getSelectedQuestions } from "./helper"
import {QuestionInterface} from "./../types/questions.types"



it('Should return Ruby as favorite programming language', () => {
    const mockData: QuestionInterface[] = [
        { 
         question:"Favourite programming language?", 
         url: "test", 
         published_at:"", 
         choices:[{choice:"Ruby", votes:3, url:"/questions/30/choices/142"}]
        },
        { 
         question:"Favourite programming language?", 
         url: "test", 
         published_at:"", 
        choices:[{choice:"Python", votes:3, url:"/questions/31/choices/142"}]
        }
]
    const expectedQuestion = mockData[0].question
    const selectedQuestion = getSelectedQuestions(mockData, 
        "/questions/30/choices/142")?.question

     expect(selectedQuestion).toEqual(expectedQuestion)
});

