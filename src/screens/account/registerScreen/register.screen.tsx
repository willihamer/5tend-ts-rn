import { Image } from "@rneui/base";
import React from "react";
import { View } from "react-native";
import { styles } from "./register.styles";
import RegisterForm from "../../../components/auth/register-form/register-form.component";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const RegisterScreen = () => {
  return (
    <KeyboardAwareScrollView>
      <Image
        style={styles.image}
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
      />
      <View style={styles.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
