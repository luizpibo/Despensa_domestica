import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    flexDirection: "column",
  },
  labelContainer: {
    alignSelf: "flex-start",
    minHeight: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 20,
    color: "#F7F7F7",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  errorLabel: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  InputContainer: {
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    flexDirection: "row",
    marginVertical: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    height: 60,
    paddingLeft: 10,
  },
  button: {
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default styles;
