# Rango - The Number Guessing Game

Rango is a modern, interactive, and visually engaging number guessing game built with **React Native** and **Expo**. Designed with a focus on aesthetics and user experience, it features dynamic game modes, liquid animations, and a polished glassmorphism-inspired UI.

## 🚀 Features

### 🎮 Multiple Game Modes

Challenge your intuition or test the computer's logic with two distinct ways to play:

- **I Will Guess (Game 1)**: The classic mode where Rango picks a random number, and you have to guess it.
  - **Zen Mode**: A relaxed experience with unlimited attempts. Perfect for casual play.
  - **Challenge Mode**: Race against the clock or limited attempts to beat Rango's challenge. customizable difficulty settings.
- **Rango Will Guess (Game 2)**: Turn the tables! Pick a number, and guide Rango to the answer using hints (Lower/Higher). Watch the AI deduce your number efficiently.

### ✨ Premium UI/UX

- **Modern Design**: A sleek interface featuring linear gradients, glassmorphism effects, and a custom color palette.
- **Haptic Feedback**: Meaningful tactile responses for interactions (if implemented support is active).

## 🛠️ Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) (via [Expo](https://expo.dev/))
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Navigation**: [React Navigation](https://reactnavigation.org/) (Native Stack)
- **Styling**: StyleSheet with custom theme constants (`expo-linear-gradient`, `react-native-safe-area-context`).
- **Icons**: `@expo/vector-icons`

## 📂 Project Structure

```
Rango/
├── assets/          # Images and static assets
├── components/      # Reusable UI components
│   ├── screens/     # Screen-specific logical components (e.g., Game1)
│   └── ui/          # Generic UI elements (Buttons, Headers, Cards)
├── constants/       # Global configurations (Colors, Fonts)
├── screens/         # Main application screens (Views)
├── store/           # Redux store and slices
├── utils/           # Helper functions and utilities
└── App.tsx          # Application entry point
```

## ⚡ Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (LTS version recommended)
- npm, yarn, or pnpm
- Expo Go app on your physical device (Android/iOS) OR an Emulator/Simulator.

### Installation

1.  **Clone the repository** (or navigate to the project directory):

    ```bash
    cd Rango
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Running the App

Start the Expo development server:

```bash
npx expo start
```

- **Scan the QR code** with the **Expo Go** app on your Android (or Camera app on iOS).
- Press `a` to open in Android Emulator.
- Press `i` to open in iOS Simulator.
- Press `w` to open in Web Browser.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
