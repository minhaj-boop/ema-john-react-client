import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    
    // const totalReducer = (previous, product) => previous+product.price;
    // const total = cart.reduce(totalReducer, 0);
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart) {
        if(!product.quantity) {
            product.quantity = 1;
        }
        total+=product.price * product.quantity;
        totalQuantity += product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total+shipping) *0.10
    const grandTotal = total+shipping+tax;
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <h4>Items Ordered: {totalQuantity}</h4>
            <p>Total: {'$'+total.toFixed(2)}</p>
            <p>Shipping: {'$'+shipping}</p>
            <p>Tax: {'$'+tax.toFixed(2)}</p>
            <h3 className="grand-total">Grand Total: {'$'+grandTotal.toFixed(2)} </h3>
            <button className="btn-cart"><FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon> Review Your Order</button> 
        </div>
    );
};

export default Cart;