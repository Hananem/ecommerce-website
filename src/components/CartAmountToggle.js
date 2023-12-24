import { FaMinus, FaPlus} from "react-icons/fa"

const  CartAmountToggle = ({amount , setIncrease, setDecrease}) => {
   return(
    <div className="flex items-center justify-center">
        <div className="flex items-center space-x-[1.5rem] ">
            <button onClick={() => setDecrease()}>
                <FaMinus  className="cursor-pointer"/>
            </button>
            <div>{amount} </div>
            <button onClick={() => setIncrease()}>
            <FaPlus/>

            </button>
       
        </div>
    </div>
   )
}

export default CartAmountToggle