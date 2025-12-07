import { StyleSheet, StyleProp, Text, View, ViewStyle, TextStyle } from "react-native";
import { Colors } from "../../constants/theme";

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<TextStyle>;
  headerSize?: "small" | "large";
}
function ScreenHeader({ children, style, headerStyle, headerSize = "large" }: Props) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, headerSize === "small" && styles.smallText, headerSize === "large" && styles.largeText, headerStyle]}>
        {children}
      </Text>
    </View>
  );
}

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    textAlign: "center",
    color: Colors.text,
    fontWeight: "800", // Extra Bold
    letterSpacing: 1,
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  largeText: {
    fontSize: 32,
    marginBottom: 8,
  },
  smallText: {
    fontSize: 24,
  },
});
