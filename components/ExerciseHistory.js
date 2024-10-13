import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { WorkoutContext } from '../components/Context';

const ExerciseHistoryScreen = () => {
  const { workouts } = useContext(WorkoutContext);

  const totalDistance = workouts.reduce((acc, workout) => acc + workout.distance, 0);

  return (
    <View style={styles.container}>
      <Text>Total Distance: {totalDistance.toFixed(2)} km</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{`${item.sportType}: ${item.distance} km, ${item.duration} min on ${item.date.toDateString()}`}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ExerciseHistoryScreen;
