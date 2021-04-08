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


interface Props {
}

export const QuestionsScreen: React.FC<Props> = () => {
   
    const dispatch = useDispatch()
    const { questions } = useSelector((state: RootState) => state.questions)
  
    // Gets the Questiom list 
    function getQuestionsList() {
      dispatch(getQuestions())
    }
  
    useEffect(()=> {
      getQuestionsList()
      
    },[])


    const onPress = (item) => {
      dispatch(setApplicationScreen("QuestionDetailsScreen"))
      dispatch(selectQuestion(item.url))
    };

    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );

    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => onPress(item)}>
        <Item title={item.question} />
      </TouchableOpacity>
     
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.titleText} >All Questions</Text>
        <FlatList style= {styles.flatList}
          data={questions}
          renderItem={renderItem}
           keyExtractor={(_, index) =>  String(index)}
      />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      marginTop: 25,
      paddingHorizontal: 5,
    },
    titleText: {
      paddingLeft:15,
      fontSize: 30,
      fontWeight: "bold"
    },
    flatList: {
      marginBottom:50
    },
    title: {
      fontSize: 20,
    },
    item: {
      backgroundColor: '#f5f5f5',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius:25
    }
  });