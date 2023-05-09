import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#191919",
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    minHeight: 40,
    paddingHorizontal: 10,
    color: "#fff",
    textAlignVertical: "center", // This style should be textAlignVertical, not textAlign
  },
  sendButton: {
    backgroundColor: "#9C25F5",
    marginLeft: 10,
    padding: 8,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    fontSize: 16,
    color: "#000",
  },
});

export default styles;
