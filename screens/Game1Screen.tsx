import { useState } from "react";
import { Text, View } from "react-native";
import { AppState } from "../App";
import OptionSelectingScreen from "../components/screens/Game1/OptionSelectingScreen";
import PlayingScreen from "../components/screens/Game1/PlayingScreen";

interface Props {
  onAppStateChange: (state: AppState) => void;
}

function Game1Screen({ onAppStateChange }: Props) {
  type GameState = "option_selecting" | "playing";
  const [gameState, setGameState] = useState<GameState>("option_selecting");

  const renderScreen = () => {
    switch (gameState) {
      case "option_selecting":
        return (
          <OptionSelectingScreen
            onContinue={() => setGameState("playing")}
            onGoingBack={() => onAppStateChange("game_mode_select")}
          />
        );
      case "playing":
        return (
          <PlayingScreen
            onPause={() => setGameState("option_selecting")}
            onPlay={() => setGameState("playing")}
          />
        );
      default:
        return null;
    }
  };
  return renderScreen();
}
export default Game1Screen;
