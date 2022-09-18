import React  from "react";
import { useState } from "react";
const UserDetails = React.createContext(null)

const Contextjs=({children})=> {
const [cart, setCart] = useState([])
// Used children beacuse All component can accessed this Data. It Took all children and wrapped inside
// Proiver.
return(
    <>
    <UserDetails.Provider value={{cart,setCart}}>
                  {children}
    </UserDetails.Provider>

    </>
)
}
export default Contextjs;
export { UserDetails };
