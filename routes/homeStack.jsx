import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import User from "./../pages/User/user";
import Home from "./../pages/Home/home";

const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={Home}
        options={{
          title: "Homepage",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="User"
        component={User}
        options={{ title: "Dammy UserPage", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
