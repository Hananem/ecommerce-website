import { useProductContext } from '../context/ProductsContext'
import ProductCard from './ProductCard'

const Products = () => {
const {isLoading, featuredProducts} = useProductContext()

    
        if(isLoading) {
            return <div  className="text-center text-2xl text-slate-500">............Loading</div>
        }
        
return (<section className="w-4/5 mx-auto  mt-12">

<h2 className="text-primary font-bold text-4xl hover:underline mb-4">Products</h2>
    
    <div className="grid grid-cols-1   lg:grid-cols-2 xl:grid-cols-4  gap-8">
        {
          featuredProducts && featuredProducts.map((curElem) => {
            return(
<ProductCard key={curElem.id} {...curElem} />
            )
          })
        }
       </div>
    
    </section>)
    
    
}

export default Products 