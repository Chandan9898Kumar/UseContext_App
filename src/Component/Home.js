import React, { useState } from 'react'
import { faker } from '@faker-js/faker';
import SingleProduct from "./SingleProduct";
import './styles.css'


// Modified Code , Here Removed Cart and setcart from Home componenet beacuse we dont need it Here.
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
    const [Products] = useState(productsArray)

    return (
        <div className='productContainer'>
            {Products.map((prod) => (
                <SingleProduct products={prod} />
            ))}

        </div>
    )
}

export default Home;


// It is old code

// const Home = ({cart,setCart}) => {

//     // To Generate Array of 20 object(which is undefined initially) we used Array(20) 
//     // and from faker we stored values from it.

//     const productsArray = [...Array(20)].map(() => ({
//         id: faker.datatype.uuid(),
//         name: faker.commerce.productName(),
//         price: faker.commerce.price(),
//         image: faker.image.image(),
//     }));

//     // to generate same time of data
//     faker.seed(20);

//     const [Products] = useState(productsArray)
//     // const [cart, setCart] = useState([])

//     // console.log(cart, 'cart')

//     return (
//         <div className='productContainer'>
//             {Products.map((prod) => (
//                 <SingleProduct products={prod}  cart={cart} setCart={setCart}/>
//             ))}

//         </div>
//     )
// }

// export default Home;
