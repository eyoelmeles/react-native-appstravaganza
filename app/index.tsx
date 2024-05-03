import { Text, View, StyleSheet } from "react-native";
import { APP_LIST } from "../apps";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";

export default () => {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("../assets/fonts/Inter-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.constainer} onLayout={onLayoutRootView}>
      <SafeAreaView>
        <Text>APPS LIST</Text>
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
