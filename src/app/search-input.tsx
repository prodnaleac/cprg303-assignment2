import { View, Text } from "react-native";

export default function SearchInputScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0c1014",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff" }}>Search input</Text>
    </View>
  );
}