import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeStack from "./homeStack";
import TeamStack from "./teamStack";
import Nav from "../components/Nav/Nav";

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeStack}
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
    </NavigationContainer>
  );
}
