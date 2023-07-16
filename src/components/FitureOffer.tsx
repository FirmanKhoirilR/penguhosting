import { fitureOffer, server } from "../utils/Dummydata";
import waves from "../assets/wavesOne.svg";
import { TOffer, TServer } from "../types/Types";
import { CardFitureOffer } from ".";

const FitureOffer = () => {
  return (
    <div className="bg-background min-h-screen w-full text-white">
      <div className="text-center  font-semibold pt-8 flex flex-col gap-4">
        <span className="text-yellow-200 uppercase text-[18px]"> unsere features</span>
        <h1 className="text-[32px]">Was wir alles bieten</h1>
      </div>
      <div className="flex flex-col gap-4 md:[&>*:nth-child(2)]:flex-row-reverse">
        {fitureOffer.map((item: TOffer) => (
          <CardFitureOffer item={item} key={item.title} />
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
