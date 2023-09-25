import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeStack from "./homeStack";
import TeamStack from "./teamStack";

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Team" component={TeamStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
