import image3 from "../assets/food1.jpg";
import { FaCartPlus } from "react-icons/fa";


const MenuList = () => {
  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-3 place-content-center place-items-center mt-10">
      <div className="w-52 sm:w-64 sm:h-72 h-60 p-3 border border-[#cce7cc] rounded-md duration-300 ">
        <img src={image3} alt="" className="w-full rounded-md" />
        <div className="text-start pt-3">
          <span className="text-xs">Roadstar</span>
          <h5 className="pt-2 text-sm">Denim Shirt</h5>
          <div class="flex justify-between">
            <h4 className="pt-2 text-sm font-bold text-emerald-500">
              Rs. 750.00
            </h4>
            <a
              href=""
              className="w-10 h-10 flex justify-center items-center rounded-full text-emerald-700 font-semibold bg-emerald-100"
            ><FaCartPlus size={14} /></a>
          </div>
        </div>
      </div>
      <div className="w-52 sm:w-64 sm:h-72 h-60 p-3 border border-[#cce7cc] rounded-md duration-300 ">
        <img src={image3} alt="" className="w-full rounded-md" />
        <div className="text-start pt-3">
          <span className="text-xs">Roadstar</span>
          <h5 className="pt-2 text-sm">Denim Shirt</h5>
          <div class="flex justify-between">
            <h4 className="pt-2 text-sm font-bold text-emerald-500">
              Rs. 750.00
            </h4>
            <a
              href=""
              className="w-10 h-10 flex justify-center items-center rounded-full text-emerald-700 font-semibold bg-emerald-100"
            ><FaCartPlus size={14} /></a>
          </div>
        </div>
      </div>
      <div className="w-52 sm:w-64 sm:h-72 h-60 p-3 border border-[#cce7cc] rounded-md duration-300 ">
        <img src={image3} alt="" className="w-full rounded-md" />
        <div className="text-start pt-3">
          <span className="text-xs">Roadstar</span>
          <h5 className="pt-2 text-sm">Denim Shirt</h5>
          <div class="flex justify-between">
            <h4 className="pt-2 text-sm font-bold text-emerald-500">
              Rs. 750.00
            </h4>
            <a
              href=""
              className="w-10 h-10 flex justify-center items-center rounded-full text-emerald-700 font-semibold bg-emerald-100"
            ><FaCartPlus size={14} /></a>
          </div>
        </div>
      </div>
      <div className="w-52 sm:w-64 sm:h-72 h-60 p-3 border border-[#cce7cc] rounded-md duration-300 ">
        <img src={image3} alt="" className="w-full rounded-md" />
        <div className="text-start pt-3">
          <span className="text-xs">Roadstar</span>
          <h5 className="pt-2 text-sm">Denim Shirt</h5>
          <div class="flex justify-between">
            <h4 className="pt-2 text-sm font-bold text-emerald-500">
              Rs. 750.00
            </h4>
            <a
              href=""
              className="w-10 h-10 flex justify-center items-center rounded-full text-emerald-700 font-semibold bg-emerald-100"
            ><FaCartPlus size={14} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
