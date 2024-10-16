import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';
import { WorkoutProvider } from './components/Context'; 
import AddExerciseScreen from './components/AddExercise';
import ExerciseListScreen from './components/ExerciseHistory';
import SettingsScreen from './components/Settings';
import Icon from 'react-native-vector-icons/Ionicons'; 

const Tab = createBottomTabNavigator();

const loadFonts = async () => {
  await Font.loadAsync({
    'Dosis-Regular': require('./assets/fonts/Dosis-Regular.ttf'), // Adjust the path if necessary
  });
};

const Main = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

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
