import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { screen } from "./constants/screen.name";
import RestaurantStack from "./restaurant-stack";
import FavoritesStack from "./favorite.stack";
import RankingStack from "./ranking.stack";
import SearchStack from "./search.stack";
import AccountStack from "./account.stack";

const Tab = createBottomTabNavigator();

interface IconMap {
  [key: string]: string;
}

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => bottomMenuIcon(route, color, size),
        headerShown: false,
      })}
    >
      <Tab.Screen
        name={screen.restaurant.tab}
        component={RestaurantStack}
        options={{
          tabBarLabel: screen.restaurant.restaurants,
        }}
      />
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoritesStack}
        options={{
          tabBarLabel: screen.favorites.favorites,
        }}
      />
      <Tab.Screen name={screen.ranking.tab} component={RankingStack} options={{
        tabBarLabel: screen.ranking.ranking,
      }}/>
      <Tab.Screen name={screen.search.tab} component={SearchStack} options={{
        tabBarLabel: screen.search.search,
      }} />
      <Tab.Screen name={screen.account.tab} component={AccountStack} options={{
        tabBarLabel: screen.account.account,
      }} />
    </Tab.Navigator>
  );
}

function bottomMenuIcon(
  router: RouteProp<ParamListBase, string>,
  color: string,
  size: number
) {
  const icons: IconMap = {
    [screen.restaurant.tab]: "home-outline",
    [screen.favorites.tab]: "heart-outline",
    [screen.ranking.tab]: "star-outline",
    [screen.search.tab]: "magnify",
    [screen.account.tab]: "account-outline",
  };

  const iconName = icons[router.name];

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
