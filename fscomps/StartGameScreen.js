import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, Text } from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber >=99){
      // show alert ...
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 and 99 (inclusive)',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={styles.instructionText}>Enter a number</Text>
        <TextInput 
          style={styles.numberInput} 
          maxLength={2} 
          keyboardType='number-pad' 
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPressed={resetInputHandler}>Reset</PrimaryButton>
          <PrimaryButton onPressed={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginHorizontal: 24,
    justifyContent: 'center'
  },
  instructionText: {
    color: Colors.textDark,
    fontSize: 24,
    fontFamily: 'open-sans',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 42,
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: '5%',
  },
})