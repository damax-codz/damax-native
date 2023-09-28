import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Team from "../pages/Team/team";

const Stack = createNativeStackNavigator();
export default function TeamStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TeamPage"
        component={Team}
        options={{
            title: "Teampage",
            headerShown: false,  
        }}
      />
    </Stack.Navigator>
  );
}
