import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#d9d9d9",
  },
  inputEventName: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 5,
  },
  inputEventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },

  form: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 40,
  },

  inputParticipant: {
    flex: 1,
    height: 58,
    backgroundColor: "#c3c3c3",
    borderRadius: 10,
    padding: 16,
    color: "#fff",
    fontSize: 16,
    marginRight: 10,
  },
  btnAddParticipant: {
    height: 58,
    width: 58,
    backgroundColor: "#00BB2D",
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  listEmptyText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
});
