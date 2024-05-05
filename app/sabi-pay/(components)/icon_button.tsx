import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { WALLET_COLORS } from "../(constant)/theme";

interface IconButtonProps {
  onPress: () => void;
  rounded: boolean;
  size: "large" | "medium" | "small";
}

const IconButton = (props: PropsWithChildren<IconButtonProps>) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        { ...styles.container },
        {
          borderRadius: props.rounded ? 100 : 2,
          width:
            props.size === "large" ? 60 : props.size === "medium" ? 45 : 36,
          height:
            props.size === "large" ? 60 : props.size === "medium" ? 45 : 36,
        },
      ]}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    padding: 2,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: WALLET_COLORS.darkgray,
  },
});
