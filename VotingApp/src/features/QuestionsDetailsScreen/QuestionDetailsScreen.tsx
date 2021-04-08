import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { setApplicationScreen, submitChoice} from '../../redux/actions';

interface Props {
}


export const QuestionDetailsScreen: React.FC<Props> = () => {
    const dispatch = useDispatch()
    const { selectedQuestion } = useSelector((state: RootState) => state.questions)
    const [selectedId, setSelectedId] = useState(null);
   const title = selectedQuestion?.question
    const choices = selectedQuestion?.choices

    // Navigate to Questionns Screen
    const onPress = () => {
      dispatch(setApplicationScreen("QuestionsScreen"))
   };

    // Submit the vote
    const submitVote = (item) => {
      // Call the API to submit
      dispatch(submitChoice(item.url))
    };

    const Item = ({ title, backgroundColor, textColor , onPressHandler}) => (
      <TouchableOpacity onPress={onPressHandler}>
      <View style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{title}</Text>
      </View>
      </TouchableOpacity>
    );

   
  const renderItem = ({ item }) => {
      const backgroundColor = item.url === selectedId ? "#6e3b6e" : "#f9c2ff";
      const color = item.url === selectedId ? 'white' : 'black';
    return (
         <Item title={item.choice}
         onPressHandler={() => submitVote(item)}
         backgroundColor={{ backgroundColor }}
         textColor={{ color }}
        />
       );
    };
   
    return (
      <View style={styles.container}>
       <Text style={styles.titleText}>{title}</Text>
       <FlatList style= {styles.flatList}
        data={choices}
        renderItem={renderItem}
        keyExtractor={(item) => item.url}
        extraData={selectedId}
      />
      <Button  title="Go to Questions list" onPress={onPress}></Button>
      </View>
    );
  };

 
  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      paddingHorizontal: 10,
    },
    titleText: {
      paddingLeft:18,
      fontSize: 30,
      fontWeight: "bold"
    },
    flatList: {
      marginBottom:50
    },
    title: {
      fontSize: 15,
    },
    item: {
      backgroundColor: '#f5f5f5',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius:25
    }
  });