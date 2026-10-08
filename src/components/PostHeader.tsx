import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "./Avatar";
import { colors } from "@/constants/colors";
import { User } from "@/types";

type PostHeaderProps = {
  user: User;
};

//profile pic, username, Follow button, and menu
export default function PostHeader({ user }: PostHeaderProps) {
  return (
    <View style={styles.container}>
      <Avatar uri={user.avatar} size={34} />
      <Text style={styles.username}>{user.username}</Text>
      {user.verified && (
        <Ionicons name="checkmark-circle" size={14} color={colors.verified} />
      )}
      <View style={styles.spacer} />
      <View style={styles.followButton}>
        <Text style={styles.followText}>Follow</Text>
      </View>
      <Ionicons name="ellipsis-horizontal" size={20} color={colors.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  username: { color: colors.text, fontWeight: "600", fontSize: 14 },
  spacer: { flex: 1 },
  followButton: {
    backgroundColor: colors.button,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 6,
  },
  followText: { color: colors.text, fontWeight: "600", fontSize: 13 },
});