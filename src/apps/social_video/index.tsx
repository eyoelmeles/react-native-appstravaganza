import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { SplashOne, SplashThree, SplashTwo } from "./screen/splashes";

const Stack = createSharedElementStackNavigator();

const SocialVideoNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashOne" component={SplashOne} />
      <Stack.Screen name="SplashTwo" component={SplashTwo} />
      <Stack.Screen name="SplashThree" component={SplashThree} />
      <Stack.Screen name="Home" component={SplashThree} />
    </Stack.Navigator>
  );
};

export default SocialVideoNav;
