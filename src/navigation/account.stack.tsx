import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "./constants/screen.name";
import AccountScreen from "../screens/account/account.screen";
import LoginScreen from "../screens/account/loginScreen/login.screen";
import RegisterScreen from "../screens/account/registerScreen/register.screen";

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={AccountScreen}
        options={{ title: "Account" }}
      />
      <Stack.Screen
        name={screen.account.login}
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name={screen.account.register}
        component={RegisterScreen}
        options={{ title: "Create Account" }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
