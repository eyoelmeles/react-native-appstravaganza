import { Text, View, StyleSheet } from "react-native";
import { APP_LIST } from "../apps";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default () => {
  return (
    <View style={styles.constainer}>
      <SafeAreaView>
        {APP_LIST.map((app, index) => (
          <Link key={index} href={app.route}>
            <View style={styles.app_list}>
              <Text>{app.name}</Text>
            </View>
          </Link>
        ))}
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
