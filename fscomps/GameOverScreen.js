import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';

import Colors from '../constants/colors';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';

function GameOverScreen({ roundsNumber, userNumber, onRestart }) {

  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageOuterContainer}>
        <Image source={require('../assets/images/success.png')} style={styles.imageInnerContainer}/>
      </View>
      <View style={styles.itemBox}>
        <Text style={styles.gameEndTextHighlight}>Your Number Was {userNumber}</Text>
        <Text style={styles.gameEndText}>It Took Your Phone</Text>
        <NumberContainer>{roundsNumber}</NumberContainer>
        <Text style={styles.gameEndText}>Tries To Figure It Out.</Text>
      </View>
      <Card>
        <Text style={styles.gameEndText}>Want To Play Again?</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPressed={onRestart}>Replay</PrimaryButton>
        </View>
      </Card>
    </View>
  )
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  imageOuterContainer: {
    borderRadius: 100,
    borderWidth: 3,
    borderColor: Colors.borderDark,
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 100 : 200,
    overflow: 'hidden',
    marginTop: deviceWidth < 380 ? 4 : 20,
    alignSelf: 'center',
  },
  imageInnerContainer: {
    width: '100%',
    height: '100%',
  },
  itemBox: {
    marginVertical: 20,
    borderColor: Colors.borderLight,
    borderWidth: 2,
    backgroundColor: Colors.primary700,
    paddingVertical: 8,
  },
  gameEndText: {
    marginHorizontal: 8,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'open-sans',
    fontSize: 27,
    color: Colors.textLight,
  },
  gameEndTextHighlight: {
    fontFamily: 'open-sans-bold',
    borderBottomWidth: 4,
    borderColor: Colors.borderLight,
    fontSize: 27,
    color: Colors.textLight,
    paddingBottom: 8,
    marginHorizontal: 8,
    justifyContent: 'center',
    textAlign: 'center',
  },
})