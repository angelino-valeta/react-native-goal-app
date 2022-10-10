import { TextInput, Button, View, StyleSheet, Modal, Image, Alert } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function resetInput(){
    setEnteredGoalText('')
  }

  function addGoalHandler() {
    if(!enteredGoalText){
      Alert.alert(
        'Invalid Text', 
        'Please enter a valid text',
        [{text: 'Okay!', style: 'cancel', onPress: resetInput}])
      return
    }
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancelGoal} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler}  color="#b180f0"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#311b6b'
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 8,
  },

  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },

  image: {
    height: 100,
    width: 100,
    margin: 20
  },  

  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
