import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "@/components/Avatar";
import { featuredReel } from "@/data/reels";
import { colors } from "@/constants/colors";

// full screen reel with icons on the right and user info at the bottom
export default function ReelsScreen() {
  const reel = featuredReel;

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* background picture */}
      {reel.image ? (
        <Image source={{ uri: reel.image }} style={StyleSheet.absoluteFill} />
      ) : null}

      {/* top bar */}
      <View style={styles.topBar}>
        <Ionicons name="add" size={30} color={colors.text} />
        <Text style={styles.title}>Reels</Text>
        <Ionicons name="options-outline" size={26} color={colors.text} />
      </View>

      {/* icons on the right side */}
      <View style={styles.actions}>
        <View style={styles.action}>
          <Ionicons name="heart-outline" size={30} color={colors.text} />
          <Text style={styles.actionLabel}>{reel.likes}</Text>
        </View>
        <View style={styles.action}>
          <Ionicons name="chatbubble-outline" size={28} color={colors.text} />
          <Text style={styles.actionLabel}>{reel.comments}</Text>
        </View>
        <View style={styles.action}>
          <Ionicons name="repeat-outline" size={30} color={colors.text} />
          <Text style={styles.actionLabel}>{reel.reposts}</Text>
        </View>
        <Ionicons name="paper-plane-outline" size={28} color={colors.text} />
        <Ionicons name="bookmark-outline" size={28} color={colors.text} />
      </View>

      {/* user info at the bottom */}
      <View style={styles.bottom}>
        <View style={styles.userRow}>
          <Avatar uri={reel.user.avatar} size={36} />
          <Text style={styles.username}>{reel.user.username}</Text>
          <View style={styles.followButton}>
            <Text style={styles.followText}>Follow</Text>
          </View>
        </View>
        <Text style={styles.caption} numberOfLines={1}>
          {reel.caption}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.placeholder },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  title: { color: colors.text, fontSize: 24, fontWeight: "700" },
  actions: {
    position: "absolute",
    right: 12,
    bottom: 110,
    alignItems: "center",
    gap: 22,
  },
  action: { alignItems: "center", gap: 4 },
  actionLabel: { color: colors.text, fontSize: 13, fontWeight: "600" },
  bottom: {
    position: "absolute",
    left: 14,
    right: 70,
    bottom: 20,
  },
  userRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  username: { color: colors.text, fontWeight: "700", fontSize: 15 },
  followButton: {
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  followText: { color: colors.text, fontWeight: "600" },
  caption: { color: colors.text, marginTop: 10 },
});