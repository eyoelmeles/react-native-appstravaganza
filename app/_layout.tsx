import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="food_delivery/(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="sabi-pay" options={{ headerShown: false }} />
    </Stack>
  );
}
