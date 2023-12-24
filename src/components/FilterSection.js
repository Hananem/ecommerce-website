import { useFilterContext } from "../context/Filter_Context"
import FormatPrice from "./FormatPrice"

const FilterSection = () => {
    const {filters:{text,category, color,price, maxPrice, minPrice}, 
    all_products,
    updateFilterValue, 
    clearFilters
}  = useFilterContext()
    //TO GET THE UNIQUE DATA OF EACH FIELD
    const getUniqueData = (data, property) => {
        let newVal = data && data.map((curElem) => {
            return curElem[property];
        });

       if (property === "colors") {
         return ( newVal =  ["all", ...new Set([  ].concat(...newVal))])
         //newVal = newVal.flat();
       } else {
        return (newVal = ["all",...new Set(newVal)])

       }
            
        
    }

    //WE NEED UNIQUE DATA

    const categoryOnlyData = getUniqueData(all_products,  "category")
    const brandOnlyData = getUniqueData(all_products,  "brand")
    const colorsOnlyData = getUniqueData(all_products,  "colors")

 
    return(
    <div className="py-8 px-4 rounded-md bg-white  mt-8">
        <form onSubmit={(e) => e.preventDefault()}  >
     <h3  className="text-smallTextColor font-bold">Search</h3>

            <input type="text" 
            name="text"
             placeholder="search"
             value={text}
             onChange={updateFilterValue}
               />
        </form>

        <div>
            <h3  className="text-smallTextColor font-bold">Category</h3>
            <div className="flex flex-col flex-start  space-y-2 text-gray-500">
                {
                    categoryOnlyData && categoryOnlyData.map((curElem, index) => {
                        return <button key={index}
                        type="button"
                        name="category"
                        value={curElem}
                        onClick={updateFilterValue}
                        >
                            {curElem}
                        </button>
                    } )
                }
            </div>
        </div>

        <div>
            <h3  className="text-smallTextColor font-bold">Brand</h3>

            <form action="#">
               <select name="brand" id="brand" onClick={updateFilterValue} >
                  {
                    brandOnlyData && brandOnlyData.map((curElem, index) => {
                        return (
                            <option key={index}  value={curElem } name="brand">
                            {curElem}
                            </option>
                        )
                    })
                  }
               </select>
            </form>
        </div>

     <div>
     <h3  className="text-smallTextColor font-bold">Price</h3>
     <p><FormatPrice price={price} /></p>
     <input type="range" 
     name="price"
     min={minPrice}
      max={maxPrice} 
      value={price} 
        onChange={updateFilterValue}
      />
     </div>
<div>
<h3  className="text-smallTextColor font-bold">Colors</h3>
<div className="grid grid-cols-8 ">
{
    colorsOnlyData && colorsOnlyData.map((curColor, index) => {
        if ( curColor === "all") {
        return (
        <button
        key={index }
        value={curColor}
        name="color"
        type="button"
        onClick={updateFilterValue}
        >
       All
        </button>
        ) 
     }

            return (
        <button
        key={index }
        value={curColor}
        name="color"
        type="button"
         style={{backgroundColor:curColor}}
         className="w-[1rem] h-[1rem] rounded-full  "  
      
        onClick={updateFilterValue}>
        
        {color === curColor ? "" : null }

        </button>
        ) 
       
  })
}
</div>

</div>

     <div>
        <button 
        className="btn btn-primary"
        onClick={clearFilters}>
         Clear Filters
        </button>
     </div>
    </div>
    )
    }
    
    export default FilterSection