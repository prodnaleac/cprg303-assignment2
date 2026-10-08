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
      {/* tapping the search bar opens the search screen */}
      <View style={styles.searchRow}>
        <SearchBar onPress={() => router.push("/search-input")} />
        <Ionicons name="bookmark-outline" size={26} color={colors.text} />
      </View>

      {/* filter chips you can scroll sideways */}
      <View style={styles.chipRow}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chips}
        >
          {FILTERS.map((filter) => (
            <View key={filter} style={styles.chip}>
              <Text style={styles.chipText}>{filter}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

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
  chipRow: { height: 52 },
  chips: {
    paddingHorizontal: 14,
    gap: 8,
    alignItems: "center",
  },
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  chipText: {
    color: colors.text,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 20,
  },
});