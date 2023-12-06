import React from "react";
import "./styles.css";

// Modified Code , Here we need Cart,setCart. with the help useContext api we are accessing the data.
import { useContext } from "react";
import { UserDetails } from "../Context";
const SingleProduct = ({ products }) => {
  const { cart, setCart } = useContext(UserDetails);

  // onClick our data to go to cart page.

  // cart.includes(products)   if cart does not  includes the products item inside it,then Add button
  // should appear.

  const AddToCart = () => {
    setCart([...cart, products]);
  };
  // cart.includes(products)   if cart includes the products item inside it,then Remove button
  // should appear.
  const RemoveCart = () => {
    setCart(cart.filter((ite) => ite.id !== products.id));
  };

  // WE Required Cart and SetCart in SingleProduct component Only. we had to pass this,in every
  // component so Here we will be using ContextApi.

  return (
    <div className="products">
      <img src={products.image} alt={products.name} loading="lazy" />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{products.name}</span>
        <span>$ {products.price.substring(0, 3)}</span>
      </div>

      {cart?.find((item) => item.id === products.id) ? (
        <button className="add" onClick={RemoveCart}>
          Remove from Cart
        </button>
      ) : (
        <>
          <button className="add" onClick={AddToCart}>
            Add To Cart
          </button>
          <br />
        </>
      )}
    </div>
  );
};
export default SingleProduct;

// Old Code

// const SingleProduct = ({ products, cart, setCart }) => {
// // onClick our data to go to cart page.

// // cart.includes(products)   if cart does not  includes the products item inside it,then Add button
// // should appear.
// const AddToCart = () => {
//     setCart([...cart, products])
//  }
// // cart.includes(products)   if cart includes the products item inside it,then Remove button
// // should appear.
// const RemoveCart=()=> {
//     setCart(cart.filter(ite=>ite.id!==products.id))
// }

// // WE Required Cart and Setcart in SingleProduct component Only. we had to pass this,in every
// // componenet so Here we will be using Contextapi.

//     return (
//         <div className='products'>
//             <img src={products.image} alt={products.name} />
//             <div className='productDesc'>
//                 <span style={{ fontWeight: 700 }}>{products.name}</span>
//                 <span >$ {products.price.substring(0, 3)}</span>
//             </div>

//             {cart.includes(products) ?
//                 <button className='add'
//             onClick={RemoveCart}
//             >Remove from Cart</button>

//             :
//             <>
//             <button className='add'
//                 onClick={AddToCart}>
//                 Add To Cart
//             </button><br />
//             </>

//             }
//         </div>

//     )
// }
// export default SingleProduct;
