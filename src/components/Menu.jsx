import Burger from "/assets/burger.png";
import Pizza from "/assets/pizza.png";
import Subway from "/assets/sandwich.png";
import Momo from "/assets/momo.png";
import Noodle from "/assets/noodle.png";
import Fries from "/assets/fries.png";
import Ice_cream from "/assets/ice-cream.png";
import Rice from "/assets/fried-rice.png";
import Cake from "/assets/birthday-cake.png";
import Non_veg from "/assets/chicken-leg.png";
import All_food from "/assets/fast-food.png";
import MenuList from "./MenuList";
import { useState } from "react";

const Menu = () => {
  const [items] = useState([
    {
      id: 1,
      image:"../assets/momos.jpg",
      logo: Momo,
      food_name: "Momo",
      description:
        "Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price: "120",
    },
    {
      id: 10,
      image: "../assets/fries.jpg",
      logo: Fries,
      food_name: "Fries",
      description:
        "Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price: "145",
    },
    {
      id: 2,
      image: "../assets/burger.jpg",
      logo: Burger,
      food_name: "Burger",
      description:
        "Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price: "95",
    },
    {
      id: 3,
      image: "../assets/piz.jpg",
      logo: Pizza,
      food_name: "Pizza",
      description:
        "Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price: "180",
    },
    {
      id: 4,
      image: "../assets/icecream.jpg",
      logo: Ice_cream,
      food_name: "Icecream",
      description:
        "Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price: "145",
    },
    {
      id: 5,
      image: "../assets/noodles.jpg",
      logo: Noodle,
      food_name: "Noodle",
      description:
        "Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price: "145",
    },
    {
      id: 6,
      image: "../assets/rice.jpg",
      logo: Rice,
      food_name: "Fried rice",
      description:
        "Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price: "145",
    },
    {
      id: 7,
      image: "../assets/cake.jpg",
      logo: Cake,
      food_name: "Cake",
      description:
        "Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price: "145",
    },
    {
      id: 8,
      image: "../assets/food1.jpg",
      logo: Subway,
      food_name: "Subway",
      description:
        "Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price: "145",
    },
    {
      id: 9,
      image: "../assets/food1.jpg",
      logo: Non_veg,
      food_name: "Non-veg",
      description:
        "Momos are a type of steamed filled dumpling in Tibetan and Nepali cuisine",
      price: "145",
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState("");

  const handleFilterClick = (food_name) => {
    setFilter(food_name);
    setActive(food_name);
  };

  const filterItems =
    filter === "All"
      ? items
      : items.filter((items) => items.food_name === filter);

  return (
    <div className="py-20 max-w-7xl mx-auto " id="menu">
      <p className="text-sm text-slate-300">Our Top Dishes</p>
      <h1 className="text-5xl font-semibold">Menu</h1>

      <div className="mt-16 flex sm:p-6 p-3 mx-4 rounded-lg bg-white gap-10 justify-between overflow-scroll no-scrollbar items-center">
        <button
          onClick={() => handleFilterClick("All")}
          className={`sm:mx-3 ${
            active === "All"
              ? "hover:opacity-100 "
              : "opacity-25 duration-300 hover:scale-110 hover:duration-500"
          }cursor-pointer`}
        >
          <img src={All_food} alt="" className="sm:w-20 w-10 max-w-none" />
          <p className="font-bold text-black text-xs">All</p>
        </button>

        {items.map((item) => (
          <button 
            onClick={() => handleFilterClick(`${item.food_name}`)}
            className={`sm:mx-3 ${
              active === `${item.food_name}`
                ? "hover:opacity-100 "
                : "opacity-25 duration-300 hover:scale-110 hover:duration-500"
            }  cursor-pointer`}
            key={item.id}
          >
            <img src={item.logo} alt="" className="sm:w-16 w-10 max-w-none" />
            <p className="font-bold text-black text-xs mt-1">
              {item.food_name}
            </p>
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-2 mx-2 place-items-center mt-10">
        {filterItems.map((items) => (
          <MenuList key={items.id} Items={items} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
