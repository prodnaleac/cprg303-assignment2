import { View, Text, Image, StyleSheet } from "react-native";
import { router } from "expo-router";
import PostHeader from "./PostHeader";
import PostActions from "./PostActions";
import { colors } from "@/constants/colors";
import { Post } from "@/types";

type PostCardProps = {
  post: Post;
};

// one full post: header, picture, icons, likes, and caption
export default function PostCard({ post }: PostCardProps) {
  return (
    <View style={styles.container}>
      <PostHeader user={post.user} />

      {post.image ? (
        <Image source={{ uri: post.image }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.imagePlaceholder]} />
      )}

      <PostActions
        commentCount={post.comments}
        repostCount={post.reposts}
        onCommentPress={() => router.push(`/comments/${post.id}`)}
      />

      <Text style={styles.likes}>{post.likes} likes</Text>
      <Text style={styles.caption}>
        <Text style={styles.username}>{post.user.username} </Text>
        {post.caption}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  image: { width: "100%", aspectRatio: 4 / 5 },
  imagePlaceholder: { backgroundColor: colors.placeholder },
  likes: { color: colors.text, fontWeight: "600", paddingHorizontal: 12 },
  caption: { color: colors.text, paddingHorizontal: 12, marginTop: 4 },
  username: { fontWeight: "600" },
});