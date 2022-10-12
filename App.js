import  React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Home from "./Screens/Home"
import Rules from "./Screens/Rules"
import Courses from "./Screens/Courses"
import Openings from "./Screens/Openings"
import Archive from "./Screens/Archive"
import Board from "./Screens/Board"
import London from "./Openings/London"
import French from "./Openings/French"
import Vienna from "./Openings/Vienna"
import Stonewall from "./Openings/Stonewall"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Rules" component={Rules} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Openings" component={Openings} />
        <Stack.Screen name="Archive" component={Archive} />
        <Stack.Screen name="Board" component={Board} />
        <Stack.Screen name="London" component={London} />
        <Stack.Screen name="French" component={French} />
        <Stack.Screen name="Stonewall" component={Stonewall} />
        <Stack.Screen name="Vienna" component={Vienna} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
