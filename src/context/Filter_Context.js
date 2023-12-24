import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext} from "./ProductsContext"
import reducer from "../reducer/FilterReducer"

const FilterContext = createContext()

export const FilterContextProvider = ({ children }) => {

  const initialState = {
    filter_products:[],
    all_products:[],
    grid_view:true,
    sorting_value:"lowest",
    filters:{
      text:"",
      category:"all", 
  brand:"all",
  color:"all",
  maxPrice:0,
  minPrice:0,
  price:0,
    },
  };


    const {products } = useProductContext()

    const [state, dispatch] = useReducer(reducer, initialState)
    //to set the grid view
    const setGridView = () => {
         return dispatch({ type: "SET_GRID_VIEW", })
          
    }

    //to set the grid list
    const setListView = () => {
      return dispatch({ type: "SET_LIST_VIEW", })
       
 }

 //update the filter values

const  updateFilterValue =(event) => {
  let name = event.target.name;
  let value = event.target.value;

  return dispatch({type:"UPDATE_FILTERS_VALUE", payload : {name, value}})
}

// to clear the filter
const clearFilters = () => {
  dispatch({type:"CLEAR_FILTERS"})
}

const sorting = (event) => {
  let userValue = event.target.value;
dispatch({type: "GET_SORT_VALUE",payload: userValue })
}

//to sort the product 
useEffect(() => {
  dispatch({type: "FILTER_PRODUCTS"})

  dispatch({type: "SORTING_PRODUCTS"})

},[products,state.sorting_value, state.filters] )


// to load all the products for grid and list view
     useEffect(() => {
          dispatch({ type: "LOAD_FILTER_PRODUCTS", payload:products})
     }, [products])
    return(
        <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue, clearFilters}} >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}