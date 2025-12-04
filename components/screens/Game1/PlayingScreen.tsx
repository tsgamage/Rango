import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import GameWrapper from "../../ui/GameWrapper";
import PrimaryButton from "../GameMod/PrimaryButton";
import { FontSize } from "../../../constants/theme";
import { pickRandomIndex } from "../../../utils/utils";
import ScreenHeader from "../../ui/ScreenHeader";

interface Props {
  onPlay: () => void;
  onPause: () => void;
}

function PlayingScreen({ onPlay, onPause }: Props) {
  const dynamicLieMessages = [
    "You are not telling the truth",
    "Why bullying the app huh",
    "I'm not dumb you know",
    "Someone is cheatinggg",
    "Stop trolling me",
  ];

  return (
    <GameWrapper onPlay={onPlay} onPause={onPause}>
      <ScreenHeader>I'm thinking of a number…</ScreenHeader>
      <ScreenHeader headerSize="small">Guess the number if you can</ScreenHeader>

      <View style={styles.container}>
        <View>
          <Text style={styles.attemptsText}>Remaining Attempts: 10</Text>
        </View>
        <View style={styles.inputContainer}>
          <ScreenHeader headerSize="small">Enter your guess below.</ScreenHeader>
          <TextInput
            style={styles.input}
            placeholderTextColor="gray"
            keyboardType="numeric"
            inputMode="numeric"
            onChangeText={(text) => {}}
            maxLength={2}
          />
          <PrimaryButton label="Submit" buttonContainerStyle={styles.submitButtonContainer} onPress={() => {}} />
        </View>
      </View>
    </GameWrapper>
  );
}

export default PlayingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  attemptsText: {
    fontSize: FontSize.medium,
    color: "black",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    fontSize: FontSize.extraLarge,
    color: "black",
    textAlign: "center",
  },
  inputContainer: {
    gap: 10,
    backgroundColor: "whitesmoke",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  submitButtonContainer: {
    paddingVertical: 10,
  },
});
