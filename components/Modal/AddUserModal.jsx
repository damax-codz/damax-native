import React from "react";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { font } from "../Mixins/mixins";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Formik } from "formik";
import ButtonFilled from "../Buttons/ButtonFilled";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("This field is required"),
  title: yup.string().required("This field is required"),
  rating: yup.string().required("This field is required"),
  description: yup.string().required("This field is required"),
});

export default function AddUserModal(props) {
  return (
    <View>
      <Modal visible={props.modalState}>
        <View style={styles.header}>
          <Text style={styles.txtmedium}>Add User</Text>
          <TouchableOpacity onPress={props.closeModal}>
            <MaterialIcons name="close" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.formWrapper}>
          <Formik
            initialValues={{
              name: "",
              title: "",
              rating: "",
              description: "",
            }}
            onSubmit={(values, actions) => {
              props.addData(values);
              props.closeModal();
              actions.resetForm();
            }}
            validationSchema={schema}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <Text style={styles.txtlgt}>Name</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="default"
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                  />
                  {errors.name && touched.name && (
                    <Text style={styles.errorText}>{errors.name}</Text>
                  )}
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.txtlgt}>Title</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="default"
                    onChangeText={handleChange("title")}
                    onBlur={handleBlur("title")}
                    value={values.title}
                  />
                  {errors.title && touched.title && (
                    <Text style={styles.errorText}>{errors.title}</Text>
                  )}
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.txtlgt}>Rating</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="default"
                    onChangeText={handleChange("rating")}
                    onBlur={handleBlur("rating")}
                    value={values.rating}
                  />
                  {errors.rating && touched.rating && (
                    <Text style={styles.errorText}>{errors.rating}</Text>
                  )}
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.txtlgt}>Add a Description</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="default"
                    multiline
                    onChangeText={handleChange("description")}
                    onBlur={handleBlur("description")}
                    value={values.description}
                  />
                  {errors.description && touched.description && (
                    <Text style={styles.errorText}>{errors.description}</Text>
                  )}
                </View>
                <View style={styles.btnWrapper}>
                  <ButtonFilled title="Submit" PressFunction={handleSubmit} />
                </View>
              </>
            )}
          </Formik>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    // marginTop: 20,
    paddingHorizontal: 12,
    paddingVertical: 12,
    height: 50,
    alignItems: "center",
    backgroundColor: "#eee",
  },
  txtmedium: {
    ...font("Inter-Bold", 24, 600, 0, "#101828d3"),
  },
  txtlgt: {
    ...font("Inter-Regular", 16, 400, 24, "#667085"),
  },
  inputWrapper: {
    flexDirection: "column",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderColor: "#00000047",
    borderWidth: 1,
    padding: 12,
    marginTop: 3,
    borderRadius: 4,
    height: 44,
  },
  formWrapper: {
    padding: 12,
  },
  btnWrapper: {
    justifyContent: "flex-end",
    width: "100%",
    backgroundColor: "#22222",
  },
  errorText: {
    ...font("Inter-Regular", 16, 400, 24, "#df2929"),
  },
});

{
  /* <Formik
initialValues={{ email: "" }}
onSubmit={(values) => Alert.alert(values.email)}
>
{({ handleChange, handleBlur, handleSubmit, values }) => (
  <View>
    <TextInput
      onChangeText={handleChange("email")}
      onBlur={handleBlur("email")}
      value={values.email}
      style={styles.input}
    />
    <Button onPress={handleSubmit} title="Submit" />
  </View>
)}
</Formik> */
}
