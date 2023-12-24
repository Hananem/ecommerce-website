import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs"



const Stars = ({stars, reviews}) => {
    const ratingStar = Array.from({ length: 5}, (elem, index) =>{
       let number = index + 0.5;

       return <span className="text-yellow-500 " key={index}>
       {stars >= index +1 ? <BsStarFill />: stars >= number ? <BsStarHalf />  : <BsStar />}
        </span>
    })
    return(
      <div className="flex items-center space-x-2">
      <span className="flex items-center space-x-1">
      {ratingStar}

      </span>
        <p className="text-gray-400 font-[11px]">({reviews} customer reviews) </p>
      </div>
    )
}
export default Stars