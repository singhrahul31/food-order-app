import { useContext } from "react";
import CartContext from "../../store/cart-context";

import CartIcon from "./CartIcon"
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext);

    const totalItems = cartCtx.items.reduce((currValue, item) => {
        return currValue + item.amount;
    }, 0);

    return <button className={classes.button} onClick={props.onShowCart}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {totalItems}    
        </span>
    </button>
}

export default HeaderCartButton;