import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map(item => <li>{item.name}</li>)}</ul>;
    console.log(cartCtx.totalAmount);
    return <Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>234</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            {cartCtx.items.length > 0 && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
};

export default Cart;