import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Team from "../pages/Team/team";

const Stack = createNativeStackNavigator();
export default function TeamStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Team"
        component={Team}
        options={{
          title: "Teampage",
        }}
      />
    </Stack.Navigator>
  );
}
