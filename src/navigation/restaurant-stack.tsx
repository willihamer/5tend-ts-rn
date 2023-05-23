import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantScreen from "../screens/restaurants/restaurant.screen";
import { screen } from "./constants/screen.name";
import AddRestaurantScreen from "../screens/restaurants/add-restaurant.screen";

const Stack = createNativeStackNavigator();

const RestaurantStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurant.restaurants}
        component={RestaurantScreen}
        options={{
          title: "Restaurant",
        }}
      />
      <Stack.Screen
        name={screen.restaurant.addRestaurant}
        component={AddRestaurantScreen}
        options={{
          title: "New Restaurant",
        }}
      />
    </Stack.Navigator>
  );
};

export default RestaurantStack;
