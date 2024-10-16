import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WorkoutProvider } from './components/Context'; 
import AddExerciseScreen from './components/AddExercise';
import ExerciseListScreen from './components/ExerciseHistory';
import SettingsScreen from './components/Settings';
import styles from './styles/Styles';
import Icon from 'react-native-vector-icons/Ionicons'; 


const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <WorkoutProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="Add Exercise" 
            component={AddExerciseScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="add-circle-outline" color={color} size={size} />
              ),
            }} 
          />
          <Tab.Screen 
            name="Exercise History" 
            component={ExerciseListScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="list-outline" color={color} size={size} />
              ),
            }} 
          />
          <Tab.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="settings-outline" color={color} size={size} />
              ),
            }} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    </WorkoutProvider>
  );
};

export default Main;