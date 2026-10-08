import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import { GridItem } from "@/types";

type GridTileProps = {
  item: GridItem;
};

// 3 tiles fit across the screen
const tileWidth = Dimensions.get("window").width / 3;

// one square in a grid (used on search and profile)
export default function GridTile({ item }: GridTileProps) {
  return (
    <View style={styles.tile}>
      {item.image ? (
        <Image source={{ uri: item.image }} style={styles.image} />
      ) : null}

      {item.kind === "reel" && (
        <Ionicons name="play" size={18} color={colors.text} style={styles.icon} />
      )}
      {item.kind === "carousel" && (
        <Ionicons name="copy" size={18} color={colors.text} style={styles.icon} />
      )}

      {item.views && (
        <View style={styles.views}>
          <Ionicons name="eye-outline" size={16} color={colors.text} />
          <Text style={styles.viewsText}>{item.views}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: tileWidth,
    aspectRatio: 3 / 4,
    backgroundColor: colors.placeholder,
    borderWidth: 0.5,
    borderColor: colors.background,
  },
  image: { width: "100%", height: "100%" },
  icon: { position: "absolute", top: 8, right: 8 },
  views: {
    position: "absolute",
    left: 8,
    bottom: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  viewsText: { color: colors.text, fontWeight: "700", fontSize: 14 },
});