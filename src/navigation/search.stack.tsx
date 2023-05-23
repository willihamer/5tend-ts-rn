import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "./constants/screen.name";
import SearchScreen from "../screens/search.screen";

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.search.search} component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default SearchStack;
