import { Comment } from "@/types";
import { users } from "./users";

// each comment has a postId so the Comments screen can be organized by post
export const comments: Comment[] = [
  {
    id: "c1",
    postId: "p1",
    user: users[2],
    text: "",
    timeAgo: "8m",
    likes: 12,
  },
  {
    id: "c2",
    postId: "p1",
    user: users[4],
    text: "",
    timeAgo: "4m",
    likes: 4,
  },
  {
    id: "c3",
    postId: "p1",
    user: users[5],
    text: "",
    timeAgo: "3m",
    likes: 4,
  },
  {
    id: "c4",
    postId: "p2",
    user: users[3],
    text: "",
    timeAgo: "1h",
    likes: 22,
  },
  {
    id: "c5",
    postId: "p2",
    user: users[2],
    text: "",
    timeAgo: "45m",
    likes: 3,
  },
  {
    id: "c6",
    postId: "p3",
    user: users[1],
    text: "",
    timeAgo: "2h",
    likes: 18,
  },
];