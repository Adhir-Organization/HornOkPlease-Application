import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSLice";

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;