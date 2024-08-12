import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const { height, width } = Dimensions.get("window");
const BACKDROP_HEIGHT = height * 0.65;

const Backdrop = ({ scrollX, movies }: any) => {
  return (
    <View style={{ height: BACKDROP_HEIGHT, width, position: "absolute" }}>
      {/* <Animated.FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => {
          return (
            <View removeClippedSubviews={false}>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      /> */}
    </View>
  );
};

const DynamicWidth = () => {
  const [movies, setMovies] = React.useState([
    {
      id: "1",
      name: "Bad Boys 1",
    },
    {
      id: "2",
      name: "Bad Boys 2",
    },
    {
      id: "3",
      name: "Bad Boys 3",
    },
  ]);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} movies={movies} />
      <Animated.FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        horizontal
        snapToInterval={width * 0.7}
        bounces={false}
        scrollEventThrottle={16}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * (width * 0.7),
            index * (width * 0.7),
            (index + 1) * (width * 0.7),
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.7, 1, 0.7],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              style={[styles.card, { transform: [{ scale }], opacity }]}
            >
              <Text style={styles.cardText}>{item.name}</Text>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default DynamicWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: width * 0.7,
    height: 200,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
