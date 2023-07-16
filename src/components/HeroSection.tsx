import { cardHome, sosialMedia } from "../utils/Dummydata";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TCard } from "../types/Types";

const HeroSection = () => {
  return (
    <div className="flex md:flex-row  w-full bg-black/30 flex-col items-center justify-evenly py-16 gap-10 md:gap-0">
      <div className="text-center">
        <h1 className="font-[900] text-yellow-400 uppercase text-[45px] md:text-[56px]">
          Blitzschnelle <br /> Einrichtung & <br /> Leistung
        </h1>
        <h3 className="text-[32px] md:text-[40px] font-bold text-white">
          Mit unseren Eiskalten <br /> <span className="border-b-4 border-yellow-400 ">Servern</span>
        </h3>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center flex-wrap justify-center md:flex-row p-2 flex-col mt-4 gap-4">
          {cardHome.map((item: TCard) => (
            <Link to={item.url} key={item.name} className="group relative shadow-[0px_8px_12px_2px_rgb(0,0,0,0.6)] flex flex-col items-center gap-2 md:w-[200px] w-full h-[250px] object-fill overflow-hidden rounded-sm">
              <img src={item.image} alt={item.name} width={200} height={200} className="h-[250px] group-hover:scale-125 transition duration-1000 w-full object-fill md:w-[200px] ease-in-out" />
              <div className="absolute bg-black/40 text-white flex flex-col gap-3 items-center justify-center h-[250px] w-full">
                <span className="text-blue-100">{item.icon}</span>
                <h1 className="font-bold text-[22px]">{item.name}</h1>
                <span className="text-[22px] font-bold">AB {item.price}</span>
                <button className="tracking-tighter text-sm py-2 px-3 hover:bg-blue-600 rounded-sm bg-blue-500">JETZT KAUFEN</button>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex text-white  justify-center md:justify-start gap-4 items-center">
          <h1 className="text-yellow-400 text-xl font-bold">Sosial Media</h1>
          <AiOutlineArrowRight size={25} />
          <div className="flex items-center gap-2" id="#">
            {sosialMedia.map((item, i: number) => (
              <motion.a target="_blank" whileInView={{ scale: [0, 1] }} transition={{ delay: i * 0.5, duration: 0.6 }} href={item.url} className={`p-2 rounded-full  text-[28px] ${item.className}`} key={item.name}>
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
