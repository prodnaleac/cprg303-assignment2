import { View, Text, StyleSheet } from "react-native";
import Avatar from "./Avatar";
import { colors } from "@/constants/colors";
import { User } from "@/types";

type StoryBubbleProps = {
  user: User;
};

// One story circle with the username under it
export default function StoryBubble({ user }: StoryBubbleProps) {
  return (
    <View style={styles.container}>
      <View style={styles.ring}>
        <Avatar uri={user.avatar} size={72} />
      </View>
      <Text style={styles.username} numberOfLines={1}>
        {user.username}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: 86, alignItems: "center", marginRight: 8 },
  ring: {
    padding: 3,
    borderRadius: 44,
    borderWidth: 2.5,
    borderColor: colors.storyRing,
  },
  username: { color: colors.text, fontSize: 12, marginTop: 6 },
});