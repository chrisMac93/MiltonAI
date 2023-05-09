import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  conversationList: {
    flex: 1,
  },
  conversationInfo: {
    flex: 1,
    justifyContent: "space-between",
  },
  conversationPreview: {
    backgroundColor: "#191919",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginRight: 10,
    minWidth: 250,
    maxWidth: 250,
    height: 150,
    position: "relative",
  },
  goToConversation: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -10,
  },

  conversationPreviewText: {
    color: "#9C9C9C",
    fontSize: 14,
    textAlign: "left",
  },
  arrowIcon: {
    marginLeft: 5,
  },
  conversationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
  },
  optionsButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  noConversationsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  noConversationsText: {
    fontSize: 16,
    textAlign: "center",
    color: "#D9D9D9",
  },
});

export default styles;
