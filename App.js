// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import DogList from './DogList';
import DogDetail from './DogDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: '' }} />
        <Stack.Screen name="DogList" component={DogList} options={{ title: 'Dog List' }} />
        <Stack.Screen name="Detail" component={DogDetail} options={{ title: 'Dog Details' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
