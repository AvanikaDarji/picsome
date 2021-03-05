import React, { useContext} from 'react';

import { CartContext } from "../CartContext";

export default function CartItem({item}) {

const {removeItemfromCart} = useContext(CartContext)


    return ( 
<div className="cart-item">
       <i className="ri-delete-bin-line" onClick={()=>removeItemfromCart(item.id)}></i>
        <img src={item.url} width="130px" />    
        <p> $5.99</p>    
        
 </div>
    )
}