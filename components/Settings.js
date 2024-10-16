import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WorkoutContext } from '../components/Context';
import styles from '../styles/Styles';

const SettingsScreen = () => {
  const { unit, setUnit } = useContext(WorkoutContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Units:</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity 
          style={styles.radioOption} 
          onPress={() => setUnit('km')}
        >
          <Text style={styles.radioText}>
            {unit === 'km' ? '●' : '○'} Kilometers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.radioOption} 
          onPress={() => setUnit('mi')}
        >
          <Text style={styles.radioText}>
            {unit === 'mi' ? '●' : '○'} Miles
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default SettingsScreen;
