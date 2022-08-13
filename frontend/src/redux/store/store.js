import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../state/ProductSlice";
import settingsReducer from "../state/settingsSlice";
export default configureStore({
    reducer:{
        settings:settingsReducer,
        product:productReducer,
    }
})