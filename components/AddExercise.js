import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { WorkoutContext } from '../components/Context';
import styles from '../styles/Styles';

const AddExerciseScreen = () => {
  const { addWorkout } = useContext(WorkoutContext);
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());

  const handleAddWorkout = () => {
    const dist = parseFloat(distance);
    const dur = parseFloat(duration);

    if (dist < 0 || dur < 0) {
      Alert.alert("Error", "Distance and duration must be non-negative");
      return;
    }

    addWorkout({ sportType, distance: dist, duration: dur, date });
    setSportType('');
    setDistance('');
    setDuration('');
  };

  return (
    <View style={styles.container}>
        <View style= {styles.box}> 
      <TextInput style={styles.addExerciseInput} placeholder="Sport Type" value={sportType} onChangeText={setSportType} />
      <TextInput style={styles.addExerciseInput}  placeholder="Distance (km)" value={distance} onChangeText={setDistance} keyboardType="numeric" />
      <TextInput style={styles.addExerciseInput}  placeholder="Duration (min)" value={duration} onChangeText={setDuration} keyboardType="numeric" />
      <Button style={styles.addExerciseButton} title="Add Workout" onPress={handleAddWorkout} />
      </View>
    </View>
  );
};



export default AddExerciseScreen;
