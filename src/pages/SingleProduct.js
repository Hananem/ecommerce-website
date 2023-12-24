import {useEffect} from "react"

import {useParams} from "react-router-dom"
import { useProductContext } from "../context/ProductsContext"
import Stars from "../components/Stars"
import AddToCart from "../components/AddToCart"
import MyImage from "../components/MyImage"

const API = "http://localhost:7000/featured"


const  SingleProduct = ( ) => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext()
  const { id } = useParams()
  const {
    name,
    company,
    price,
    description,
    category,
  } = singleProduct

  useEffect(( ) => {
     getSingleProduct( `${API}?id=${id}`)
  }, [])

  if(isSingleLoading) {
    return <div>...Loading</div>
  }

  console.log(singleProduct)
  if(singleProduct){
    return(
      <div className="flex items-center justify-center bg-white py-[3rem] min-h-100">
              <article className="  max-w-[75%] p-4 mt-8 flex flex-col md:flex-row items-center justify-center gap-2 bg-[#f4edf7] rounded-md shadow-2xl " >
              <div className="">
       <MyImage imgs={singleProduct && singleProduct[0] && singleProduct[0].images}/>
       </div>
       <div className="flex flex-col items-center ">
       <h2 className="text-primary font-bold mb-4 text-3xl">{singleProduct && singleProduct[0] && singleProduct[0].name}</h2>

       <Stars stars={ singleProduct && singleProduct[0] && singleProduct[0].stars}  reviews={ singleProduct && singleProduct[0] && singleProduct[0].reviews} />
       <p> 
       <div className="my-4">
       <span> Price:  { singleProduct && singleProduct[0] && singleProduct[0].price} </span>
       </div>

       </p>

       <p className="text-gray-700 w-3/4  mb-4 ">
       { singleProduct && singleProduct[0] && singleProduct[0].description}
       </p>
       <div>
       <p>Available:   <span> { singleProduct && singleProduct[0] && singleProduct[0].stock > 0 ? "In Stock" : "Not Available"} </span>  </p>
       </div>
{ singleProduct && singleProduct[0] && singleProduct[0].stock > 0 && <AddToCart product={singleProduct} />}
       </div>
      </article>
      </div>
    
     )
  }
   
 
    
}
export default SingleProduct