import { Link } from "react-router-dom";
import { ICard } from "../types/Types";

const CardGame = ({ item }: ICard) => {
  return (
    <Link to={item.url} key={item.name} className="group relative shadow-[0px_8px_12px_2px_rgb(0,0,0,0.6)] flex flex-col items-center gap-2 md:w-[200px] w-full h-[250px] overflow-hidden rounded-sm">
      <img src={item.image} alt={item.name} width={200} height={200} className="h-[250px] group-hover:scale-125 transition duration-1000 w-full object-fill md:w-[200px] ease-in-out" />
      <div className="absolute bg-black/40 text-white flex flex-col gap-3 items-center justify-center h-[250px] w-full">
        <span className="text-blue-100">{item.icon}</span>
        <h1 className="font-bold text-[20px] text-center">{item.name}</h1>
        <span className="text-[20px] font-bold">AB {item.price}</span>
        <button className="tracking-tighter text-sm py-2 px-3 hover:bg-blue-600 rounded-sm bg-blue-500">JETZT KAUFEN</button>
      </div>
    </Link>
  );
};

export default CardGame;
