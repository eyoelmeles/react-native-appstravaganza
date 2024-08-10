import {
  Dimensions,
  FlatList,
  FlatListProps,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { SharedElement } from "react-navigation-shared-element";

const { width, height } = Dimensions.get("window");
const SPACING = 16;
const ICON_SIZE = 56;
const ITEM_WIDTH = width * 0.6;

const DATA = [
  {
    imageUri: "https://image.flaticon.com/icons/png/128/2990/2990502.png",
    title: "Ukelele",
    id: "2990502",
  },
  {
    imageUri: "https://image.flaticon.com/icons/png/128/2990/2990505.png",
    title: "Sea",
    id: "2990505",
  },
  {
    imageUri: "https://image.flaticon.com/icons/png/128/2990/2990502.png",
    title: "Banana",
    id: "2990510",
  },
  {
    imageUri: "https://image.flaticon.com/icons/png/128/2990/2990502.png",
    title: "Coconut tree",
    id: "2990512",
  },
  {
    imageUri: "https://image.flaticon.com/icons/png/128/2990/2990502.png",
    title: "Bikini",
    id: "2990543",
  },
  {
    imageUri: "https://image.flaticon.com/icons/png/128/2990/2990508.png",
    title: "Bottoms",
    id: "2990548",
  },
];

const SLIDER_DATA = [
  {
    title: "Sunny day",
    color: "turquoise",
  },
  {
    title: "Sand & beach",
    color: "aquamarine",
  },
  {
    title: "Coktails & Party",
    color: "tomato",
  },
  {
    title: "All-inclusive",
    color: "#A531F9",
  },
];

const Icon = ({ uri }: { uri: string }) => {
  return (
    <View style={[styles.imageContainer]}>
      <Image source={{ uri }} style={[styles.image]} />
    </View>
  );
};

const BackIcon = ({ onPress }: any) => {
  return (
    <AntDesign
      name="arrowleft"
      size={24}
      style={{ padding: 12 }}
      color="#333"
      onPress={onPress}
    />
  );
};

const SharedElementOptions = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MarketingSlide />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 20,
        }}
      >
        {DATA.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{ padding: SPACING }}
              onPress={() => {
                navigation.navigate("Detail", { item });
              }}
            >
              <SharedElement id={item.id}>
                <Icon uri={item.imageUri} />
              </SharedElement>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export const Detail = ({ navigation }: any) => {
  const item = DATA[0];
  const ref = React.useRef<any>();
  const selectedItemIndex = DATA.findIndex((i) => i.id);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackIcon
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "nowrap",
          marginVertical: 20,
        }}
      >
        <SharedElement id={item.id}>
          {DATA.map((item) => (
            <TouchableOpacity style={{ padding: SPACING }} key={item.id}>
              <Icon uri={item.imageUri} />
            </TouchableOpacity>
          ))}
        </SharedElement>
      </View>
      <FlatList
        ref={ref}
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        initialScrollIndex={selectedItemIndex}
        nestedScrollEnabled
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <ScrollView
              style={{
                width: width - SPACING * 2,
                margin: SPACING,
                backgroundColor: "rgba(0,0,0,0.05)",
                borderRadius: 16,
              }}
            >
              <View style={{ padding: SPACING }}>
                <Text style={{ fontSize: 16 }}>
                  {Array(50).fill(`${item.title} inner text \n`)}
                </Text>
              </View>
            </ScrollView>
          );
        }}
      />
    </SafeAreaView>
  );
};

const MarketingSlide = () => {
  return (
    <FlatList
      data={SLIDER_DATA}
      keyExtractor={(item) => item.color}
      horizontal
      snapToInterval={ITEM_WIDTH + SPACING * 2}
      contentContainerStyle={{
        paddingRight: width - ITEM_WIDTH - SPACING * 2,
      }}
      decelerationRate="fast"
      renderItem={({ item }) => {
        return (
          <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        );
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default SharedElementOptions;

const styles = StyleSheet.create({
  imageContainer: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: ICON_SIZE * 0.6,
    height: ICON_SIZE * 0.6,
    resizeMode: "contain",
  },
  itemContainer: {
    padding: SPACING,
    width: ITEM_WIDTH,
    height: height * 0.2,
    margin: SPACING,
    borderRadius: 14,
  },
  itemText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});
