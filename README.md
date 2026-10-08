# Instagram Clone – CPRG 303 Assignment 2

**Student:** Caelan Abugan

A mobile app made with Expo and TypeScript that recreates the layout and navigation of Instagram.

## Screens

- **Home** – stories row at the top and a feed of posts
- **Reels** – full screen reel with icons on the right side
- **Search** – search bar, filter chips, and a 3 column explore grid
- **Profile** – my username, profile picture, stats, bio, and a grid of my posts
- **Comments** (stack) – opens when you tap the comment icon on a post and only shows that post's comments
- **Search input** (stack) – opens when you tap the search bar on the Search tab

## Navigation

- **Tabs:** Home, Reels, Messages, Search, Profile. Messages is just an icon to make the nav bar match Instagram, it doesn't open a page.
- **Stack:** Comments slides up from the bottom and gets the post id from the URL (`/comments/[postId]`). Search input fades in from the Search tab.

## How I Organized Components

- If a component is used in more than one place, or it's big enough on its own, it gets its own file in `src/components` (for example `Avatar`, `PostCard`, `GridTile`).
- If something small is only used on one screen, it stays in that screen's file (for example `HomeHeader` and `StoriesRow` in the Home screen, and `Stat` in `ProfileHeader`).
- Each screen has its own header since every screen's header looks different in Instagram.
- Every component uses a TypeScript `type` for its props.
- Shared types are in `src/types`, mock data is in `src/data`, and colors are in `src/constants/colors.ts`.

## Reference Screenshots

<img src="screenshots/home.png" width="200"/> <img src="screenshots/reels.png" width="200"/> <img src="screenshots/search.png" width="200"/> <img src="screenshots/profile.png" width="200"/> <img src="screenshots/comments.png" width="200"/>

## Credits

- The layout and navigation are based on Instagram (owned by Meta). I recreated it for this school assignment.
- Pictures come from Picsum (https://picsum.photos), which uses free photos from Unsplash.
- Icons are from Ionicons, through @expo/vector-icons.
- Captions and comments are made up. Some usernames are my classmates', used with their permission.

## AI Usage

I used Claude (AI) as a help tool for this assignment, specifically for:

- **Understanding coding concepts** – like how Expo Router navigation works, what props are, and how FlatList and SafeAreaView work
- **Suggestions** – ideas for how to organize my components and fixes when I got errors
- **Design ideas** – help matching Instagram's layout, spacing, and colors
- **This README** – help writing and organizing it