import { GridItem } from "@/types";

// numbers and bio shown at the top of my profile
export const profileStats = {
  posts: 9,
  followers: 806,
  following: 380,
  bio: "Software Development @ SAIT 💻",
};

// my posts for the profile grid
export const profilePosts: GridItem[] = [
  { id: "pp1", image: "https://picsum.photos/seed/me1/400/533", kind: "reel" },
  { id: "pp2", image: "https://picsum.photos/seed/me2/400/533" },
  { id: "pp3", image: "https://picsum.photos/seed/me3/400/533", kind: "carousel" },
  { id: "pp4", image: "https://picsum.photos/seed/me4/400/533" },
  { id: "pp5", image: "https://picsum.photos/seed/me5/400/533", kind: "reel" },
  { id: "pp6", image: "https://picsum.photos/seed/me6/400/533" },
  { id: "pp7", image: "https://picsum.photos/seed/me7/400/533" },
  { id: "pp8", image: "https://picsum.photos/seed/me8/400/533", kind: "carousel" },
  { id: "pp9", image: "https://picsum.photos/seed/me9/400/533" },
];