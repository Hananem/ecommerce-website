const WhichListReducer = (state, action) => {
    if (action.type === "ADD_TO_WHICHLIST") {
    
            let{id,price, name, image, category} = action.payload
let existingProduct = state.whichList.find((curItem) => curItem.id === id)
if(! existingProduct) {
     let cartProduct 

cartProduct = {
    id,
    name,
    image,
    price,
    category,
}


return { 
    ...state,
    whichList:[...state.whichList, cartProduct]
}
}

}   
return state;         

}

export default WhichListReducer

