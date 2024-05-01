import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default () => {
  return (
    <View style={styles.constainer}>
      <SafeAreaView>
        <Text>Welcome, 🍀</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "tomato",
  },
  app_list: {
    padding: 4,
  },
});
