import { useReducer } from "react";

import CartContext from "./cart-context";

const initialCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const totalPrice = state.totalAmount + (action.data.amount * action.data.price);
            return {
                items: state.items.concat(action.data),
                totalAmount: totalPrice
            };
        default: return initialCartState;
    }
};


const CartProvider = props => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, initialCartState);
    const addItemHandler = (item) => {
        dispatchCartState({type: 'ADD', data: item})
    };

    const removeItemHandler = (id) => {
        dispatchCartState({type: 'REMOVE', data: id})
    };

    const cartContext = {
        items: cartState.items,
        totlAmount:cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

};

export default CartProvider;