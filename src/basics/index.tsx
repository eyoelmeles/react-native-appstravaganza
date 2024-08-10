import {
  Button,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { routes } from "routes";

const { width } = Dimensions.get("window");

const Home = ({ navigation }: any) => {
  const handleNavigate = (route: string) => {
    navigation.push(route);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={routes}
          keyExtractor={(item) => item.route}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => handleNavigate(item.route)}
                style={styles.card}
              >
                <Text>{item.route}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  card: {
    width,
    height: 80,
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#fff",
    shadowOpacity: 0.7,
    shadowColor: "#ccc",
    elevation: 12,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 16,
    justifyContent: "center",
  },
});
