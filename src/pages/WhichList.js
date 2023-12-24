import {useWhichListContext} from "../context/WhichList_Context"
import ProductCard from "../components/ProductCard"
import img from '../images/empty.png'

const WhichList =() => {
    const {whichList} = useWhichListContext()
    if( whichList.length === 0) {
        return <div className="h-[100vh] flex items-center  justify-center"> <img src={img} className="h-[200px] w-[200px]" alt=" whichList" /></div>
    } 
    return(
      <active className="w-4/5 h-[100vh] pt-16 mx-auto mt-16 ">

<h2 className="text-primary font-bold text-4xl mb-4">Products You Liked</h2>
<div className="w-4/5 h-[100vh] pt-16 mx-auto mt-16   grid sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-4">

{
                whichList&& whichList.map((curElem) => {
                    return <ProductCard key={curElem.id} {...curElem} />
                })
            }
</div>

      </active>
    )
}
export default WhichList