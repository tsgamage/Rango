export const Colors = {
  primary: "#10B981", // Modern Emerald
  primaryDark: "#047857",
  primaryLight: "#34D399",
  background: "#022c22", // Deep Jungle Night
  surface: "#064E3B",
  text: "#ECFDF5", // Mint white
  textSecondary: "#A7F3D0",
  textHighlight: "#34D399",
  icon: "#D1FAE5",
  border: "rgba(167, 243, 208, 0.2)",
  glass: "rgba(255,255,255,0.1)",
  glassBorder: "rgba(255,255,255,0.2)",
  gradients: {
    primary: ["#022c22", "#064E3B", "#065F46"] as const, // Dark Emerald Deep Gradient
    button: ["#10B981", "#059669", "#047857"] as const, // Rich Emerald Gradient
  },
  light: {
    text: "#064E3B",
    background: "#ECFDF5",
    icon: "#059669",
    tabIconDefault: "#059669",
  },
  dark: {
    text: "#ECFDF5",
    background: "#022c22",
    icon: "#34D399",
    tabIconDefault: "#34D399",
  },
};

export const FontSize = {
  superLarge: 48,
  extraExtraLarge: 32,
  extraLarge: 28,
  large: 24,
  medium: 20,
  small: 16,
  extraSmall: 14,
  tiny: 12,
};
