import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 10,
    left: 20,
    zIndex: 10,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#000",
  },
  welcomeMessageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeMessageTextMILTONAI: {
    fontSize: 24,
    color: "#9C25F5",
    textAlign: "center",
  },
  welcomeMessageText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  welcomeMessageTextLast: {
    fontSize: 16,
    color: "#B2B2B2",
    textAlign: "center",
  },
  hiddenMessageList: {
    display: "none",
  },
  messageList: {
    flex: 1,
    marginTop: 50,
  },
  messageContainer: {
    marginBottom: 10,
    maxWidth: "100%",
  },
  userName: {
    fontSize: 14,
    color: "#B2B2B2",
    alignSelf: "flex-end",
    marginRight: 5,
    marginBottom: 5,
  },
  botName: {
    fontSize: 14,
    color: "#B2B2B2",
    alignSelf: "flex-start",
    marginLeft: 5,
    marginBottom: 5,
  },
//   activityIndicator: {
//   position: 'absolute',
//   bottom: 60,
//   alignSelf: 'center',
// },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#9C25F5",
    borderRadius: 10,
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#191919",
    borderRadius: 10,
  },
  messageText: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
});

export default styles;
