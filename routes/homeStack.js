import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation'
import getstarted from '../components/GetStarted'
import login from '../components/Login'

const screens = {

    // * SYNTAX GUIDE
    /* *  
     * navigatorName: {
     *    screen: componentName,
     * }
     * 
     */
    Getstarted: {
        screen: getstarted
    },
    Login: {
        screen: login
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);