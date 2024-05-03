import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SabiPayHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text>Hello</Text>
          <Text>SabiPayHome</Text>
        </View>
        <Text>Notif.</Text>
      </View>
      <View style={[styles.card, { backgroundColor: "green" }]}></View>
    </View>
  );
};

export default SabiPayHome;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    width: "100%",
    height: 200,
  },
});
