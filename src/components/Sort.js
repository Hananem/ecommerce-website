 import {BsFillGridFill, BsList} from "react-icons/bs"
 import { useFilterContext} from "../context/Filter_Context"
 const Sort = () => {
   const {filter_products, grid_view, setGridView, setListView, sorting} = useFilterContext()
    return(
      <article className="flex justify-between items-center">
     <div className="flex space-x-2 items-center">
      <button className={grid_view ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-700"} 
      onClick={setGridView} >
         <BsFillGridFill />
      </button>
      <button className={! grid_view ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-700"} 
         onClick={setListView}>
         <BsList />
      </button>
     </div>
     <div> {`${filter_products.length} products available`}</div>
     <div>
      <form>
      <label></label>
      <select name="sort" id="sort" onClick={sorting}>
         <option value="lowest">Price(lowest)</option>
         <option value="#" disabled></option>
         <option value="highest" >Price(highest)</option>
         <option value="#" disabled></option>

         <option value="a-z">Products(a-z)</option>
         <option value="#" disabled></option>

         <option value="z-a">Products(z-a)</option> 
      </select>
      </form>
     </div>
        
      </article>
    )
 }

 export default Sort