import React, { useState } from 'react'
import { faker } from '@faker-js/faker';
import SingleProduct from "./SingleProduct";
import './styles.css'

const Home = () => {
    // To Generate Array of 20 object(which is undefined initially) we used Array(20) 
    // and from faker we stored values from it.
    const productsArray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image(),
    }));
    // to generate same time of data
    faker.seed(20);
    const [products] = useState(productsArray)
    const [cart, setCart] = useState([])
    console.log(cart, 'cart')
    return (
        <div className='productContainer'>
            {products.map((prod) => (
                <SingleProduct products={prod} cart={cart} setCart={setCart} />
            ))}

        </div>
    )
}

export default Home;