import {FaHeadphones} from "react-icons/fa"
import {GiCash} from "react-icons/gi"
import {FaTruck} from "react-icons/fa"
import {BsGift} from "react-icons/bs"


const services = [
    {
        id:'1',
        title:"Free Curbside Pickup",
        subtitle:"From all orders over $100",
        icon: <BsGift/>,
    },

    {
        id:'2',
        title:"Support 24/7",
        subtitle:"From all orders over $100",
        icon:<FaHeadphones/>,
    },

    {
        id:'3',
        title:"Free Shipping",
        subtitle:"From all orders over $100",
        icon: <FaTruck/>,
    },

    {
        id:'4',
        title:"Best Price Guarantee",
        subtitle:"From all orders over $100",
        icon: <GiCash/>,
    },

]

export default services