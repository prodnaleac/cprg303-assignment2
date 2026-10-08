import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CommentRow from "@/components/CommentRow";
import Avatar from "@/components/Avatar";
import { comments } from "@/data/comments";
import { currentUser } from "@/data/users";
import { colors } from "@/constants/colors";

export default function CommentsScreen() {
  // gets the post id from the URL, then only shows that post's comments
  const { postId } = useLocalSearchParams<{ postId: string }>();
  const postComments = comments.filter(
    (comment) => comment.postId === postId,
  );

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      {/* grey bar at the top, like a bottom sheet */}
      <View style={styles.handle} />
      <View style={styles.header}>
        <Text style={styles.title}>Comments</Text>
        <Ionicons
          name="paper-plane-outline"
          size={24}
          color={colors.text}
          style={styles.share}
        />
      </View>

      <FlatList
        data={postComments}
        keyExtractor={(comment) => comment.id}
        renderItem={({ item }) => <CommentRow comment={item} />}
        ListEmptyComponent={<Text style={styles.empty}>No comments yet.</Text>}
      />

      {/* input bar at the bottom (just for looks) */}
      <View style={styles.inputRow}>
        <Avatar uri={currentUser.avatar} size={40} />
        <View style={styles.input}>
          <Text style={styles.placeholder}>Join the conversation...</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  handle: {
    alignSelf: "center",
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.textMuted,
    marginTop: 10,
  },
  header: {
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  title: { color: colors.text, fontSize: 16, fontWeight: "700" },
  share: { position: "absolute", right: 16, top: 12 },
  empty: { color: colors.textMuted, textAlign: "center", marginTop: 40 },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  placeholder: { color: colors.textMuted, fontSize: 15 },
});