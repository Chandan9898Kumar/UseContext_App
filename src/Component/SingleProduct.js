import React from 'react'
import './styles.css'
const SingleProduct = ({ products, cart, setCart }) => {
// onClick our data to go to cart page.

// cart.includes(products)   if cart does not  includes the products item inside it,then Add button 
// should appear.
const AddToCart = () => {
    setCart([...cart, products])  
 }
// cart.includes(products)   if cart includes the products item inside it,then Remove button 
// should appear.
const RemoveCart=()=> {  
    setCart(cart.filter(ite=>ite.id!==products.id))
}

    return (
        <div className='products'>
            <img src={products.image} alt={products.name} />
            <div className='productDesc'>
                <span style={{ fontWeight: 700 }}>{products.name}</span>
                <span >$ {products.price.substring(0, 3)}</span>
            </div>
             
            {cart.includes(products) ? 
                <button className='add'
            onClick={RemoveCart}
            >Remove from Cart</button>

            : 
            <>
            <button className='add'
                onClick={AddToCart}>
                Add To Cart
            </button><br />
            </>

            }
        </div>

    )
}
export default SingleProduct;
