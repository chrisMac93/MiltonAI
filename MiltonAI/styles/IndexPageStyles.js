import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#9C25F5",
  },
  menuButton: {
    padding: 8,
  },
  titleSeeAllContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 30,
    marginBottom: 10,
  },
  historyTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  clearAll: {
    fontSize: 16,
    color: "#9C9C9C",
    marginRight: 10,
  },
  alignClearAllIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
