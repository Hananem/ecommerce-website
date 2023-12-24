import {useCartContext} from "../context/Cart_Context"
import CartItem from "../components/CartItem"
import {NavLink} from "react-router-dom"
import img from '../images/empty.png'
const Cart = () => {
    const {cart, clearCart, total_price, shipping_free} = useCartContext()
    if(cart.length === 0) {
        return <div className="h-[100vh] flex items-center  justify-center"> <img src={img} className="h-[200px] w-[200px]" alt="cart" /></div>
    } 
return(
    <div className="max-w-[700px] h-[100vh] mx-auto pt-4">
  
        <div>
            {
                cart && cart.map((curElem) => {
                    return <CartItem key={curElem.id} {...curElem} />
                })
            }
        </div>

        <div className="flex flex-col mdl:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
            <NavLink>
                <button className="btn btn-primary">Continue Shopping</button>
            </NavLink>

            <button onClick={clearCart} className="bg-smallTextColor text-white rounded-md px-8 py-2 font-[1rem]">Clear Cart</button>
        </div>

        <div>
            <div>
                <div className="flex ">
                    <p>subtotal:</p>
                    <p> {total_price} </p>
                </div>
                <div className="flex ">
                    <p>shipping free:</p>
                    <p>{shipping_free}</p>
                </div>

                <div className="flex ">
                    <p>Order Total:</p>
                    <p> {shipping_free + total_price} </p>
                </div>
            </div>
        </div>

        <div>
          
        </div>
    </div>
)
}

export default Cart