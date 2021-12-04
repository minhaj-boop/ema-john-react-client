import React from 'react';
import '../Product/Product.css';
const ReviewItem = (props) => {

    const { name, price, quantity, img, key } = props.product;
    const { handleRemove } = props;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">Name: {name}</h4>
                <h5>Price: {price}</h5>
                <h5>Quantity: {quantity}</h5>
                <button onClick={() => handleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;