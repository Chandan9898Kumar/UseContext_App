import React from 'react'
import './styles.css'
const SingleProduct = ({ products, cart, setCart }) => {
    // onClick our data to go to cart page

    const AddToCart = () => {
        setCart([...cart, products])
    }
    return (
        <div className='products'>
            <img src={products.image} alt={products.name} />
            <div className='productDesc'>
                <span style={{ fontWeight: 700 }}>{products.name}</span>
                <span >$ {products.price.substring(0, 3)}</span>
            </div>
            <button className='add'
                onClick={AddToCart}>
                Add To Cart
            </button><br />

        </div>

    )
}
export default SingleProduct;
