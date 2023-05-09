import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  categoriesContainer: {
    flexDirection: "row",
    marginTop: 10,
    paddingLeft: 10,
  },
  categoryIconContainer: {
    alignItems: "center",
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    color: "#9C9C9C",
    marginTop: 5,
  },
  suggestionsList: {
    marginTop: 10,
  },
  suggestionItem: {
    backgroundColor: "#191919",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",

  },
  suggestionText: {
    fontSize: 16,
    color: "#CECECE",
  },
});

export default styles;
