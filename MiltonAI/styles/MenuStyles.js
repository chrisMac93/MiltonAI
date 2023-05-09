import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  menuButton: {
    padding: 8,
  },
  menuModal: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  menuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    paddingTop: 40,
    paddingBottom: 10,
    paddingRight: 10,
  },
  menuHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  menuCloseIcon: {
    paddingLeft: 20,
  },
  menuTitle: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    paddingRight: 160,
  },
  menuTopSection: {
    flex: 1,
    justifyContent: "flex-start",
  },
  menuBottomSection: {
    flex: 1,
    justifyContent: "flex-end",
  },
  menuOptions: {
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#191919",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  menuText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  menuIcon: {
    marginRight: 8,
  },
  signUpSection: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 110,
  },
  signUpTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
  signUpDescription: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  signUpButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    width: "94%",
  },
  signUpIcon: {
    marginRight: 5,
  },
});

export default styles;
