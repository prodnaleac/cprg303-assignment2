import { View, Text } from "react-native";

// Never shown: the Messages tab is icon only
export default function MessagesScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0c1014",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff" }}>Messages</Text>
    </View>
  );
}