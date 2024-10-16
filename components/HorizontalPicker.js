import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/Styles';

const HorizontalPicker = ({ items, selectedValue, onValueChange }) => {
  return (
    <View style={styles.HorizontalPicker}>
      {items.map((item) => (
        <TouchableOpacity
          key={item.value}
          style={[styles.option, selectedValue === item.value && styles.selectedOption]}
          onPress={() => onValueChange(item.value)}
        >
          <Text style={styles.optionText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};


export default HorizontalPicker;
