import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function CommentsScreen() {
  // Reads the post id from the URL, e.g. /comments/p1
  const { postId } = useLocalSearchParams<{ postId: string }>();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1c1f24",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff" }}>Comments for post {postId}</Text>
    </View>
  );
}