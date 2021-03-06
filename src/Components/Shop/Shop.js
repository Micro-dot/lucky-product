import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';


import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    const handleAddToCart = (product,i) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    const removeCart = (setran) => {
        setCart([]);
        setran([]);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map((product)=> <Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)
            }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                removeCart={removeCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;