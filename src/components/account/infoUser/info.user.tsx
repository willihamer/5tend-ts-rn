import React, { useState } from "react";
import { View } from "react-native";
import { Avatar, Text } from "@rneui/base";
import { User, getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { styles } from "./info.user.styles";
import * as ImagePicker from "expo-image-picker";

const InfoUser = ({
  setLoading,
  setLoadingText,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingText: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { uid, photoURL, displayName, email } = getAuth().currentUser as User;
  const [avatar, setAvatar] = useState(photoURL);

  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      await uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri: string) => {
    setLoadingText("Uploading Avatar");
    setLoading(true);

    const storage = getStorage();
    const response = await fetch(uri);
    const blob = await response.blob();
    console.log({ blob });

    const storageRef = ref(storage, `avatar/${uid}`);

    console.log({ uid });
    console.log(storageRef);

    uploadBytes(storageRef, blob)
      .then(async (snapshot) => {
        await updatePhotoUrl(snapshot.metadata.fullPath);
      })
      .catch((error) => {
        console.log("====================================");
        console.log("Error uploading image:", error);
        console.log("Error code:", error.code);
        console.log("Server response:", error.serverResponse);
        console.log("Other:", error.serverResponse);
        console.log("====================================");
      });
  };

  const updatePhotoUrl = async (fullPath: string) => {
    const storage = getStorage();

    const imageRef = ref(storage, fullPath);
    const imageUrl = await getDownloadURL(imageRef);
    const auth = getAuth();
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { photoURL: imageUrl });
    }
    setAvatar(imageUrl);
    setLoading(false);
  };

  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        icon={{ type: "material", name: "person" }}
        containerStyle={styles.avatar}
        source={{ uri: avatar as string }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>

      <View>
        <Text style={styles.displayName}>{displayName || "Unknown"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
};

export default InfoUser;
