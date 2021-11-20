import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
      fetch('./products.JSON')
      .then(res => res.json())
      .then(data => {
        setDisplayProducts(data);  
        setProducts(data)});  
    },[]);

    useEffect(() => {
        
        if(products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                storedCart.push(addedProduct);
                if(addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                }
            }
            setCart(storedCart);
        }
    },[products]);

    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }

    return (
        <>
            <div className="search-container">
                <input 
                type="text"
                onChange={handleSearch} 
                placeholder="Search product"/>
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product 
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                            >
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;