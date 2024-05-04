import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { WALLET_COLORS, WALLET_SIZES } from "../(constant)/theme";

interface ButtonProps<T> {
  title: string;
  onPress: () => void;
  variant?: "solid" | "outlined" | "plain";
  size?: "small" | "large";
  textColor?: string;
  style?: object;
  textStyle?: object;
  fullWidth?: boolean;
  color?: string;
}

export default function Button<T>(props: ButtonProps<T>) {
  const buttonStyle = {
    backgroundColor: props.variant === "solid" ? props.color : "transparent",
    borderColor: props.color,
    borderWidth: props.variant === "outlined" ? 2 : 0,
    borderRadius: 2,
    width: props.fullWidth ? "auto" : undefined,
    padding:
      props.size === "small"
        ? WALLET_SIZES.padding * 1.2
        : WALLET_SIZES.padding * 2,
  };
  const textStyle = {
    fontSize:
      props.size === "small" ? WALLET_SIZES.font - 2 : WALLET_SIZES.font,
    color: props.textColor,
  };
  return (
    <TouchableOpacity
      style={[props.style, buttonStyle]}
      onPress={() => props.onPress()}
    >
      <Text style={[styles.text, textStyle, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: WALLET_SIZES.font,
    color: WALLET_COLORS.white,
    textAlign: "center",
  },
});
