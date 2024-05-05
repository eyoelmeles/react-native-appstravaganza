import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { WALLET_COLORS, WALLET_FONTS } from "./(constant)/theme";
import Button from "./(components)/button";
import Onboarding from "./(screens)/onboarding";
import { router } from "expo-router";

const onboardingData = [
  {
    _id: 0,
    title: "Welcome to Our App",
    description: "Discover the features and benefits of our app.",
    image: "../../../assets/favicon.png",
  },
  {
    _id: 1,
    title: "Easy Navigation",
    description: "Find what you need quickly with our intuitive interface.",
    image: "../../../assets/favicon.png",
  },
  {
    _id: 2,
    title: "Personalized Experience",
    description: "Customize your settings to make the app your own.",
    image: "../../../assets/favicon.png",
  },
  {
    _id: 3,
    title: "Connect with Others",
    description:
      "Join our community and connect with like-minded indiv_iduals.",
    image: "../../../assets/favicon.png",
  },
  {
    _id: 4,
    title: "Get Started",
    description: "Create your account and start using our app today.",
    image: "../../../assets/favicon.png",
  },
];

const handleFinish = () => {
  router.push("/sabi-pay/(tabs)");
};

const OnBoarding = () => {
  return <Onboarding data={onboardingData} onFinish={handleFinish} />;
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    flex: 1,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    padding: 16,
    flex: 1,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 2,
    backgroundColor: WALLET_COLORS.primary,
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    left: 0,

    gap: 8,
    width: "100%",
  },
});
