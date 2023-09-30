import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonFilled from "../../components/Buttons/ButtonFilled";
import { useRoute } from "@react-navigation/native";
import { font } from "../../components/Mixins/mixins";

export default function User({ navigation }) {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Text style={styles.txtbold}>User page</Text>
      <View>
        <Text style={styles.txtmedium}>Name: {route.params.item.name}</Text>
        <Text style={styles.txtmedium}>Title: {route.params.item.title}</Text>
        <Text style={styles.txtmedium}>Rating: {route.params.item.rating}</Text>
        <Text style={styles.txtmedium}>Description: {route.params.item.description}</Text>
        <ButtonFilled
          title="Go Home"
          PressFunction={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  txtbold: {
    ...font("Inter-Bold", 24, 600, 32, "#101828"),
  },
  txtmedium: {
    ...font("Inter-Bold", 16, 400, 20, "#101828d3"),
    paddingVertical: 4,
  },
});
