import { cardHome, sosialMedia } from "../utils/Dummydata";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TCard } from "../types/Types";
import { CardGame } from ".";

const HeroSection = () => {
  return (
    <div className="flex lg:flex-row  w-full bg-black/30 flex-col items-center justify-evenly py-16 gap-10 md:gap-6">
      <div className="text-center">
        <h1 className="font-[900] text-yellow-400 uppercase tracking-tight text-[42px] md:text-[52px]">
          Blitzschnelle <br /> Einrichtung & <br /> Leistung
        </h1>
        <h3 className="text-[30px] md:text-[36px] font-bold text-white">
          Mit unseren Eiskalten <br /> <span className="border-b-4 border-yellow-400 ">Servern</span>
        </h3>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center flex-wrap xl:[&>*:nth-child(2)]:scale-125 justify-center md:flex-row p-2 flex-col mt-2 md:mt-4 gap-4 md:gap-[44px]">
          {cardHome.map((item: TCard) => (
            <CardGame item={item} key={item.name} />
          ))}
        </div>
        <div className="mt-8 md:mt-14 flex px-1 text-white  justify-center gap-4 items-center">
          <div className="flex gap-2 items-center">
            <h1 className="text-yellow-400  text-[12px] xs:text-[14ox] md:text-xl font-bold">Sosial Media</h1>
            <AiOutlineArrowRight size={20} />
          </div>
          <div className="flex items-center gap-1.5 md:gap-2" id="#">
            {sosialMedia.map((item, i: number) => (
              <motion.a target="_blank" whileInView={{ scale: [0, 1] }} transition={{ delay: i * 0.5, duration: 0.6 }} href={item.url} className={`p-[6px] md:p-2 rounded-full  text-[28px] ${item.className}`} key={item.name}>
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
