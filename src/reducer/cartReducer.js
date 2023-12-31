

const cartReducer = (state, action) => {
   
   if(action.type === "ADD_TO_CART"){
    let {id, color,amount,name,price,image,stock} = action.payload;

let existingProduct = state.cart.find((curItem) => curItem.id === id+color)


if(existingProduct) {
   let updatedProduct = state.cart.map((curElem) => {
    if(curElem.id === id+color) {
        let newAmount 

        if(newAmount < curElem.stock) {
            newAmount = curElem.amount+amount
        } else {
            newAmount = curElem.stock
        } 

        return{
            ...curElem,
            amount:newAmount,
        }
    } else {
        return curElem
    }

   }); 
    return {
    ...state,
    cart:updatedProduct,
   }
}else {
    let cartProduct 

cartProduct = {
    id:id + color,
    name,
    image,
    color,
    amount,
    price,
    stock,

}
return { ...state,
    cart:[...state.cart, cartProduct],
    }
}
}


// to set t

if(action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
        if(curElem.id === action.payload) {
            let decAmount = curElem.amount-1
if(decAmount <= 1) {
    decAmount = 1
}
            return {
                ...curElem,
                amount:decAmount,
            }
        }else {
            return curElem;
        }
    })

    return {...state, cart:updatedProduct}
}



if(action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
        if(curElem.id === action.payload) {
            let incAmount = curElem.amount+1
if(incAmount >= curElem.stock) {
    incAmount = curElem.stock
}
            return {
                ...curElem,
                amount:incAmount,
            }
        }else {
            return curElem;
        }
    })

    return {...state, cart:updatedProduct}
}



if(action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
        (curElem) => curElem.id !== action.payload
    )



    return{
        ...state,
        cart:updatedCart,
    }
}


if(action.type === "CLEAR_CART") {
    return {
        ...state,
        cart:[],
    }
}


if(action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
        let {amount} = curElem;
        initialVal = initialVal + amount;
        return initialVal
    },0)

    return{
        ...state,
        total_item:updatedItemVal,
    }
}

if(action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curElem) => {
           let {price, amount} = curElem;
           initialVal = initialVal + price * amount;

           return initialVal
    },0);
    return {
        ...state,
        total_price,
    }
}

   
    return state
          
    
}

export default cartReducer