import { fitureOffer, server } from "../utils/Dummydata";
import { motion } from "framer-motion";
import waves from "../assets/wavesOne.svg";
import { TOffer, TServer } from "../types/Types";

const FitureOffer = () => {
  return (
    <div className="bg-background min-h-screen w-full text-white">
      <div className="text-center  font-semibold pt-8 flex flex-col gap-4">
        <span className="text-yellow-200 uppercase text-[18px]"> unsere features</span>
        <h1 className="text-[32px]">Was wir alles bieten</h1>
      </div>
      <div className="flex flex-col gap-4 md:[&>*:nth-child(2)]:flex-row-reverse">
        {fitureOffer.map((item: TOffer) => (
          <div className="flex justify-center md:flex-row  flex-col my-8 gap-2 md:gap-10 items-center" key={item.title}>
            <motion.img whileInView={{ x: [-300, 0] }} transition={{ duration: 0.8 }} src={item.image} alt={item.title} className="md:h-[260px] w-[150px] h-[150px] md:w-[260px]" />
            <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.8 }} className=" min-w-[350px] p-10  max-w-[700px] flex flex-col items-center gap-4">
              <h1 className="text-2xl text-center text-yellow-500 font-bold">{item.title}</h1>
              <p>{item.descriptionOne}</p>
              <p>{item.descriptionTwo}</p>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex flex-col py-10">
        <div className="text-center font-semibold pt-8 flex flex-col gap-4">
          <span className="text-yellow-200 uppercase text-[18px]">SCHNELLE SERVER</span>
          <h1 className="text-[32px]">Was in unseren Servern steckt</h1>
        </div>
        <div className="flex flex-col gap-5 md:flex-row justify-center items-center mt-20">
          {server.map((item: TServer) => (
            <div key={item.title} className="flex w-[250px] gap-2 flex-col items-center justify-center  font-bold h-auto">
              <img src={item.image} alt={item.title} className="w-[150px] h-[140px]" />
              <div className="flex flex-col text-center gap-4">
                <h1 className="text-[34px]">
                  {item.title}
                  <span className="text-blue-400"> {item.titleblue}</span>
                </h1>
                <p className="text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={waves} alt="waves" className="absolute" />
    </div>
  );
};

export default FitureOffer;
