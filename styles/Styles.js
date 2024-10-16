import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Add styles for AddExerciseScreen
    container: {
      flex: 1,
      fontFamily: 'Dosis-Regular', 
      padding:25,
      backgroundColor: '#f7d8d8'
    },
   addExerciseInput: {
    fontSize: 20,
    margin: 5,
    padding: 10,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#c9abab'},

  dateButton: {
    backgroundColor: '#f4dae4', // Customize the button color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15
  },
  dateButtonText: {
    color: '#000000', // Customize the text color
  
  },
  box: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  exerciseBox: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  exerciseText: {
    fontSize: 15,
  },
  HorizontalPicker: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#c9abab',
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#e7a5bf',
  },
  optionText: {
    color: '#000',
  },
  addExerciseButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#e7a5bf',
    borderRadius: 8,
    },

//     // Add styles for ExerciseHistoryScreen
//     historyContainer: {
//         flex: 1,
//         padding: 16,
//     },
    historySummary: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
     },
    historySummaryText: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily:'Dosis-Regular'
    },
    historyItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

//     // Add styles for SettingsScreen
      title: {
    fontSize: 30,
    marginBottom: 10,
    fontFamily: 'Dosis-Regular'
  },
  radioContainer: {
    marginVertical: 10,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  radioText: {
    fontSize: 16,
    marginLeft: 10,
  },
  ButtonText: {
    fontSize: 25,
    fontFamily: 'Dosis-Regular'
  }
});

export default styles;
