import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

// Modified Code.
import { useContext } from "react";
import { UserDetails } from "../Context";
const Cart = () => {
  const { cart } = useContext(UserDetails);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => {
        return (acc = acc + Number(curr.price));
      }, 0)
    );
  }, [cart]);

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: Rs{total}</span>
      <div className="productContainer">
        {cart?.map((prod, index) => (
          <SingleProduct key={index} products={prod} />
        ))}
      </div>
    </div>
  );
};

export default Cart;

//  Now we are Removing Cart and setCart from componenet. It is old Code.

// const Cart = ({cart,setCart}) => {

// const [total,setTotal]=useState(0)
//   useEffect(()=> {
//     setTotal(cart.reduce((acc,curr)=> {
//      return acc=acc+ Number(curr.price)

//     },0))

//   },[cart])

//   // Even Here we unneccessarily passing cart and setCart in SingleProduct component.
//   return (
//     <div style={{ textAlign: "center" }}>
//     <span style={{ fontSize: 30 }}>My Cart</span>
//     <br />
//     <span style={{ fontSize: 30 }}>Total: Rs{total}</span>
//     <div className="productContainer">
//       {cart.map((prod) => (
//         <SingleProduct products={prod} key={prod.id} cart={cart} setCart={setCart} />
//       ))}
//     </div>
//   </div>
//   )
// }

// export default Cart;
