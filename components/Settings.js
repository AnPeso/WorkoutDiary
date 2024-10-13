import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { WorkoutContext } from '../components/Context';

const SettingsScreen = () => {
  const { setUnit } = useContext(WorkoutContext);

  return (
    <View style={styles.container}>
      <Text>Select Units:</Text>
      <Button title="Kilometers" onPress={() => setUnit('km')} />
      <Button title="Miles" onPress={() => setUnit('mi')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default SettingsScreen;
