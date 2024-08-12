import BoxAndText from "@/basics/screens/box_and_text";
import Muzika from "@/basics/screens/muszika";
import Carousel3D from "@/basics/scroll/carousel/3d_carousel";
import SwipteCarousel from "@/basics/scroll/carousel/swipe_carousel";
import VerticalSlide from "@/basics/scroll/slide/vertical_slide";
import CardSwipe from "@/basics/scroll/swipe/card_swipe";
import BasicSVG from "@/basics/svg";
import SharedElementOptions, {
  Detail as SharedElementOptionDetail,
} from "@/basics/shared_element/shared_element_options";
import WelcomeScreenCarousel from "@/basics/scroll/carousel/welcome_screen_carousel";
import PartialWidthCarousel from "@/basics/scroll/carousel/partial_width";
import DynamicWidth from "@/basics/scroll/carousel/dynamic_width";
import SocialVideoNav from "@/apps/social_video";

export const routes = [
  {
    route: "BasicSVG",
    component: BasicSVG,
  },
  {
    route: "SwipeCarousel",
    component: SwipteCarousel,
  },
  {
    route: "Carousel3D",
    component: Carousel3D,
  },
  {
    route: "VerticalSlide",
    component: VerticalSlide,
  },
  {
    route: "CardSwipe",
    component: CardSwipe,
  },
  {
    route: "BoxAndText",
    component: BoxAndText,
  },
  {
    route: "Muzika",
    component: Muzika,
  },

  { route: "SharedElementOption", component: SharedElementOptions },
  {
    route: "SharedElementOptionDetail",
    component: SharedElementOptionDetail,
    options: {
      gestureEnabled: false,
      transitionSSpec: {
        open: { animation: "timing", config: { duration: 1000 } },
        close: { animation: "timing", config: { duration: 1000 } },
      },
      cardStyleInterpolator: ({ current: { progress } }: any) => {
        return {
          cardStyle: {
            opacity: progress,
          },
        };
      },
    },
  },
  {
    route: "WelcomeScreenCarousel",
    component: WelcomeScreenCarousel,
  },
  {
    route: "PartialWidthCarousel",
    component: PartialWidthCarousel,
  },
  {
    route: "DynamicWidth",
    component: DynamicWidth,
  },
  {
    route: "SocialVideoNav",
    component: SocialVideoNav,
  },
];
