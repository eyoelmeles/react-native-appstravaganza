import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Geeting = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ width: 100, height: 100 }}></View>
        <Text>Geeting</Text>
      </SafeAreaView>
      <View style={styles.buttonGroup}>
        <Button title="Register" />
        <Button title="Sign in" />
      </View>
    </View>
  );
};

export default Geeting;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  buttonGroup: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    bottom: 20,
    left: 16,
    width: "100%",
  },
  button: {
    flex: 1,
  },
});
