import React, { useState, useContext } from "react";

import { CartContext } from "../CartContext";

import CartItem from "../components/CartItem";

export default function Cart() {
    const [buttonText, setButtonText] = useState("Place Order");
    const { cartItems, emptyCart } = useContext(CartContext);
    const totalCost = 5.99 * cartItems.length;
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })

    function placeOrder() {
        setButtonText("Ordering...");
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order");
            emptyCart();
        }, 3000)
    }


    const cartItemElements = cartItems.map((item) => ( <
        CartItem key = { item.id }
        item = { item }
        />
    ));

    return ( <
        div >
        <
        h1 > Checkout Page < /h1>  { cartItemElements } <
        p className = "total-cost" > Total: { totalCostDisplay } < /p> <
        div className = "order-button" >
        <
        button onClick = { placeOrder } > { buttonText } < /button> <
        /div> <
        /div>
    );
}