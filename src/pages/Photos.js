import React, { useContext } from 'react';
import Image from '../components/Image';
import { CartContext } from "../CartContext";
import { getClass } from "../utils";

export default function Photos() {

    const { allPhotos } = useContext(CartContext)
    const imageElements = allPhotos.map((img, i) => {
        return <Image key = { img.id }
        img = { img }
        className = { getClass(i) }
        / >
    })

    return ( < main className = "photos" > { imageElements } < /main>
       
    )


}