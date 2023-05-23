import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritesScreen } from "../screens/favorites.screen";
import { screen } from "./constants/screen.name";

const Stack = createNativeStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.favorites.favorites} component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
