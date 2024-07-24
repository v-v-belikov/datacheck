// rootReducer.js
import {combineReducers} from "@reduxjs/toolkit";
import operatorSlice from "./modules/OperatorCabinet/operatorSlice";

export const rootReducer = combineReducers({
    operator: operatorSlice,
});
