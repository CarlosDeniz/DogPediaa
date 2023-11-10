import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DogList from './DogList.js';
import DogDetail from './DogDetail.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DogList">
        <Stack.Screen name="Dogpedia" component={DogList} />
        <Stack.Screen name="Detalles" component={DogDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
