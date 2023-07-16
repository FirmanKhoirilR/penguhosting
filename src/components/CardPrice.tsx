import { TiTick } from "react-icons/ti";
import { ICardPrice, TCardDesc } from "../types/Types";

const CardPrice = ({ item }: ICardPrice) => {
  return (
    <div key={item.title} className={`flex ${item.title === "Medium" && "md:translate-y-[-1.5vw] relative mt-4"}  gap-3 shadow-[0px_4px_8px_0px] shadow-black/40 flex-col pb-4 rounded-xl  min-h-[85vh] w-full md:w-[280px]`}>
      <div className={`${item.background} w-full $ p-2 rounded-t-xl text-center flex items-center justify-center text-white uppercase font-bold h-[100px]`}>
        <h1 className="text-xl tracking-wider">{item.title}</h1>
      </div>
      {item.title === "Medium" && <div className="absolute  font-bold text-xl  -top-8 text-orange-400 tracking-wider right-40 md:right-[75px]  ">Best Seller</div>}
      <div className="flex justify-between font-semibold items-center px-4 py-2">
        <h1 className="text-black/50 tracking-wide relative">
          {item.normalPrice}
          <span className="w-[120%] bg-black/50 absolute h-[1px] bottom-3 -left-[4px] " />
        </h1>
        <span className={`${item.background} text-white py-2 px-3 rounded-full`}>Save {item.diskon}</span>
      </div>
      <h1 className="text-center font-bold text-3xl">
        <span className="text-black/70">€ </span> {item.price} <span className="text-black/70">/mo</span>
      </h1>
      <p className="text-center text-[13px] px-1">{item.description}</p>
      <div className="flex items-center justify-center py-4">
        <button name="buttonOrder" aria-label="buttonOrder" className="py-2 px-3 text-white rounded-lg  bg-green-500 hover:bg-green-700 w-full mx-4  " type="button">
          Order Now
        </button>
      </div>
      <div className="px-4 flex flex-col gap-3">
        {item.desc.map((item: TCardDesc) => (
          <div key={item.first} className="text-black/80 flex font-semibold">
            <p className="flex gap-1 font-semibold items-center">
              <TiTick size={20} className="text-green-600" />
              {item.first}
              <span className="font-normal">{item.second}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPrice;
