import { Image } from "@rneui/base";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./login.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../navigation/constants/screen.name";
import { StackNavigation } from "../../../navigation/types/navigation.types";
import LoginForm from "../../../components/auth/login-form/login-form.component";

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigation>();

  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <LoginForm />
        <Text style={styles.textRegister}>
          Don't you have an account{" "}
          <Text style={styles.btnRegister} onPress={goToRegister}>
            Sign Up
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
