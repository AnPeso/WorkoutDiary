import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native';
import { WorkoutContext } from '../components/Context';
import DateTimePicker from '@react-native-community/datetimepicker';
import HorizontalPicker from './HorizontalPicker'; 
import styles from '../styles/Styles';

const AddExerciseScreen = () => {
  const { addWorkout, unit } = useContext(WorkoutContext);
  const [sportType, setSportType] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAddWorkout = () => {
    Keyboard.dismiss();
    const dist = parseFloat(distance);
    const dur = parseFloat(duration);

    if (!sportType || dist <= 0 || dur <= 0) {
      Alert.alert("Error", "Please fill in all fields with valid values.");
      return;
    }

    const distanceInKm = unit === 'mi' ? dist * 1.60934 : dist; 

    addWorkout({ sportType, distance: distanceInKm, duration: dur, date });
    Alert.alert("Success", "Workout added successfully!");
    setSportType('');
    setDistance('');
    setDuration('');
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Add your exercise</Text>
        <HorizontalPicker
          items={[
            { label: 'Run', value: 'Run' },
            { label: 'Ski', value: 'Ski' },
            { label: 'Swim', value: 'Swim' },
          ]}
          selectedValue={sportType}
          onValueChange={setSportType}
        />
        <TextInput
          style={styles.addExerciseInput}
          placeholder={`Distance (${unit})`} 
          value={distance}
          onChangeText={setDistance}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.addExerciseInput}
          placeholder="Duration (min)"
          value={duration}
          onChangeText={setDuration}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateButtonText}>{`Select Date: ${date.toDateString()}`}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode='date'
            display='default'
            onChange={onChangeDate}
            maximumDate={new Date()}
          />
        )}
        <TouchableOpacity
          style={styles.addExerciseButton}
          onPress={handleAddWorkout}
        >
          <Text style={styles.ButtonText}>Add workout</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};


export default AddExerciseScreen;