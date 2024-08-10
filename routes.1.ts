import Home from "@/basics";
import BoxAndText from "@/basics/screens/box_and_text";
import Muzika from "@/basics/screens/muszika";
import Carousel3D from "@/basics/scroll/carousel/3d_carousel";
import VerticalSlide from "@/basics/scroll/slide/vertical_slide";
import CardSwipe from "@/basics/scroll/swipe/card_swipe";

export const routes = [
  {
    route: "Home",
    component: Home,
  },
  {
    route: "BasicSVG",
    component: BasicSVG,
  },
  {
    route: "SwipeCarousel",
    component: SwipeCarousel,
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
];
