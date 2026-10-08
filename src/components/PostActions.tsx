import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";

type PostActionsProps = {
  commentCount: number;
  repostCount: number;
  onCommentPress: () => void;
};

//icons under a post. tapping the comment icon will open the comments
export default function PostActions({
  commentCount,
  repostCount,
  onCommentPress,
}: PostActionsProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="heart-outline" size={26} color={colors.text} />

      <Pressable style={styles.action} onPress={onCommentPress}>
        <Ionicons name="chatbubble-outline" size={24} color={colors.text} />
        <Text style={styles.count}>{commentCount}</Text>
      </Pressable>

      <View style={styles.action}>
        <Ionicons name="repeat-outline" size={26} color={colors.text} />
        <Text style={styles.count}>{repostCount}</Text>
      </View>

      <Ionicons name="paper-plane-outline" size={24} color={colors.text} />

      <View style={styles.spacer} />
      <Ionicons name="bookmark-outline" size={24} color={colors.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 16,
  },
  action: { flexDirection: "row", alignItems: "center", gap: 6 },
  count: { color: colors.text, fontWeight: "600", fontSize: 14 },
  spacer: { flex: 1 },
});