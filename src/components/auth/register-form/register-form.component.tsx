import { View } from "react-native";
import React, { useState } from "react";
import { Button, Icon, Input } from "@rneui/base";
import { styles } from "./register-form.styles";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./register-form.data";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../navigation/constants/screen.name";
import { StackNavigation } from "../../../navigation/types/navigation.types";
import  Toast  from "react-native-toast-message";

const RegisterForm = () => {
  const [displayPassword, setDisplayPassword] = useState<boolean>(false);
  const navigation = useNavigation<StackNavigation>();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(
          auth,
          formValues.email,
          formValues.password
        );
        navigation.navigate(screen.account.account);
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error on Signup"
        })
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        containerStyle={styles.input}
        placeholder="Email"
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
        rightIcon={
          <Icon type="material-community" name="at" style={styles.icon} />
        }
      />
      <Input
        containerStyle={styles.input}
        placeholder="Password"
        secureTextEntry={!displayPassword}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
        rightIcon={
          <Icon
            type="material-community"
            name={displayPassword ? "eye-off-outline" : "eye-outline"}
            style={styles.icon}
            onPress={() => setDisplayPassword(!displayPassword)}
          />
        }
      />
      <Input
        containerStyle={styles.input}
        placeholder="Repeat Password"
        secureTextEntry={!displayPassword}
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
        rightIcon={
          <Icon
            type="material-community"
            name={displayPassword ? "eye-off-outline" : "eye-outline"}
            style={styles.icon}
            onPress={() => setDisplayPassword(!displayPassword)}
          />
        }
      />
      <Button
        title="Sign Up"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={() => formik.handleSubmit()}
        loading={formik.isSubmitting}
      />
    </View>
  );
};

export default RegisterForm;
