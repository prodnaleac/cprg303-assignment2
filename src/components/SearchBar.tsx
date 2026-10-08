import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";

type SearchBarProps = {
  onPress?: () => void;
};

// search bar used on two screens:
// with onPress it's a button that opens the search screen,
// without onPress it's a real text box
export default function SearchBar({ onPress }: SearchBarProps) {
  if (onPress) {
    return (
      <Pressable style={styles.container} onPress={onPress}>
        <Ionicons name="search" size={20} color={colors.textMuted} />
        <Text style={styles.placeholder}>Search with Meta AI</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color={colors.textMuted} />
      <TextInput
        autoFocus
        placeholder="Search with Meta AI"
        placeholderTextColor={colors.textMuted}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: colors.button,
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 44,
  },
  placeholder: { color: colors.textMuted, fontSize: 16 },
  input: { flex: 1, color: colors.text, fontSize: 16 },
});