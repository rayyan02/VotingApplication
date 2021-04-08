import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { getQuestions, selectQuestion } from '../../redux/actions/questions.actions';
import { setApplicationScreen } from '../../redux/actions/screen.actions';
import { QuestionsScreen } from '../QuestionsScreen';
import { QuestionDetailsScreen } from '../QuestionsDetailsScreen';


interface Props {
}

export const AppRootScreen: React.FC<Props> = () => {
   
    const dispatch = useDispatch()
     const { screenType } = useSelector((state: RootState) => state.screen)
    console.log("screenType", screenType)
 
    useEffect(()=> {
        dispatch(setApplicationScreen("QuestionsScreen"))
      
    },[])
    
    return (
      <View>
       {screenType == "QuestionsScreen" ? <QuestionsScreen></QuestionsScreen> : <QuestionDetailsScreen></QuestionDetailsScreen>}
      </View>
    );
  };

 