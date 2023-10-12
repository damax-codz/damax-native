import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import User from "./../pages/User/user";
import DrawerStack from "./drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    <NavigationContainer>
      <StatusBar animated={true} style={{ height: 40 }}  hidden={false} />
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={DrawerStack}
          options={{
            title: "Homepage",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          // options={{ title: ({ route }) => route.params.item.name }}
          options={({ route }) => ({
            title: route.params?.item?.name || "Userpage",
          })}
          initialParams={{ item: { name: "Userpage'" } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
