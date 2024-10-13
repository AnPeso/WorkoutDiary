import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WorkoutProvider } from './components/Context'; // Adjust the path if necessary
import AddExerciseScreen from './components/AddExercise';
import ExerciseListScreen from './components/ExerciseHistory';
import SettingsScreen from './components/Settings';
import styles from './styles/Styles';


const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <WorkoutProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Add Exercise" component={AddExerciseScreen} />
          <Tab.Screen name="Exercise List" component={ExerciseListScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </WorkoutProvider>
  );
};

export default Main;
