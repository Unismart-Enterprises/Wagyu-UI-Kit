import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#7dcc32",
  primaryBright: "#4a130c",
  primaryDark: "#599e17",
  secondary: "#571E1A",
  success: "#68CF29",
  warning: "#FFAB2D",
};

export const brandColors = {
  binance: "#e5b502",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#7dcc32",
  backgroundDisabled: "#571E1A",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputBorder: "#cccccc",
  tertiary: "#EFF4F5",
  text: "#e5b502",
  textDisabled: "#BDC2C4",
  textSubtle: "#7dcc32",
  borderColor: "#E9EAEB",
  card: "#571E1A",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#e9f1fd",
  background: "#7dcc32",
  backgroundDisabled: "#571E1A",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputBorder: "#cccccc",
  tertiary: "#EFF4F5",
  text: "#e5b502",
  textDisabled: "#BDC2C4",
  textSubtle: "#7dcc32",
  borderColor: "#E9EAEB",
  card: "#571E1A",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};
