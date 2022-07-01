import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems';

const initialState = {
    cartItems: cartItems,
    units: 4,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];

            // return {cartItems:[]};
            // ***** IMP this will make state as zero, 
            //with cartItems getting updated and
            //with units,total and isLoading getting deleted

        },
        removeItem: (state, action) => {
            console.log(action);
            const itemId = action.payload;
            state.cartItems = cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.units = cartItem.units + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.units = cartItem.units - 1;
        },
        calculateTotal: (state) => {
            let units = 0;
            let total = 0;

            state.cartItems.forEach((item) => {
                units += item.units;
                total += item.units * item.price;
            });

            state.units = units;
            state.total = total;

        }
    }

});

// console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease,calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;