import { StyleSheet, Text, StyleProp, TextStyle, View } from "react-native";
import { Colors } from "../../constants/theme";

interface Props {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

function DynamicReaction({ children, style }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.pill}>
        <Text style={[styles.text, style]}>{children}</Text>
      </View>
    </View>
  );
}

export default DynamicReaction;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: "center",
  },
  pill: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: Colors.glass,
    borderWidth: 1,
    borderColor: Colors.glassBorder,
  },
  text: {
    fontSize: 12, // Small font like hint
    textAlign: "center",
    color: Colors.textSecondary,
    fontWeight: "600",
  },
});
