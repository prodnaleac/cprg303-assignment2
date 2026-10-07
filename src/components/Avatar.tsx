import { View, Image, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

type AvatarProps = {
  uri: string;
  size?: number;
};

// profile picture, shows a grey circle if there's no image
export default function Avatar({ uri, size = 32 }: AvatarProps) {
  const dimensions = { width: size, height: size, borderRadius: size / 2 };

  if (!uri) {
    return <View style={[styles.placeholder, dimensions]} />;
  }
  return <Image source={{ uri }} style={dimensions} />;
}

const styles = StyleSheet.create({
  placeholder: { backgroundColor: colors.placeholder },
});