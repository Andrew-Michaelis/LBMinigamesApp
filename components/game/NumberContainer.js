import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.borderLight,
    backgroundColor: Colors.errorRed,
    borderRadius: 12,
    padding: 12,
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.textLight,
    fontFamily: 'open-sans-bold',
    fontSize: 32,
  }
})