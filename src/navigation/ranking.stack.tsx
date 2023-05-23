import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "./constants/screen.name";
import { RankingScreen } from "../screens/ranking.screen";

const Stack = createNativeStackNavigator();

const RankingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.ranking.ranking} component={RankingScreen} />
    </Stack.Navigator>
  );
};

export default RankingStack;
