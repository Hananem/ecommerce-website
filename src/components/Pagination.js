import React, {useState} from "react" 
import ProductCard from "./ProductCard"

  const Pagination = ({products}) => {
    const [proPerPage, setProPerPage] = useState(9)
    const numOfTotalPages = Math.ceil(products.length / proPerPage)
    return(
        <div className="grid grid-cols-4 bg-red-700">
        {
            products && products.map((curElem) => {
                return <ProductCard key={curElem.id}  {...curElem}  />
            })
        }

        <h1> {numOfTotalPages}  </h1>
        </div>
    )
  }
  export default Pagination