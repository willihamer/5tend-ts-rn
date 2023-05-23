import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./user-logged.styles";
import InfoUser from "../../components/account/infoUser/info.user";
import { Button } from "@rneui/base";
import { getAuth, signOut } from "firebase/auth";
import { LoadingModal } from "../../components";

const UserLoggedScreen = () => {
const [loading, setLoading] = useState(false);
const [loadingText, setLoadingText] = useState("");

  const logOut = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  return (
    <View>
      <InfoUser setLoading={setLoading}  setLoadingText={setLoadingText}/>
      <Button
        title="Sign Out"
        buttonStyle={styles.btnStyles}
        titleStyle={styles.btnTextStyle}
        onPress={logOut}
      />
      <LoadingModal isVisible={loading} text={loadingText}/>
    </View>
  );
};

export default UserLoggedScreen;
