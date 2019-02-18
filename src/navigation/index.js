import { createAppContainer, createStackNavigator } from "react-navigation";

import HomeScreen from "../screens/Home";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
