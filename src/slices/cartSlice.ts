import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {CartItem} from "../model/CartItem.ts";
import type {ProductData} from "../model/ProductData.ts";

interface CartState {
    items : CartItem[];
}

const initialState : CartState = {
    items : []
}

const cartSlice = createSlice( {
    name : 'cart',
    initialState : initialState,
    reducers : {
        addItemToCart(
            state: CartState,
            action:PayloadAction<ProductData>
        )  {
            const existingItem = state.items.find((item) =>
            item.product.id === action.payload.id);
            if(!existingItem){
                state.items.push({
                    product : action.payload,
                    quantity : 1
                })
            }
        },
        increaseQuantity(state: CartState, action : PayloadAction<number>){
            const item = state.items.find((existingItem) => existingItem.product.id === action.payload);
            if(item){
                item.quantity += 1;
            }
        },
        decreaseQuantity(state: CartState, action : PayloadAction<number>){
            const item = state.items.find((existingItem) => existingItem.product.id === action.payload);
            if(item && item.quantity > 1){
                item.quantity -= 1;
            }
        }
    }
});

export const {addItemToCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;

export  default cartSlice.reducer
