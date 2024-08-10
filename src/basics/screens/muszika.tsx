import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const data = [
  {
    name: "Jazz",
    items: [
      {
        label: "Down under",
        image: "",
      },
    ],
  },
  {
    name: "Electonic",
    items: [
      {
        label: "Down under",
        image: "",
      },
    ],
  },
  {
    name: "Rock",
    items: [
      {
        label: "Rock Down under",
        image: "",
      },
    ],
  },
];

const Muzika = () => {
  const [index, setIndex] = React.useState<number>(0);
  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            fontSize: 48,
            color: "#000",
            fontWeight: "800",
            fontStyle: "italic",
          }}
        >
          Muzika
        </Text>
        <Text style={{ fontSize: 18, fontStyle: "italic" }}>
          For the timeless master pieces, that defines man kind, and the
          existance of conciousness
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View>
            <FlatList
              data={data}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View style={{ backgroundColor: "tomato" }}>
                  <TouchableOpacity
                    onPress={() => {
                      setIndex(index);
                    }}
                  >
                    <Text style={{ color: "#000" }}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          <FlatList
            data={data[index].items}
            style={{ backgroundColor: "lime" }}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={[styles.card]}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <Text>{item.label}</Text>
                  <TouchableOpacity>
                    <Text>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Muzika;

const styles = StyleSheet.create({
  card: {},
});
