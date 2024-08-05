import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import BasicSVG from "@/basics/svg";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SwipteCarousel from "@/basics/scroll/carousel/swipe_carousel";
import Carousel3D from "@/basics/scroll/carousel/3d_carousel";
import VerticalSlide from "@/basics/scroll/slide/vertical_slide";

export default function AnimatedStyleUpdateExample() {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <GestureMovement /> */}
      {/* <BasicSVG /> */}
      {/* <SwipteCarousel /> */}
      {/* <Carousel3D /> */}
      <VerticalSlide />
    </GestureHandlerRootView>
  );
}
