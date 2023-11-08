import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // loginData: null,
    token: AsyncStorage.getItem("token") || null,
    user: null,
};

(async () => {
    try {
        // Retrieve and parse the user data from AsyncStorage
        const userData = await AsyncStorage.getItem("user");
        initialState.user = userData ? JSON.parse(userData) : null;
    } catch (error) {
        console.error("Error initializing user data:", error);
    }
})();

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        // setLoginData: (state, action) => {
        //     state.loginData = action.payload;
        //     console.log("data", action.payload);
        // },
        setToken: (state, value) => {
            state.token = value.payload;
            console.log("payloaddd", value.payload);
        },
        setUser: (state, value) => {
            state.user = value.payload;
            console.log("userrr", value.payload);

        },
       
    },
});

export const { setLoginData, setToken,setUser } = authSlice.actions;
export default authSlice.reducer;

