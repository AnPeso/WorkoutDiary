// ExerciseHistory.js
import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { WorkoutContext } from '../components/Context';
import styles from '../styles/Styles';

const ExerciseHistoryScreen = () => {
  const { workouts, unit, convertToMiles } = useContext(WorkoutContext);

 
  const totalDistance = workouts.reduce((acc, workout) => {
    const distanceInSelectedUnit = unit === 'mi' ? convertToMiles(workout.distance, unit) : workout.distance;
    return acc + distanceInSelectedUnit;
  }, 0);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Total Distance: {totalDistance.toFixed(2)} {unit}</Text>
        <FlatList
          data={workouts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            
            const distanceInSelectedUnit = unit === 'mi' ? convertToMiles(item.distance, unit) : item.distance;
            return (
              <View style={styles.exerciseBox}>
                <Text style={styles.exerciseText}>
                  ${item.sportType}: ${distanceInSelectedUnit.toFixed(2)} ${unit}, ${item.duration} min on ${item.date.toDateString()}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};


export default ExerciseHistoryScreen;