import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.borderLight,
    backgroundColor: Colors.errorRed,
    borderRadius: 12,
    padding: deviceWidth < 380 ? 6 : 12,
    marginVertical: deviceWidth < 380 ? 2 : 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.textLight,
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth < 380 ? 26 : 32,
  }
})