import {useState} from "react"
import {NavLink} from "react-router-dom"
import CartAmountToggle from "./CartAmountToggle"
import { useCartContext } from "../context/Cart_Context"
import { useWhichListContext } from "../context/WhichList_Context"

import {FaCheck } from "react-icons/fa"
import PayButton from "./PayButton"
import {   AiOutlineHeart } from 'react-icons/ai'

const AddToCart = ({product}) => {
    const {id, colors,  price, name, image, category} = product && product[0] && product[0]
    const {addToCart} = useCartContext()
    const {addToWhichList} = useWhichListContext()

    const [amount, setAmount] = useState(1)
    const [color, setColor] = useState(colors[0])

const  {stock} = product && product[0] && product[0]
    const setDecrease = () => { 
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    };
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
     };
    return (
        <article>
            <p className="text-center">

                Colors: 
                {product && product[0] && product[0].colors.map((curColor, index) =>  {
                    return <button key={index} 
                    className="w-[1.5rem] h-[1.5rem] rounded-full  "  
                    style={{backgroundColor: curColor}}
                    onClick={() => setColor(curColor)}
                    >
                    {color === curColor ? <FaCheck /> : null }
                    </button>
                }
                ) }
            </p>

            <CartAmountToggle  amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
 <div className="flex items-center justify-between  w-full">
<NavLink to="/cart"
onClick={( ) => addToCart(id, color,amount, stock,price,name,image)} 
>
<button className="bg-primary text-white rounded-md px-14 py-2 font-[1rem]">Add To Cart</button>

</NavLink>

     <button  className="bg-primary text-white px-2 py-2 rounded-md "
     onClick={() => addToWhichList(id,  price, name, image, category)}>
   < AiOutlineHeart className="w-[1.5rem] h-[1.5rem]" />
     </button>
     </div>
     <PayButton />
        </article>
    )
}

export default AddToCart