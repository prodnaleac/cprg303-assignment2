import { View, Text, FlatList, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "@/components/SearchBar";
import GridTile from "@/components/GridTile";
import { exploreItems } from "@/data/explore";
import { colors } from "@/constants/colors";

const FILTERS = ["For you", "Personal growth", "Hockey", "Photography"];

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Tapping the search bar opens the search screen */}
      <View style={styles.searchRow}>
        <SearchBar onPress={() => router.push("/search-input")} />
        <Ionicons name="bookmark-outline" size={26} color={colors.text} />
      </View>

      {/* filter chips you can scroll sideways */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipScroll}
        contentContainerStyle={styles.chips}
      >
        {FILTERS.map((filter) => (
          <View key={filter} style={styles.chip}>
            <Text style={styles.chipText}>{filter}</Text>
          </View>
        ))}
      </ScrollView>

      {/* 3 column grid */}
      <FlatList
        data={exploreItems}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => <GridTile item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 14,
  },
  chipScroll: { flexGrow: 0 },
  chips: { paddingHorizontal: 14, paddingBottom: 10, gap: 8 },
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  chipText: { color: colors.text, fontWeight: "600", fontSize: 14 },
});