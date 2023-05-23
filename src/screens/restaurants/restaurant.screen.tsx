import { View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../navigation/constants/screen.name";
import { StackNavigation } from "../../navigation/types/navigation.types";

export default function RestaurantScreen() {
  const navigation = useNavigation<StackNavigation>();

  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.addRestaurant);
  };

  return (
    <View>
      <Text>Restaurant</Text>
      <Button onPress={goToAddRestaurant}> Create Restaurant</Button>
    </View>
  );
}
