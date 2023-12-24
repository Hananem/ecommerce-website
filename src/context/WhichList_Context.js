import React, {createContext, useReducer, useContext} from 'react'

import WhichListReducer from '../reducer/WhichListReducer';

//initial state
const initialState = {
whichList:[],
};

//create context
export const  WhichListContext = createContext(initialState)

//provider 

export const WhichListProvider =({children}) => {
    const [state, dispatch] = useReducer(WhichListReducer, initialState)

    //action
   
    const addToWhichList= (id,  price, name, image, category) => {
        dispatch({type:"ADD_TO_WHICHLIST", payload:{id,  price, name, image, category}})
    }


    return <WhichListContext.Provider value={{...state, addToWhichList}}>
    {children}
</WhichListContext.Provider>
}

export const useWhichListContext = () => {
    return useContext(WhichListContext)
}

