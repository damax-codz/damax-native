import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { font } from "../Mixins/mixins";

export default function ButtonStack() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.wrapper}>
        <Text style={styles.btntxt}>12m</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapper}>
        <Text style={styles.btntxt}>30d</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapper}>
        <Text style={styles.btntxt}>7d</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.wrapper, styles.lastWrp]}>
        <Text style={styles.btntxt}>24h</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    background: "#F9FAFB",
    borderRadius: 8,
    borderColor: "#D0D5DD",
    borderWidth: 1,
    width: 227,
    marginVertical: 24,
  },
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#D0D5DD",
    borderRightWidth: 1,
  },
  lastWrp: {
    borderRightWidth: 0,
  },
  btntxt: {
    ...font("Inter-Regular", 14, 500, 20, "#1D2939"),
  },
});
