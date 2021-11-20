import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart);
    const {cart} = props;
    
    const totalReducer = (previous, product) => previous+product.price;
    const total = cart.reduce(totalReducer, 0);
    // let total = 0;
    // for(const product of cart) {
    //     total+=product.price;
    // }
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <h4>Items Ordered: {props.cart.length}</h4>
            <p>Total: {'$'+total.toFixed(2)}</p>
            <button className="btn-cart"><FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon> Review Your Order</button> 
        </div>
    );
};

export default Cart;