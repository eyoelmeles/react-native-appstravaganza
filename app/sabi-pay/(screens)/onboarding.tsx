import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Dimensions,
  useColorScheme,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesignIcons from "@expo/vector-icons/AntDesign";
import { WALLET_COLORS, WALLET_FONTS } from "../(constant)/theme";

interface OnboardingProps {
  data: OnboardingItem[];
  buttonBackgroundColor?: string;
  dotBackgroundColor?: string;
  onFinish: () => void;
  buttonIconColor?: string;
}

interface OnboardingItem {
  _id: number;
  image: string;
  title: string;
  description: string;
}

const Onboarding: React.FC<OnboardingProps> = ({
  data,
  buttonBackgroundColor = "",
  dotBackgroundColor = "",
  onFinish,
  buttonIconColor = "",
}) => {
  const { width, height } = Dimensions.get("window");

  const colorScheme = useColorScheme();

  const COLORS = {
    primary: buttonBackgroundColor ? buttonBackgroundColor : "red",
    background: colorScheme === "dark" ? "#171717" : "#FFFFFF",
    text: colorScheme === "dark" ? "#FFFF" : "#171717",
    dotBgColor: dotBackgroundColor ? dotBackgroundColor : "red",
  };

  const SIZES = {
    base: 10,
    width,
    height,
  };

  const flatlistRef = useRef<FlatList>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState<OnboardingItem[]>([]);

  const handleViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: any;
  }) => {
    setViewableItems(viewableItems);
  };

  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0]._id) return;
    console.log(viewableItems[0]);
    setCurrentPage(viewableItems[0]._id);
  }, [viewableItems]);

  const handleNext = () => {
    if (currentPage === data.length - 1) return;
    flatlistRef.current?.scrollToIndex({
      animated: true,
      index: currentPage + 1,
    });
  };

  const handleBack = () => {
    if (currentPage === 0) return;
    flatlistRef.current?.scrollToIndex({
      animated: true,
      index: currentPage - 1,
    });
  };

  const handleSkipToEnd = () => {
    flatlistRef.current?.scrollToIndex({
      animated: true,
      index: data.length - 1,
    });
  };

  const renderTopSection = () => {
    return (
      <View
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          padding: 4,
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity onPress={handleSkipToEnd}>
          <Text style={[{ ...WALLET_FONTS.body4 }]}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderBottomSection = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: SIZES.base * 2,
          paddingVertical: SIZES.base * 2,
        }}
      >
        {/* Pagination */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {
            // No. of dots
            [...Array(data.length)].map((_, index) => (
              <View
                key={index}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: WALLET_COLORS.darkgray,
                  marginRight: 8,
                  opacity: index == currentPage ? 1 : 0.2,
                }}
              />
            ))
          }
        </View>

        {/* Next or GetStarted button */}
        {/* Show or Hide Next button & GetStarted button by screen */}
        {currentPage != data.length - 1 ? (
          <TouchableOpacity
            onPress={handleNext}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: COLORS.primary,
            }}
            activeOpacity={0.8}
          >
            <AntDesignIcons
              name="right"
              style={{
                fontSize: 18,
                color: buttonIconColor ? buttonIconColor : COLORS.text,
                opacity: 0.3,
              }}
            />
            <AntDesignIcons
              name="right"
              style={{
                fontSize: 25,
                color: buttonIconColor ? buttonIconColor : COLORS.text,
                marginLeft: -15,
              }}
            />
          </TouchableOpacity>
        ) : (
          // Get Started Button
          <TouchableOpacity
            style={{
              paddingHorizontal: SIZES.base * 2,
              height: 60,
              borderRadius: 30,
              backgroundColor: COLORS.primary,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={onFinish}
          >
            <Text
              style={{
                color: buttonIconColor ? buttonIconColor : COLORS.text,
                fontSize: 18,
                marginLeft: SIZES.base,
              }}
            >
              Get Started
            </Text>
            <AntDesignIcons
              name="right"
              style={{
                fontSize: 18,
                color: buttonIconColor ? buttonIconColor : COLORS.text,
                opacity: 0.3,
                marginLeft: SIZES.base,
              }}
            />
            <AntDesignIcons
              name="right"
              style={{
                fontSize: 25,
                color: buttonIconColor ? buttonIconColor : COLORS.text,
                marginLeft: -15,
              }}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderFlatlistItem = ({ item }: { item: OnboardingItem }) => {
    return (
      <View
        style={{
          width: SIZES.width,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginVertical: SIZES.base * 2,
          }}
        >
          <Image source={require("../../../assets/favicon.png")} />
        </View>
        <View
          style={{
            paddingHorizontal: SIZES.base * 4,
            marginVertical: SIZES.base * 4,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
              color: COLORS.text,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 18,
              opacity: colorScheme == "dark" ? 0.7 : 0.5,
              textAlign: "center",
              marginTop: 15,
              lineHeight: 28,
              color: COLORS.text,
            }}
          >
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  const handleViewableItemsChange = useRef((x: any) => {
    console.log(x.viewableItems);
    // alert(x);
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: "center",
      }}
    >
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={COLORS.background}
      />
      {renderTopSection()}

      <FlatList
        data={data}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderFlatlistItem}
        ref={flatlistRef}
        onViewableItemsChanged={handleViewableItemsChanged}
        // onViewableItemsChanged={handleViewableItemsChange.current}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 10 }}
        initialNumToRender={1}
        extraData={SIZES.width}
        bounces={false}
      />
      {renderBottomSection()}
    </SafeAreaView>
  );
};

export default Onboarding;
