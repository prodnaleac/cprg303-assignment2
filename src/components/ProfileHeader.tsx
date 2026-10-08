import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "./Avatar";
import { colors } from "@/constants/colors";
import { User } from "@/types";

type ProfileHeaderProps = {
  user: User;
  posts: number;
  followers: number;
  following: number;
  bio: string;
};

type StatProps = {
  value: number;
  label: string;
};

// one number with a label under it (only used in this file)
function Stat({ value, label }: StatProps) {
  return (
    <View>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

// top part of the profile: username, picture, stats, bio, and buttons
export default function ProfileHeader({
  user,
  posts,
  followers,
  following,
  bio,
}: ProfileHeaderProps) {
  return (
    <View>
      {/* top bar */}
      <View style={styles.topBar}>
        <Ionicons name="add" size={30} color={colors.text} />
        <View style={styles.nameRow}>
          <Text style={styles.username}>{user.username}</Text>
          {user.verified && (
            <Ionicons
              name="checkmark-circle"
              size={18}
              color={colors.verified}
            />
          )}
        </View>
        <Ionicons name="menu" size={28} color={colors.text} />
      </View>

      {/* picture and stats */}
      <View style={styles.infoRow}>
        <Avatar uri={user.avatar} size={86} />
        <View style={styles.stats}>
          <Stat value={posts} label="posts" />
          <Stat value={followers} label="followers" />
          <Stat value={following} label="following" />
        </View>
      </View>

      <Text style={styles.bio}>{bio}</Text>

      {/* buttons */}
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Edit profile</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Share profile</Text>
        </View>
      </View>

      {/* icons above the grid, grid one is selected */}
      <View style={styles.tabs}>
        <View style={[styles.tab, styles.tabActive]}>
          <Ionicons name="grid" size={24} color={colors.text} />
        </View>
        <View style={styles.tab}>
          <Ionicons
            name="play-circle-outline"
            size={26}
            color={colors.textMuted}
          />
        </View>
        <View style={styles.tab}>
          <Ionicons name="repeat-outline" size={26} color={colors.textMuted} />
        </View>
        <View style={styles.tab}>
          <Ionicons
            name="person-circle-outline"
            size={26}
            color={colors.textMuted}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  nameRow: { flexDirection: "row", alignItems: "center", gap: 4 },
  username: { color: colors.text, fontSize: 20, fontWeight: "700" },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 8,
  },
  stats: { flex: 1, flexDirection: "row", justifyContent: "space-around" },
  statValue: { color: colors.text, fontSize: 18, fontWeight: "700" },
  statLabel: { color: colors.text, fontSize: 14 },
  bio: { color: colors.text, paddingHorizontal: 16, marginTop: 12 },
  buttons: {
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 16,
    marginTop: 14,
  },
  button: {
    flex: 1,
    backgroundColor: colors.button,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
  },
  buttonText: { color: colors.text, fontWeight: "600" },
  tabs: { flexDirection: "row", marginTop: 16 },
  tab: { flex: 1, alignItems: "center", paddingVertical: 10 },
  tabActive: { borderBottomWidth: 1.5, borderBottomColor: colors.text },
});