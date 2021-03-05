import React, { useContext} from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from "../CartContext";

export default function Header() {
    const {cartItems} = useContext(CartContext)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return ( <
        div >
        <   
        header >
        <Link to = "/photos" > < h2 > Pic some < /h2> </Link >
        
        <Link to = "/cart"> 
<i className ={`${cartClassName} ri-fw ri-2x`}> < /i></Link>
        <
        /header> 
        </div>
       

    )
}