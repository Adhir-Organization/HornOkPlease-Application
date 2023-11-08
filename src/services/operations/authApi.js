import {  setToken, setUser } from "../../slices/authSLice"
import { apiConnector } from "../apiConnector"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import endpoints from "../api"


// const {
//     LOGIN_API
// } = endpoints                                                                                                                                             

const LOG = "http://192.168.248.1:5000/api/user/login";
// const LOG = process.env.REACT_APP_LOGIN;

export const login = (email, password,navigation) => {
    return async (dispatch) => {
        try {
            const response = await apiConnector("POST", LOG, {
                email,password
            })

            console.log("loginn apiii", response);

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            dispatch(setToken(response.data.token));
             AsyncStorage.setItem('user', JSON.stringify(response.data.user));
            console.log("login successfull")
            navigation.navigate("MainStackNav")
        } catch (err) {  
            console.log("LOGIN API ERROR............", err)
        }
    }
}
 

export function logout(navigation) {
    return  (dispatch) => {
        try {
            dispatch(setToken(null));
            dispatch(setUser(null));
            AsyncStorage.removeItem("token");
            AsyncStorage.removeItem("user");
            AsyncStorage.clear();

            navigation.navigate("GetStarted");

            console.log("Logout successful");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };
}






