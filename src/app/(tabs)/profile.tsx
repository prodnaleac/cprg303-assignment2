import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "@/components/ProfileHeader";
import GridTile from "@/components/GridTile";
import { currentUser } from "@/data/users";
import { profileStats, profilePosts } from "@/data/profile";
import { colors } from "@/constants/colors";

// my profile: header on top, then a grid of my posts
export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <FlatList
        data={profilePosts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => <GridTile item={item} />}
        ListHeaderComponent={
          <ProfileHeader
            user={currentUser}
            posts={profileStats.posts}
            followers={profileStats.followers}
            following={profileStats.following}
            bio={profileStats.bio}
          />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
});