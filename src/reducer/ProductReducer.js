const ProductReducer = (state, action) => {
    switch (action.type) {

        case  "SET_LOADING":
        return {
            ...state,
            isLoading:true,
        }

        case  "SET_API_DATA":
            const featuredData = action.payload.filter((curElem) => {
                  return curElem.featured === true
            })
          
            return {
                ...state,
                isLoading:false,
                products:action.payload,
                featuredProducts:featuredData,
            }


        case  "SET_ERROR":
        return {
            ...state,
            isLoading:false,
            isError:true,
        }




        case  "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading:true,
            }

            case "SET_SINGLE_PRODUCT":
                return {
                    ...state,
                    isSingleLoading:false,
                    singleProduct:action.payload,
                    
                }

                case  "SET_SINGLE_ERROR":
                    return {
                        ...state,
                        isSingleLoading:false,
                        isError:true,
                    }


                    case  "SET_CATEGORY_LOADING":
                        return {
                            ...state,
                            isCategoryLoading:true,
                        }
            
                        case "SET_CATEGORY_PRODUCTS":
                            return {
                                ...state,
                                isCategoryLoading:false,
                                productsByCategory:action.payload,
                                
                            }
            
                            case  "SET_CATEGORY_ERROR":
                                return {
                                    ...state,
                                    isCategoryLoading:false,
                                    isError:true,
                                }


            

     default:
        return state;
    }
  
}


export default ProductReducer