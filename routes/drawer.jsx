import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import TeamStack from "./teamStack";
import Nav from "../components/Nav/Nav";
import Home from "../pages/Home/home";

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation }) => <Nav navigation={navigation} />,
        }}
      />
      <Drawer.Screen
        name="Team"
        component={TeamStack}
        options={{
          header: ({ navigation }) => <Nav navigation={navigation} />,
        }}
      />
    </Drawer.Navigator>
  );
}
