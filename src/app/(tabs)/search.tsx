import { View, Text } from "react-native";

export default function SearchScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0c1014",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff" }}>Search</Text>
    </View>
  );
}