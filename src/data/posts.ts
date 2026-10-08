import { Post } from "@/types";
import { users } from "./users";

export const posts: Post[] = [
  {
    id: "p1",
    user: users[0],
    image: "https://picsum.photos/seed/post1/800/1000",
    caption: "",
    likes: 1240,
    comments: 30,
    reposts: 9,
  },
  {
    id: "p2",
    user: users[1],
    image: "https://picsum.photos/seed/post2/800/1000",
    caption: "",
    likes: 892,
    comments: 14,
    reposts: 3,
  },
  {
    id: "p3",
    user: users[3],
    image: "https://picsum.photos/seed/post3/800/1000",
    caption: "",
    likes: 5310,
    comments: 87,
    reposts: 41,
  },
  {
    id: "p4",
    user: users[2],
    image: "https://picsum.photos/seed/post4/800/1000",
    caption: "",
    likes: 213,
    comments: 6,
    reposts: 0,
  },
];