import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

const convertToKilometers = (distance, unit) => {
  return unit === 'mi' ? distance * 1.60934 : distance; // Convert miles to kilometers
};

const convertToMiles = (distance, unit) => {
  return unit === 'km' ? distance / 1.60934 : distance; // Convert kilometers to miles
};

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);
  const [unit, setUnit] = useState('km');

  const addWorkout = (workout) => {
    const convertedDistance = convertToKilometers(workout.distance, workout.unit);
    setWorkouts([...workouts, { ...workout, distance: convertedDistance }]);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, unit, setUnit, convertToMiles }}>
      {children}
    </WorkoutContext.Provider>
  );
};
