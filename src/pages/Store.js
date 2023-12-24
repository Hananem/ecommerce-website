import ProductList from "../components/ProductList"
import Sort from "../components/Sort"
import FilterSection from "../components/FilterSection"

const  Store = () => {
    return (
     <section className="w-4/5 mx-auto px-4 mt-8">
       <div className='w-full h-full flex flex-col mdl:flex-row pb-20 gap-10  '>
    
         <div className="w-[320px] mdl:[20%]  lgl:w-[25%]  h-full">
<FilterSection />
         </div>
         <div  className=" w-full mdl:w-[80%] lgl:w-[75%] h-full mt-12">
        
         <Sort/>
         <div className="grid gap-4">
<div className="grid-item">
         <ProductList/>
         </div>
       </div>   
         </div>
       </div>
   </section>
    )
   }
   
   export default Store