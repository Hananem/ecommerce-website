import {useCartContext} from "../context/Cart_Context"
import {   BsFillCartFill } from 'react-icons/bs'



const Shopping =() => {
    const {total_item} = useCartContext()
    return(
      <div className="relative border border-gray-400 rounded-full w-[30px] h-[30px] grid place-items-center text-[15px] " >
      <BsFillCartFill className="text-gray-400"/>
       
        <div className="absolute bg-red-600 w-[16px] h-[16px] flex items-center justify-center text-white text-[14px] -top-1 -right-3 rounded-full">
        {total_item}
           
        </div>
        
      </div>
    )
}

export default Shopping