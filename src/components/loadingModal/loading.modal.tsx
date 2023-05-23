import { View, ActivityIndicator } from "react-native";
import React from "react";
import { styles } from "./loading.modal.styles";
import { Overlay, Text } from "@rneui/base";

type loadingModalProps = {
  isVisible: boolean;
  text: string;
};

export const LoadingModal = ({ isVisible, text }: loadingModalProps) => {
  return (
    <Overlay isVisible={isVisible} overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#00a680" />
        {text ? <Text style={styles.text}>{text}</Text> : null}
      </View>
    </Overlay>
  );
};

LoadingModal.defaultProps = {
  isVisible: false,
};
