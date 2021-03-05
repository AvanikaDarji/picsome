import React, { useState, useEffect } from 'react'

const CartContext = React.createContext()

function ContextProvider({ children }) {

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([]);

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if (photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite }
            }
            return photo
        })

        setAllPhotos(() => updatedArr);
    }

    function addToCart(newItem) {
        setCartItems(prevItem => [...prevItem, newItem]);

    }

    function emptyCart() {
        setCartItems([]);
    }


    function removeItemfromCart(id) {
        setCartItems(prevItems => {
            return prevItems.filter(item => item.id !== id)
        });
    }

    return ( < CartContext.Provider value = {
            { allPhotos, toggleFavorite, addToCart, cartItems, removeItemfromCart, emptyCart }
        } > { children } <
        /CartContext.Provider>
    )
}

export { ContextProvider, CartContext }