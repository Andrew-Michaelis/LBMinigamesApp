import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Text, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import GuessLogItem from '../components/game/GuessLogItem';

let minBoundry = 1;
let maxBoundry = 100;

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }else{
    return rndNum;
  }
}

function GameScreen({userNumber, onGameOver, guessCount}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(()=>{
    if(currentGuess === userNumber){
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

  function nextGuessHandler(direction) {
    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: 'Sorry!', style: 'cancel'}]);
      return;
    }
    if (direction === 'lower') {
      maxBoundry = currentGuess;
    }else{
      minBoundry = currentGuess + 1;
    }
    const newRndNum = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
    setCurrentGuess(newRndNum);
    setGuessRounds(prevGuessRounds => [newRndNum, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;
  
  return (
    <View style={styles.screen}>
      <View style={styles.itemBox}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      </View>
      <View style={styles.itemBox}>
        <Title>Higher or Lower?</Title>
        <Card>
          <View style={styles.buttonsContainer}>
            <PrimaryButton onPressed={nextGuessHandler.bind(this, 'higher')}>
              <AntDesign name='caretup' size={24}/>
            </PrimaryButton>
            <PrimaryButton onPressed={nextGuessHandler.bind(this, 'lower')}>
              <AntDesign name='caretdown' size={24}/>
            </PrimaryButton>
          </View>
        </Card>
      </View>
      <View style={styles.listContainer}>
        <FlatList 
          data={guessRounds} 
          renderItem={(itemData) => (
            <GuessLogItem 
              roundNumber={guessRoundsListLength - itemData.index} 
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}  
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
  },
  screen: {
    justifyContent: 'flex-start',
    flex: 1,
    padding: 24,
  },
  itemBox: {
    marginTop: 40,
  },
  listContainer: {
    marginTop: 10,
    flex: 1,
  },
});