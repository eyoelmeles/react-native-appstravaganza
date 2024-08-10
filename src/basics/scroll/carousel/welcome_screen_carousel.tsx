import * as React from "react";
import {
  StatusBar,
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
const { width, height } = Dimensions.get("screen");

// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312

const bgs = ["#A5BBFF", "#DDBEFE", "#FF63ED", "#B98EFF"];
const DATA = [
  {
    key: "3571572",
    title: "Multi-lateral intermediate moratorium",
    description:
      "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    image: "https://image.flaticon.com/icons/png/256/3571/3571572.png",
  },
  {
    key: "3571747",
    title: "Automated radical data-warehouse",
    description:
      "Use the optical SAS system, then you can navigate the auxiliary alarm!",
    image: "https://image.flaticon.com/icons/png/256/3571/3571747.png",
  },
  {
    key: "3571680",
    title: "Inverse attitude-oriented system engine",
    description:
      "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
    image: "https://image.flaticon.com/icons/png/256/3571/3571680.png",
  },
  {
    key: "3571603",
    title: "Monitored global data-warehouse",
    description: "We need to program the open-source IB interface!",
    image: "https://image.flaticon.com/icons/png/256/3571/3571603.png",
  },
];

const Dots = ({ scrollX }: any) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 100,
        left: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {DATA.map((_, index) => {
        const scale = scrollX.interpolate({
          inputRange: [(index - 1) * width, index * width, (index + 1) * width],
          outputRange: [0.4, 1.2, 0.4],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange: [(index - 1) * width, index * width, (index + 1) * width],
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={index.toString()}
            style={{
              width: 12,
              height: 12,
              borderRadius: 10,
              backgroundColor: "#fff",
              margin: 6,
              opacity,
              transform: [{ scale }],
            }}
          />
        );
      })}
    </View>
  );
};

const Backdrop = ({ scrollX }: any) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, index) => index * width),
    outputRange: bgs,
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFill, { backgroundColor }]}
    ></Animated.View>
  );
};

const Square = ({ scrollX }: any) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );
  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["35deg", "0deg", "35deg"],
  });
  return (
    <Animated.View
      style={{
        width: height,
        height,
        borderRadius: 86,
        backgroundColor: "#fff",
        position: "absolute",
        top: -height * 0.6,
        left: -height * 0.33,
        transform: [{ rotate }],
      }}
    />
  );
};

export default function WelcomeScreenCarousel() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <FlatList
        data={DATA}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.2, 1, 0.2],
          });
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
          });
          return (
            <View style={{ width, height, alignItems: "center", padding: 9 }}>
              <View
                style={{
                  flex: 0.7,
                  justifyContent: "center",
                }}
              >
                <Animated.View
                  style={{
                    width: 120,
                    height: 120,
                    backgroundColor: "lime",
                    opacity,
                    transform: [{ scale }],
                  }}
                />
              </View>
              <View style={{ flex: 0.3 }}>
                <View style={{ gap: 8 }}>
                  <Text
                    style={{ color: "#fff", fontWeight: "800", fontSize: 28 }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{ color: "#fff", fontWeight: "300", fontSize: 20 }}
                  >
                    {item.description}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
      <Dots scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
