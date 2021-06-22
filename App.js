import 'react-native-gesture-handler'
import React from 'react';
import {StyleSheet} from 'react-native'
import Mentorbox from './components/Mentorbox';
import Form from './components/Form';
import Display from './components/Display';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {

  const Stack = createStackNavigator();
  return (
    <>
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Mentorbox} >
          <Stack.Screen name='Mentorbox' component={Mentorbox} />
          <Stack.Screen name='Form' component={Form}/>
          <Stack.Screen name='Display' component={Display}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
})