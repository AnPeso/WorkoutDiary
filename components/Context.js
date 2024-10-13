import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([
    { sportType: 'Running', distance: 5, duration: 30, date: new Date() },
    { sportType: 'Cycling', distance: 15, duration: 45, date: new Date() },
  ]);
  const [unit, setUnit] = useState('km');

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, unit, setUnit }}>
      {children}
    </WorkoutContext.Provider>
  );
};
