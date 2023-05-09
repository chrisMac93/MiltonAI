import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#191919",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 25,
    width: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  modalInput: {
    backgroundColor: "#0F0F0F",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    borderRadius: 4,
    marginBottom: 20,
  },
  modalCloseIcon: {
    position: "absolute",
    right: 20,
    top: 25,
  },
  modalButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  changeTitleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#9C25F5",
  },
  neutralButton: {
    backgroundColor: "#0F0F0F",
  },
  deleteButtonText: {
    color: "#E74C3C",
  },
  buttonIcon: {
    marginRight: 8,
  },
});

export default styles;
