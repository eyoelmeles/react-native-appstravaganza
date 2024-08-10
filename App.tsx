import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { routes } from "routes";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "@/basics";
const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={() => ({
            headerShown: false,
          })}
        >
          <Stack.Screen key={"Home"} name={"Home"} component={Home} />
          {routes.map((route) => (
            <Stack.Screen
              key={route.route}
              name={route.route}
              component={route.component}
              options={route.options}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
