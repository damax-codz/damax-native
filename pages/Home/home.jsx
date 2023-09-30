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
import AddUserModal from "../../components/Modal/AddUserModal";

export default function Home({ navigation }) {
  const [userData, setUserData] = useState([]);
  const [modalState, setModalState] = useState(false);
  function closeModal() {
    setModalState(!modalState);
  }
  function addData(newData) {
    setUserData([newData, ...userData]);
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <View>
            <Text style={styles.txtbold}>Welcome Damilola</Text>
            <Text style={styles.txtlgt}>Complete today’s tasks</Text>
          </View>
          <View>
            <ButtonFilled title="Add User" PressFunction={closeModal}>
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
      <AddUserModal
        modalState={modalState}
        closeModal={closeModal}
        addData={addData}
      />
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
    paddingHorizontal: 8,
    paddingVertical: 16,
    marginVertical: 4,
    borderRadius: 8,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#00000025",
    shadowOpacity: 1,
  },
});
