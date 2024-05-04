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

  const handleViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: OnboardingItem[] }) => {
      setViewableItems(viewableItems);
    }
  );

  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0]._id) return;
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
    // ...
  };

  const renderBottomSection = () => {
    // ...
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
          <Image source={require(item.image)} />
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

  return (
    <View
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
      {/* {renderTopSection()} */}
      <FlatList
        data={data}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id.toString()}
        renderItem={renderFlatlistItem}
        ref={flatlistRef}
        // onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 10 }}
        initialNumToRender={1}
        extraData={SIZES.width}
        bounces={false}
      />
      {/* {renderBottomSection()} */}
    </View>
  );
};

export default Onboarding;
