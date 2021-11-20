import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';


const Product = (props) => {
    // console.log(props);
    const {name, img, seller, price, stock, star} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />                
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p>By: {seller}</p>
                <p className="price">Price: {'$'+price}</p>
                <p>only {stock} left in stock - order soon</p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                ></Rating>
                <br/>
                <button 
                    className="btn-regular"
                    onClick={() => props.handleAddToCart(props.product)}
                >{cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;