
import {AiOutlineHeart} from "react-icons/ai"
import {useWhichListContext} from "../context/WhichList_Context"


const WhichListIcon = () => {
    const {whichList} = useWhichListContext()

    return(
      <div  className="relative border border-gray-400 rounded-full w-[30px] h-[30px] grid place-items-center text-[15px] " >
    <AiOutlineHeart className="text-gray-400" />
    <div  className="absolute bg-red-600 w-[16px] h-[16px] flex items-center justify-center text-white text-[14px] -top-1 -right-3 rounded-full">
   {whichList.length}
       
    </div>
      </div>
    )
}

export default WhichListIcon