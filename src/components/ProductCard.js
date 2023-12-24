
import {NavLink} from "react-router-dom"
const ProductCard = (curElem) => {
    const {id, name, image, price, brand} = curElem
    return(
        <NavLink to={`/singleproduct/${id}`}>
        <article className="rounded mb-4 bg-white overflow-hidden shadow-md flex flex-col items-center justify-center">

        <div className="w-[200px] h-[200px]  ">
       
        <img src={image}  alt="blog-img" className=" w-full h-full  object-cover"  />
        </div>
     

    
        <div className="p-4 text-center">
        <h6 className="text-primary text-lg"> {name} </h6>
        <p className="text-slate-500 text-sm"> {brand} </p>
         <p className="text-primary text-[17px] my-3"> {price}$</p>
        </div>
        </article>
        </NavLink>
    )
}

export default ProductCard

