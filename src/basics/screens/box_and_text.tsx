import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { faker } from "@faker-js/faker";
import { Entypo } from "@expo/vector-icons";
import { Viga_400Regular, useFonts } from "@expo-google-fonts/viga";

const SPACING = 20;

const data = Array(2)
  .fill(0)
  .map(() => ({
    name: faker.company.name(),
    street: faker.location.street(),
    time: faker.date.between({
      from: "2020-01-01T00:00:00.000Z",
      to: "2020-01-01T00:09:10.000Z",
    }),
  }));

const BoxAndText = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const [loaded, error] = useFonts({ Viga_400Regular });

  return (
    <>
      <LinearGradient
        colors={["#006666", "#003333"]}
        style={StyleSheet.absoluteFillObject}
      />

      <SafeAreaView>
        <ScrollView
          onScroll={(event) => {
            scrollY.setValue(event.nativeEvent.contentOffset.y);
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => {}}>
                <Entypo name="bell" color="#fff" size={26} />
              </TouchableOpacity>
            </View>
            <View style={{ gap: 8 }}>
              <Text numberOfLines={1} style={[styles.h4, { color: "#fff" }]}>
                Lookin' good, Joe
              </Text>
              <View>
                <Text
                  style={[
                    styles.heading,
                    {
                      color: "#fff",
                      fontFamily: "Viga_400Regular",
                      fontSize: 42,
                    },
                  ]}
                >
                  Make Everyday
                </Text>
                <Text style={[styles.heading, { color: "#fff" }]}>
                  a great hair day
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.card,
                {
                  flexDirection: "row",
                  gap: SPACING,
                  alignItems: "center",
                  padding: 12,
                },
              ]}
            >
              <Image
                source={{
                  uri: "https://miro.medium.com/v2/resize:fit:1200/1*ybR6fbfwo6XTmWvTjXSOAA.png",
                }}
                resizeMode="cover"
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text style={[styles.h5]}>Find a salon near you</Text>
                <Text style={[styles.linkText]}>View map</Text>
              </View>
            </View>
            {data?.map((item, index) => (
              <View key={`${index}-${item.name}`} style={[styles.card]}>
                <View style={{ gap: SPACING * 0.4 }}>
                  <View
                    style={[
                      styles.divider,
                      { gap: SPACING * 0.2, paddingVertical: SPACING * 0.2 },
                    ]}
                  >
                    <Text style={[styles.p, { textTransform: "uppercase" }]}>
                      Estimated wait
                    </Text>
                    <Text style={[styles.title, { color: "#006666" }]}>
                      20 min
                    </Text>
                  </View>
                  <View
                    style={{
                      gap: SPACING * 0.2,
                      paddingVertical: SPACING * 0.4,
                    }}
                  >
                    <Text style={styles.h5}>{item.name}</Text>
                    <Text>1234 Main st</Text>

                    <View style={{ flexDirection: "row", gap: SPACING * 0.4 }}>
                      <Text>Open</Text>
                      <Text>9PM</Text>
                      <Text>0.5</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
            <Text style={[styles.h4, { color: "#fff" }]}>
              OTHER SALONS FOR YOU
            </Text>
            <View style={[styles.card]}>
              <Text>Evergreen Center</Text>
              <View style={styles.divider}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text>3800 Cedar St</Text>
                    <View style={{ flexDirection: "row", gap: SPACING * 0.4 }}>
                      <Text>Open</Text>
                      <Text>9PM-12PM</Text>
                      <Text>0.5mi</Text>
                    </View>
                  </View>
                  <View style={{ alignItems: "flex-end" }}>
                    <Text style={[styles.h5, { color: "#" }]}>37 min</Text>
                    <Text>EST WAIT</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default BoxAndText;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    gap: SPACING,
    marginHorizontal: 16,
    // backgroundColor: "green",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  heading: {
    fontSize: 28,
    fontWeight: "800",
  },
  title: {
    fontSize: 42,
    fontWeight: "700",
  },
  h4: {
    fontSize: 20,
  },
  h5: {
    fontSize: 18,
    fontWeight: "800",
  },
  linkText: {
    fontSize: 18,
    color: "#006666",
    fontWeight: "600",
  },
  p: {
    fontSize: 14,
    fontWeight: "400",
  },
  divider: {
    borderBottomWidth: 2,
    borderColor: "#ccc",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: SPACING,
    shadowColor: "#ddd",
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});
