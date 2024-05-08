
import Burger from "../assets/burger.png"
import Pizza from "../assets/pizza.png"
import Subway from "../assets/sandwich.png"
import Momo from "../assets/momo.png"
import Noodle from "../assets/noodle.png"
import Fries from "../assets/fries.png"
import Ice_cream from "../assets/ice-cream.png"
import Rice from "../assets/fried-rice.png"
import Cake from "../assets/birthday-cake.png"
import Non_veg from "../assets/chicken-leg.png"

import MenuList from "./MenuList"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Menu =() => {

 
    return(
        <div className="py-20 max-w-7xl mx-auto " id="menu">
        <p className="text-sm text-slate-300">Our Top Dishes</p>
        <h1 className="text-5xl font-semibold">Menu</h1>
        
        <div className="mt-16 flex sm:p-6 p-3 mx-4 rounded-lg bg-white sm:flex-row   gap-10 justify-between overflow-scroll no-scrollbar items-center">
            <div className="sm:mx-3 opacity-25 hover:opacity-100 duration-300 hover:scale-110 hover:duration-500 cursor-pointer">
                <img src={Burger} alt="" className="sm:w-20 w-10"/>
                <p className="font-bold text-black">Burger</p>
            </div>
            <div className="sm:mx-3 opacity-25 hover:opacity-100 duration-300 hover:scale-110 hover:duration-500 cursor-pointer">
                <img src={Fries} alt="" className="sm:w-20 w-10"/>
                <p className="font-bold text-black">Fries</p>
            </div>
            <div className="sm:mx-3 opacity-25 hover:opacity-100 duration-300 hover:scale-110 hover:duration-500 cursor-pointer">
                <img src={Pizza} alt="" className="sm:w-20 w-10"/>
                <p className="font-bold text-black">Pizza</p>
            </div>
            <div className="sm:mx-3 opacity-25 hover:opacity-100 duration-300 hover:scale-110 hover:duration-500 cursor-pointer">
                <img src={Momo} alt="" className="sm:w-20 w-10"/>
                <p className="font-bold text-black">Momo</p>
            </div>
            <div className="sm:mx-3 opacity-25 hover:opacity-100 duration-300 hover:scale-110 hover:duration-500 cursor-pointer">
                <img src={Noodle} alt="" className="sm:w-20 w-10"/>
                <p className="font-bold text-black">Noodle</p>
            </div>
            <div className="sm:mx-3 opacity-25 hover:opacity-100 duration-300 hover:scale-110 hover:duration-500 cursor-pointer">
                <img src={Rice} alt="" className="sm:w-20 w-10"/>
                <p className="font-bold text-black">Rice</p>
            </div>
            <div className="sm:mx-3 opacity-25 hover:opacity-100 duration-300 hover:scale-110 hover:duration-500 cursor-pointer">
                <img src={Cake} alt="" className="sm:w-20 w-10"/>
                <p className="font-bold text-black">Cake</p>
            </div>
            <div className="sm:mx-3 opacity-25 hover:opacity-100 duration-300 hover:scale-110 hover:duration-500 cursor-pointer">
                <img src={Ice_cream} alt="" className="sm:w-20 w-10"/>
                <p className="font-bold text-black">Ice_cream</p>
            </div>
            <div className="sm:mx-3 opacity-25 hover:opacity-100 duration-300 hover:scale-110 hover:duration-500 cursor-pointer">
                <img src={Non_veg} alt="" className="sm:w-20 w-10"/>
                <p className="font-bold text-black">Non_veg</p>
            </div>
            <div className="sm:mx-3 opacity-25 hover:opacity-100 duration-300 hover:scale-110 hover:duration-500 cursor-pointer">
                <img src={Subway} alt="" className="sm:w-20 w-10"/>
                <p className="font-bold text-black">Subway</p>
            </div>
            
            
        </div>
        <MenuList/>
        </div>
        
    )
}

export default Menu;