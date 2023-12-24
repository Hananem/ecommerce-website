import CartAmountToggle from "./CartAmountToggle"
import FormatPrice from "./FormatPrice"
import { useCartContext } from "../context/Cart_Context"

import {FaTrash} from "react-icons/fa"
const CartItem = ({id, image, name, color, price, amount}) => {
  const {removeItem, setDecrease, setIncrement} = useCartContext()


    return(
      <section className="pt-12 bg-white w-full grid grid-cols-5 mb-4 border py-2">
       <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4 ">

       <div>
            <figure>
                <img src={image} alt={id} className="w-20 h-20 object-center" />
            </figure>
          <div className="flex flex-col items-start max-w-[6.8rem]">
         
            <p> {name} </p>
            <div className="flex items-center space-x-1"> color:  
            <div className="w-[1.2rem]  h-[1.2rem] rounded-full" style={{background:color, color:color}}> </div>

            </div>
            </div>
          </div>




</div>
      
     

         <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
         <p className="w-1/3 flex items-center  font-bold text-lg">{price} </p>
<div className="w-1/3 flex items-center">
<CartAmountToggle
       amount={amount}  
       setDecrease={ () => setDecrease(id)}
       setIncrease={() => setIncrement(id)}
         />
</div>
         <div  className="flex w-1/3 items-center text-lg font-semibold">
         <FormatPrice price={price * amount} /> 

         </div>

           <button onClick={() => removeItem(id)}  >
          <FaTrash  className="cursor-pointer color-smallTextColor w-[2rem]"   />
               
         </button>
         </div>


      

     
       </section>
    )
}

export default CartItem