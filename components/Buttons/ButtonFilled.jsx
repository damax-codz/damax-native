import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { font } from "../Mixins/mixins";

export default function ButtonFilled(props) {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.PressFunction}>
      <Text style={styles.btntxt}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#3E54D3",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    width: 140,
  },
  btntxt: {
    ...font("Inter-Regular", 14, 500, 20, "#FFF"),
  },
});
