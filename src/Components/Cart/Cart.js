import React, { useState } from 'react';
import'./Cart.css'
const Cart = ({cart,removeCart }) => {
    let cartName = [];
    
    const [ran, setran] = useState([]);
    const randomCart = (cartNames) =>{
        console.log(cartNames);
        let radom = Math.floor(Math.random() * (cartNames.length + 0)); 
        setran(cartNames[radom])
        
    }

    for (const product of cart){
        
        if (cartName.length >= 4){
        }
        else{
            cartName.push(product.name) 
        }
    }
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <h5>{ran}</h5>
            {
                cartName.map((cart,i) => {
                    return(
                        <div key={i}>
                            <p> * {cart}</p>
                        </div>
                    );
                })
            }
          
            <button onClick={()=> randomCart(cartName)} className='button-1'>CHOOSE 1 FOR ME</button> <br/> 
            <button onClick={()=> removeCart(setran)} className='button-2'>CHOOSE AGAIN</button>
            
        </div>
    
    );
};

export default Cart;