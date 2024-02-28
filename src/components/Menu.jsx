import image1 from "../assets/food1.jpg"
import image2 from "../assets/food2.jpg"
import image3 from "../assets/food3.jpg"
import MenuList from "./MenuList"

const Menu =() => {
    return(
        <div className="my-20" id="menu">
        <h1 className="text-5xl font-semibold">Menu</h1>
        <p className="mt-4 text-sm ">Our Top Dishes</p>
        <div className="mt-16 flex sm:flex-row flex-col gap-4 w-full justify-center items-center">
            <div>
                <img src={image1} alt="" className=" w-[400px] h-[297px] opacity-25 hover:opacity-100 duration-500 hover:scale-110 hover:duration-500" />
            </div>
            <div>
                <img src={image2} alt="" className=" w-[400px] h-[297px] opacity-25 hover:opacity-100 duration-500 hover:scale-110 hover:duration-500" />
            </div>
            <div>
                <img src={image3} alt="" className=" w-[400px] h-[297px] opacity-25 hover:opacity-100 duration-500 hover:scale-110 hover:duration-500" />
            </div>
        </div>
        <div className="w-full flex justify-end mt-8">
        <button className="text-sm font-semibold uppercase text-slate-300 " >full menu </button>
        </div>

        <MenuList/>
        </div>
        
    )
}

export default Menu;