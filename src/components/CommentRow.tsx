import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "./Avatar";
import { colors } from "@/constants/colors";
import { Comment } from "@/types";

type CommentRowProps = {
  comment: Comment;
};

// one comment: profile pic, username, time, text, and likes
export default function CommentRow({ comment }: CommentRowProps) {
  return (
    <View style={styles.container}>
      <Avatar uri={comment.user.avatar} size={36} />

      <View style={styles.body}>
        <Text style={styles.username}>
          {comment.user.username}{" "}
          <Text style={styles.muted}>{comment.timeAgo}</Text>
        </Text>
        <Text style={styles.text}>{comment.text}</Text>
        <Text style={styles.reply}>Reply</Text>
      </View>

      <View style={styles.like}>
        <Ionicons name="heart-outline" size={18} color={colors.textMuted} />
        <Text style={styles.muted}>{comment.likes}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  body: { flex: 1 },
  username: { color: colors.text, fontWeight: "600", fontSize: 13 },
  muted: { color: colors.textMuted, fontSize: 12, fontWeight: "400" },
  text: { color: colors.text, fontSize: 15, marginTop: 2 },
  reply: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: "600",
    marginTop: 6,
  },
  like: { alignItems: "center", gap: 2, paddingTop: 4 },
});