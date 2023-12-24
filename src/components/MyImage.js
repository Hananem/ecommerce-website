import React, {useState} from "react"

const MyImage = ({imgs= [{url:""}]}) => {

const [mainImg, setMainImg] = useState(imgs[0])
    return(
      <div className="flex flex-col gap-6 ">
      <div>
      <img src={mainImg.url}  alt="product" className="h-[340px] w-[340px] aspect-square object-cover rounded-xl"/>
          
      </div>
          <div className="flex flex-row items-center justify-between w-[340px]">
      {imgs && imgs.map((curElem, index) => {
        return(
            <div className="">
                <img src={curElem.url} 
                key={index}
                 className="w-16 h-16 rounded-md object-cover "
                onClick={() => setMainImg(curElem)}
                 alt="product"
                  />
            </div>
        )
      })}


      </div>

    
      </div>
      
    )
}

export default MyImage