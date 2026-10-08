import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import PostCard from "@/components/PostCard";
import StoryBubble from "@/components/StoryBubble";
import { posts } from "@/data/posts";
import { users, currentUser } from "@/data/users";
import { colors } from "@/constants/colors";

// top bar of the home screen (only used here, so it stays in this file)
function HomeHeader() {
  return (
    <View style={styles.header}>
      <Ionicons name="add" size={30} color={colors.text} />
      <Text style={styles.logo}>Instagram</Text>
      <Ionicons name="heart-outline" size={28} color={colors.text} />
    </View>
  );
}

// row of story circles, user story first (only used here)
function StoriesRow() {
  const storyUsers = [currentUser, ...users];

  return (
    <FlatList
      data={storyUsers}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(user) => user.id}
      renderItem={({ item }) => <StoryBubble user={item} />}
      contentContainerStyle={styles.stories}
    />
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <HomeHeader />
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => <PostCard post={item} />}
        ListHeaderComponent={<StoriesRow />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  logo: { color: colors.text, fontSize: 28, fontWeight: "600" },
  stories: { paddingHorizontal: 10, paddingVertical: 10 },
});