import { View, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function Card({children}) {
  return (
    <View style={styles.inputContainer}>{children}</View>
  );
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    padding: 16,
    backgroundColor: Colors.primary600,
    borderRadius: 12,
    borderColor: Colors.borderLight,
    borderWidth: 2,
    elevation: 4, //android only to add shadow
    shadowColor: 'black', //this block of 4 is the equivalent on iphone
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4, //far more customizable, but more painful to declare
  },
})