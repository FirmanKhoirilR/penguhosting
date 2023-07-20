import { fitureOffer, server } from "../utils/Dummydata";
import waves from "../assets/wavesOne.svg";
import { TOffer, TServer } from "../types/Types";
import { CardFitureOffer } from ".";

const FitureOffer = () => {
  return (
    <div className="bg-background min-h-screen pt-10 px-5 w-full text-white">
      <div className="text-center  font-semibold pt-8 flex flex-col gap-4">
        <span className="text-yellow-200 uppercase text-[18px]"> unsere features</span>
        <h1 className="text-[32px]">Was wir alles bieten</h1>
      </div>
      <div className="flex flex-col gap-4">
        {fitureOffer.map((item: TOffer, i: number) => (
          <CardFitureOffer item={item} i={i} key={item.title} />
        ))}
      </div>
      <div className="flex flex-col py-10">
        <div className="text-center font-semibold pt-8 flex flex-col gap-4">
          <p className="text-yellow-200 uppercase text-[18px]">SCHNELLE SERVER</p>
          <h1 className="text-[32px]">Was in unseren Servern steckt</h1>
        </div>
        <div className="flex flex-col gap-3 md:gap-5 md:flex-row mx-4 justify-center items-center mt-20">
          {server.map((item: TServer) => (
            <div key={item.title} className="flex w-full  md:w-[300px] px-6 md:px-4 py-4 rounded-lg min-h-[320px] md:min-h-[430px] gap-2 flex-col items-center md:items-start justify-start  font-bold h-auto">
              <img src={item.image} loading="lazy" alt={item.title} className="w-[150px] h-[150px]" />
              <div className="flex text-center md:text-start flex-col gap-2">
                <h1 className="text-[22px] md:text-[26px]">
                  {item.title}
                  <span className="text-blue-400"> {item.titleblue}</span>
                </h1>
                <p className=" text-white/70 text-[12px] md:text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={waves} alt="waves" className="absolute mx-[-20px]" />
    </div>
  );
};

export default FitureOffer;
