import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js';
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct.js';
function Checkout() {
    const [{basket,user}, dispatch] =useStateValue();
    return (
        <div className="checkout">
            <div className="left_checkout">
                <img className="ad_checkout" alt="" 
                     src="https://images-eu.ssl-images-amazon.com/images/G/31/img14/Invictus/TALA/BETA/PrimeNow/3p/pc_shop.jpg"
                />
                <div className="">
                    <h3 className="titl">Hello,{user?.email}</h3>
                    <h2 className="title">Your Shopping Cart</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            Id={item.Id}
                            Image={item.Image}
                            Title={item.Title}
                            Price={item.Price}
                            Rating={item.Rating}
                        />
                    ))}
                </div>
            </div>
            <div className="right_checkout">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
