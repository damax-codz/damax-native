import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { font } from "../../components/Mixins/mixins";
import ButtonFilled from "../../components/Buttons/ButtonFilled";
import ButtonStack from "../../components/Buttons/ButtonStack";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [userData, setUserData] = useState([
    {
      name: "Bhadmus Damilola",
      title: "Frontend Developer",
      rating: "mid level",
      description: "A good guy",
    },
    {
      name: "Bhadmus Eniola",
      title: "Quality Assurance",
      rating: "mid level",
      description: "A good girl",
    },
    {
      name: "King David",
      title: "Frontend Developer",
      rating: "senior level",
      description: "A good guy",
    },
    {
      name: "Bhadmus Damilola",
      title: "Frontend Developer",
      rating: "mid level",
      description: "A good guy",
    },
    {
      name: "Bhadmus Damilola",
      title: "Frontend Developer",
      rating: "mid level",
      description: "A good guy",
    },
    {
      name: "Bhadmus Damilola",
      title: "Frontend Developer",
      rating: "mid level",
      description: "A good guy",
    },
    {
      name: "Bhadmus Damilola",
      title: "Frontend Developer",
      rating: "mid level",
      description: "A good guy",
    },
    {
      name: "King David",
      title: "Frontend Developer",
      rating: "senior level",
      description: "A good guy",
    },
    {
      name: "King David",
      title: "Frontend Developer",
      rating: "senior level",
      description: "A good guy",
    },
    {
      name: "King David",
      title: "Frontend Developer",
      rating: "senior level",
      description: "A good guy",
    },
  ]);
  return (
    <ScrollView style={styles.container}>
      {/* <Nav /> */}
      <View style={styles.body}>
        <View style={styles.header}>
          <View>
            <Text style={styles.txtbold}>Welcome Olivia</Text>
            <Text style={styles.txtlgt}>Complete today’s tasks</Text>
          </View>
          <View>
            <ButtonFilled
              title="Add User"
              PressFunction={() => Alert.alert("Confirm Page change")}
            >
              <MaterialIcons name="add" size={24} color="white" />
            </ButtonFilled>
            <ButtonStack />
          </View>
        </View>

        <Text style={styles.txtlgt}>Find all your Users</Text>

        {/* <FlatList
          data={userData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.list}
              onPress={() => {
                navigation.navigate("User", { item });
              }}
            >
              <Text> {item.name} </Text>
            </TouchableOpacity>
          )}
        /> */}

        {userData?.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.list}
              onPress={() => {
                navigation.navigate("User", { item });
              }}
              key={index}
            >
              <Text> {item.name} </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  txtbold: {
    ...font("Inter-Bold", 24, 600, 32, "#101828"),
  },
  txtmedium: {
    ...font("Inter-Bold", 24, 600, 20, "#101828d3"),
  },
  txtlgt: {
    ...font("Inter-Regular", 16, 400, 24, "#667085"),
  },
  body: {
    padding: 16,
  },
  list: {
    backgroundColor: "white",
    paddingHorizontal: 4,
    paddingVertical: 16,
    marginVertical: 4,
    borderRadius: 8,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#00000025",
    shadowOpacity: 1,
  },
});
