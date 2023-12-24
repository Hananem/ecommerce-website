import { useState} from "react"

import {NavLink} from "react-router-dom"

const ListView  = ({products}) => {
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
  return(
    <div>
     {
      visibleProducts && visibleProducts.map((curElem) => {
          const {id, name, image, price,description} = curElem
            return (
                <div className="grid grid-col-1">
                   <div key={id} className="flex items-center gap-2 bg-white mb-4 shadow-md width-fit p-4 rounded-md  ">
                   <div className="w-[280px] h-[220px]">
                    <img src={image} className="h-full w-full object-cover" alt="product"  />
                   </div>
                   <div>
                    <h2 className="text-primary text-3xl"> {name} </h2>
                    <p className="text-primary text-[17px] my-3"> {price}$</p>

                    <p className="text-gray-500 text-[18px] w-3/4 mb-2"> {description.slice(0,80)} ....</p>
                    <NavLink to={`/singleproduct/${id}`}>
                    <button className="bg-primary text-white rounded-md px-8 py-2 font-[1rem]">Show More</button>
                     
                    </NavLink>
                   </div>

                   </div>


                </div>
            )
        })
    }

    <div className="flex items-center justify-between space-x-2 bg-white border-md w-fit mx-auto px-2  text-headingColor">
    <span onClick={prevPageHandler}>Prev</span>
    <span className=" flex items-center justify-between "> {pages.map((page) => <span key={page} onClick={() => setCurrentPage(page)} className={`mx-2  px-2 ${currentPage === page ? "bg-blue-700 text-white" : ""}`}> {`${page} `} </span>)}  </span>
    <span onClick={nextPageHandler}>Next</span>
    </div>
    </div>
  )
}

export default ListView