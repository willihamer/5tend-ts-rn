import React from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./user-guest.styles";
import { Text, Button, Image } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../navigation/constants/screen.name";
import { StackNavigation } from "../../../navigation/types/navigation.types";

const UserGuestScreen = () => {
  const navigation = useNavigation<StackNavigation>();
  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };
  return (
    <ScrollView
      centerContent={true}
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContent}
    >
      <Image
        source={require("../../../../assets/img/user-guest.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Check your 5 fork</Text>
      <Text style={styles.description}>
        How would you describe the best restaurant
      </Text>
      <Button
        buttonStyle={styles.btnStyle}
        onPress={goToLogin}
        title="View profile"
      />
    </ScrollView>
  );
};

export default UserGuestScreen;
