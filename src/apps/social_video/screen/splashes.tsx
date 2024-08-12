import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export function SplashOne() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["green", "lime"]}
        style={[StyleSheet.absoluteFillObject]}
      />
      <View style={{ height: height * 0.5 }}></View>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>What is Game</Text>
      </TouchableOpacity>
    </View>
  );
}

export function SplashTwo() {
  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
}

export function SplashThree() {
  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    backgroundColor: "#000",
    borderRadius: 16,
    padding: 16,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#fff",
  },
});
