
import { FaCartPlus } from "react-icons/fa";


const MenuList = ({Items}) => {

  

  return (
    <div className="">
      <div className="h-full p-3 border border-[#cce7cc] rounded-md duration-300 ">
        <img src={Items.image} alt="" className="w-full sm:h-44 h-32 rounded-md" />
        <div className="text-start">
          <span className="text-[10px] font-serif text-yellow-300">MouMo</span>
          <h5 className="text-sm">{Items.food_name}</h5>
          <p className="text-[11px] pt-1 font-thin">{Items.description}</p>
          <div className="flex justify-between items-center">
            <h4 className="pt-2 text-sm font-bold text-emerald-500">
              Rs.{Items.price} 
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
