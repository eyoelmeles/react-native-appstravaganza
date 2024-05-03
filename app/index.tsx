import { Text, View, StyleSheet } from "react-native";
import { APP_LIST } from "../apps";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { WALLET_FONTS } from "./crypto_wallet/(constant)/theme";

export default () => {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
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
        <Text style={[WALLET_FONTS.h1]}>APPS LIST</Text>
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
