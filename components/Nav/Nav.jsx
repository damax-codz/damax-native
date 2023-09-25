import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// images
const logo = require("../../assets/combyn.png");

export default function Nav() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <TouchableOpacity>
        <MaterialIcons name="menu" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingStart: 16,
    paddingEnd: 8,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
