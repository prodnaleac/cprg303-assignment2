import { Post } from "@/types";
import { users } from "./users";

// one reel to show on the Reels tab (uses the same shape as a post)
export const featuredReel: Post = {
  id: "r1",
  user: users[0],
  image: "https://picsum.photos/seed/reel1/800/1400",
  caption: "got foggy on a hike",
  likes: 8420,
  comments: 350,
  reposts: 726,
};