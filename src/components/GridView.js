import { useState} from "react"


import ProductCard from "./ProductCard"
const GridView = ({products}) => {
    const [proPerPage, setProPerPage] = useState(9)
    const [currentPage, setCurrentPage] = useState(1)
    const numOfTotalPages = Math.ceil(products.length / proPerPage)
    const pages = [...Array(numOfTotalPages + 1).keys()].slice(1)

    const indexOfLastPro = currentPage * proPerPage
    const indexOfFirstPro =  indexOfLastPro - proPerPage
    const visibleProducts = products.slice(indexOfFirstPro,  indexOfLastPro )
    const prevPageHandler =() => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }

     const nextPageHandler =() => {
        if(currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1)
    }
    console.log(products)
return(

    <article  className="">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
    {
        visibleProducts && visibleProducts.map((curElem) => {
            return <ProductCard key={curElem.id}  {...curElem}  />
        })
    }
   
    </div>

    <div className="flex items-center justify-between space-x-2 bg-white border-md w-fit mx-auto px-2  text-headingColor">
    <span onClick={prevPageHandler}>Prev</span>
    <span className=" flex items-center justify-between "> {pages.map((page) => <span key={page} onClick={() => setCurrentPage(page)} className={`mx-2  px-2 ${currentPage === page ? "bg-blue-700 text-white" : ""}`}> {`${page} `} </span>)}  </span>
    <span onClick={nextPageHandler}>Next</span>
    </div>
    </article>
)
}

export default GridView