import {createContext, useContext, useReducer, useEffect} from "react";
import reducer from "../reducer/cartReducer"
const CartContext = createContext()



const initialState = {
    cart:[],
    total_item:"",
    total_amount:"",
    shipping_free:5000,
    whichList:[],

}



const CartProvider = ({children}) => {
 
    const [state, dispatch] = useReducer(reducer, initialState)
    const  addToCart = (id, color,amount, stock, price, name, image) => {
       dispatch({type:"ADD_TO_CART", payload:{id, color,amount, stock,price,name,image}})


    }

  


    const setDecrease =(id) => {
       dispatch({type:"SET_DECREMENT", payload:id})

    }

    const setIncrement =(id) => {
        dispatch({type:"SET_INCREMENT", payload:id})
 
     }

const removeItem = (id) => {
    dispatch({type: "REMOVE_ITEM", payload:id})
}


const clearCart = () => {
    dispatch({ type:"CLEAR_CART"})
}

useEffect(() => {
    dispatch({type:"CART_TOTAL_ITEM"})
    dispatch({type:"CART_TOTAL_PRICE"})
}, [state.cart])


    return <CartContext.Provider value={{...state,addToCart, removeItem, clearCart, setDecrease, setIncrement}}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}

export {CartProvider, useCartContext}