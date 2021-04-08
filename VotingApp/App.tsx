/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider} from 'react-redux';
import {store} from './src/redux'



import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';



import { QuestionsScreen } from './src/features/QuestionsScreen';
import { AppRootScreen } from './src/features/container/AppRootScreen';

const App = () => {

 
return (
      <Provider store={store}>
     <SafeAreaView >
        <StatusBar barStyle={'dark-content'} />
        <AppRootScreen></AppRootScreen>
     </SafeAreaView>
   </Provider>
 

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
