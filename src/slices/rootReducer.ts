import {combineReducers} from "redux";
import productReducer from "./productsSlice.ts";
import cartReducer from "./cartSlice.ts";

export const rootReducer = combineReducers({
        products : productReducer,
        carts : cartReducer
    }
);

export type RootReducerState = ReturnType<typeof rootReducer>