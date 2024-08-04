import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Animated, {
  Easing,
  measure,
  runOnJS,
  useAnimatedProps,
  useAnimatedRef,
  useFrameCallback,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Circle, Svg } from "react-native-svg";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const BasicSVG = () => {
  const pressed = useSharedValue<boolean>(false);
  const refView = useAnimatedRef();

  const getRad = () => {
    "worklet";
  };
  const tap = Gesture.Tap()
    .onBegin(() => {
      pressed.value = true;
    })
    .onFinalize(() => {
      pressed.value = false;
    });

  const pan = Gesture.Pan().onChange(() => {});
  const rad = useSharedValue(24);
  const [text, setText] = useState<number>(rad.value);
  const radProps = useAnimatedProps(() => ({
    r: withRepeat(
      withSequence(
        withTiming(rad.value, {
          duration: 1000,
          easing: Easing.inOut(Easing.quad),
        }),
        withSpring(rad.value + 100, {
          mass: 1,
          stiffness: 100,
          damping: 10,
          //   overshootClamping: false,
          //   restDisplacementThreshold: 0.01,
          //   restSpeedThreshold: 2,
        })
      ),
      -1,
      true
    ),
    // cx={width * 0.5 - rad.value / 2}
    // cy={height * 0.5 - rad.value / 2}
    // fill: pressed.value ? "#FFE04B" : "#B58DF1",
  }));

  useFrameCallback(() => {
    const measurement = measure(refView);
    if (measurement === null) {
      return;
    }
    runOnJS(setText)(Math.floor(measurement.width));
  });

  return (
    <View style={styles.container}>
      <Svg>
        <GestureDetector gesture={tap}>
          <AnimatedCircle
            ref={refView}
            // strokeWidth={4}
            fill={pressed.value ? "#FFE04B" : "#B58DF1"}
            // fill="#B58DF1"
            cx={"50%"}
            cy={"50%"}
            animatedProps={radProps}
          />
        </GestureDetector>
      </Svg>
      <Text>{text}</Text>
    </View>
  );
};

export default BasicSVG;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
