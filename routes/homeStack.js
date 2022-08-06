import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import getStarted from "../components/GetStarted";
import login from "../components/Login";
import OtpVer from "../components/Otpver";
const screens = {
    // * SYNTAX GUIDE
    /* *
     * navigatorName: {
     *    screen: componentName,
     * }
     *
     */

    GetStarted: {
        screen: getStarted,
    },
    Login: {
        screen: login,
    },
    Otpver: {
        screen: OtpVer,
    },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
