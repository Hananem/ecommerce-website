import {createContext, useContext, useEffect, useReducer} from "react"
import axios from "axios"
import reducer from "../reducer/ProductReducer"
const AppContext = createContext()

const API = "http://localhost:7000/featured"

const initialState ={
    isLoading: false,
    isError : false,
    products :[ ],
    productsByCategory:[],
    isCategoryLoading:false,
featuredProducts:[ ],
isSingleLoading: false,
singleProduct:{ },
}
const AppProvider =  ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
 const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING"})
   try {
    const res = await axios.get(url) 
    const products = await res.data 
  
    dispatch({type: "SET_API_DATA", payload:products})
   }catch (error) {
    dispatch({ type: "API_ERROR"})
   }


 }

 const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING"})

    try {
        const res = await axios.get(url) 
        const singleProduct = await res.data 
    dispatch({type: "SET_SINGLE_PRODUCT", payload:singleProduct})

    }catch (error) {
        dispatch({ type: "SET_SINGLE_ERROR"})
        console.log(error)
    }
 }

 
 const getProductsByCategory = async (url) => {
    dispatch({ type: "SET_CATEGORY_LOADING"})

    try {
        const res = await axios.get(url) 
        const  productsByCategory = await res.data 
    dispatch({type: "SET_CATEGORY_PRODUCTS", payload: productsByCategory})

    }catch (error) {
        dispatch({ type: "SET_CATEGORY_ERROR"})
        console.log(error)
    }
 }

 useEffect(() => {
    getProducts(API)
 }, [])
    return(
    <AppContext.Provider value={{ ...state, getSingleProduct,getProductsByCategory }}   >
        {children}
    </AppContext.Provider>
    )
}

const useProductContext = () => {
    return useContext (AppContext)
}


export {AppProvider, AppContext, useProductContext}