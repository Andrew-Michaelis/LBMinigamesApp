import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    color: Colors.textLight,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.borderLight,
    padding: 12,
    backgroundColor: Colors.primary700,
  }
});