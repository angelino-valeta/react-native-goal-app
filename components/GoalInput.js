import {TextInput, Button, View, StyleSheet } from 'react-native'
import { useState } from 'react'

function GoalInput(props){

  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('');
  }
  
  return(
    <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder="Your course goal!"
      onChangeText={goalInputHandler}
      value={enteredGoalText}
    />
    <Button title="Add Goal" onPress={addGoalHandler} />
  </View>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 24,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});