import image3 from "../assets/food1.jpg";
import { FaCartPlus } from "react-icons/fa";


const MenuList = () => {

  const Items = [
    {
      id: 1,
      image:"../assets/food1.jpg",
      food_name:"Momos",
      description:"Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price:"120"
    },
    {
      id: 2,
      image:"../assets/food1",
      food_name:"Burger",
      description:"Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price:"95"
    },
    {
      id: 3,
      image:"../assets/food1",
      food_name:"Pizza",
      description:"Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price:"180"
    },
    {
      id: 4,
      image:"../assets/food1",
      food_name:"Icecream",
      description:"Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price:"145"
    },
    {
      id: 4,
      image:"../assets/food1",
      food_name:"Icecream",
      description:"Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price:"145"
    },
    {
      id: 4,
      image:"../assets/food1",
      food_name:"Icecream",
      description:"Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price:"145"
    },
    {
      id: 4,
      image:"../assets/food1",
      food_name:"Icecream",
      description:"Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price:"145"
    },
    {
      id: 4,
      image:"../assets/food1",
      food_name:"Icecream",
      description:"Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price:"145"
    },
  ]

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-2 mx-2 place-items-center mt-10">
      {Items.map((item)=><div className="w-42 sm:w-64 h-full p-3 border border-[#cce7cc] rounded-md duration-300 ">
        <img src={item.image} alt="" className="w-full rounded-md" />
        <div className="text-start">
          <span className="text-[10px] font-serif text-yellow-300">MouMo</span>
          <h5 className="text-sm">{item.food_name}</h5>
          <p className="text-[11px] pt-1 font-thin">{item.description}</p>
          <div className="flex justify-between items-center">
            <h4 className="pt-2 text-sm font-bold text-emerald-500">
              Rs.{item.price} 
            </h4>
            <a
              href=""
              className="w-6 h-6 sm:w-10 sm:h-10 flex justify-center items-center rounded-full text-emerald-700 font-semibold bg-emerald-100"
            ><FaCartPlus size={14} /></a>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default MenuList;
