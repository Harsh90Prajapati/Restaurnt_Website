import image3 from "../assets/food1.jpg";
import { FaCartPlus } from "react-icons/fa";


const MenuList = () => {
  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-3 place-content-center place-items-center mt-10">
      <div className="w-40 sm:w-64 h-full p-3 border border-[#cce7cc] rounded-md duration-300 ">
        <img src={image3} alt="" className="w-full rounded-md" />
        <div className="text-start pt-3">
          <span className="text-sm font-serif text-yellow-300">MouMo</span>
          <h5 className="pt-1 text-sm">Fried MoMo</h5>
          <p className="text-xs pt-1 font-thin">description</p>
          <div class="flex justify-between">
            <h4 className="pt-2 text-sm font-bold text-emerald-500">
              Rs. 190.00
            </h4>
            <a
              href=""
              className="w-6 h-6 sm:w-10 sm:h-10 flex justify-center items-center rounded-full text-emerald-700 font-semibold bg-emerald-100"
            ><FaCartPlus size={14} /></a>
          </div>
        </div>
      </div>
      <div className="w-40 sm:w-64 h-full p-3 border border-[#cce7cc] rounded-md duration-300 ">
        <img src={image3} alt="" className="w-full rounded-md" />
        <div className="text-start pt-3">
          <span className="text-sm font-serif text-yellow-300">MouMo</span>
          <h5 className="pt-1 text-sm">Fried MoMo</h5>
          <p className="text-xs pt-1 font-thin">description</p>
          <div class="flex justify-between">
            <h4 className="pt-2 text-sm font-bold text-emerald-500">
              Rs. 190.00
            </h4>
            <a
              href=""
              className="w-6 h-6 sm:w-10 sm:h-10 flex justify-center items-center rounded-full text-emerald-700 font-semibold bg-emerald-100"
            ><FaCartPlus size={14} /></a>
          </div>
        </div>
      </div>
      <div className="w-40 sm:w-64 h-full p-3 border border-[#cce7cc] rounded-md duration-300 ">
        <img src={image3} alt="" className="w-full rounded-md" />
        <div className="text-start pt-3">
          <span className="text-sm font-serif text-yellow-300">MouMo</span>
          <h5 className="pt-1 text-sm">Fried MoMo</h5>
          <p className="text-xs pt-1 font-thin">description</p>
          <div class="flex justify-between">
            <h4 className="pt-2 text-sm font-bold text-emerald-500">
              Rs. 190.00
            </h4>
            <a
              href=""
              className="w-6 h-6 sm:w-10 sm:h-10 flex justify-center items-center rounded-full text-emerald-700 font-semibold bg-emerald-100"
            ><FaCartPlus size={14} /></a>
          </div>
        </div>
      </div>
      <div className="w-40 sm:w-64 h-full p-3 border border-[#cce7cc] rounded-md duration-300 ">
        <img src={image3} alt="" className="w-full rounded-md" />
        <div className="text-start pt-3">
          <span className="text-sm font-serif text-yellow-300">MouMo</span>
          <h5 className="pt-1 text-sm">Fried MoMo</h5>
          <p className="text-xs pt-1 font-thin">description</p>
          <div class="flex justify-between">
            <h4 className="pt-2 text-sm font-bold text-emerald-500">
              Rs. 190.00
            </h4>
            <a
              href=""
              className="w-6 h-6 sm:w-10 sm:h-10 flex justify-center items-center rounded-full text-emerald-700 font-semibold bg-emerald-100"
            ><FaCartPlus size={14} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
