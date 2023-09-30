import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerStack from "./routes/drawer";
import HomeStack from "./routes/homeStack";

export default function App() {
  const [isFontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function LoadFonts() {
      await Font.loadAsync({
        "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
        "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
        "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
      });
      setFontLoaded(true);
    }

    LoadFonts();
  }, []);

  if (!isFontLoaded) {
    return (
      <View>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return <HomeStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
});
