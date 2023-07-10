import { View, Text, Pressable, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function PrimaryButton({ children, onPressed }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        style={({pressed}) =>
          pressed 
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        } 
        onPress={onPressed} 
        android_ripple={{color: Colors.primary600}}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    flex: 1,
    margin: 4,
    borderRadius: 24,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.secondary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 3,
  },
  buttonText: {
    color: Colors.textDark,
    textAlign: 'center',
    fontSize: 20,
  },
  pressed: {
    opacity: 0.75,
  }
});