import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import getStarted from "../components/GetStarted";
import login from "../components/Login";
import Dashboard from "../components/Dashboard";

const screens = {
  // * SYNTAX GUIDE
  /* *
   * navigatorName: {
   *    screen: componentName,
   * }
   *
   */
  
  Login: {
    screen: login,
  }, 
  GetStarted: {
    screen: getStarted,
  },
  Dashboard: {
    screen: Dashboard,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
