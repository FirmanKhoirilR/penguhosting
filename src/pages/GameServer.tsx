import { Container } from "@mui/material";
import { fituresHosting, gameFitureOffer, gameMaster } from "../utils/Dummydata";
import { CardFitureOffer, CardGame, FAQ, FitureHosting, Testimonial } from "../components";
import { wavesOne, video } from "../assets";
import { TFitureHosting, TOffer } from "../types/Types";
import { useRef, useEffect } from "react";

const GameServer = () => {
  const divRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={divRef} className="scroll-smooth">
      <div className=" bg-black/40 ">
        <div className="text-center text-white pt-4 pb-2 px-1 font-bold">
          <h1 className="text-[34px] md:text-[46px] text-yellow-400 font-extrabold tracking-wide uppercase">gameserver</h1>
          <span className="text-[20px] md:text-[38px]"> Eiskalt und Blitzschnell</span>
        </div>

        <Container sx={{ display: "flex", justifyContent: "center", gap: 3, py: 4, my: 4, flexDirection: { md: "row", xs: "column" }, flexWrap: "wrap" }} className="md:[&>*:nth-child(2)]:scale-105 ">
          {gameMaster.map((item) => (
            <CardGame key={item.name} item={item} />
          ))}
        </Container>

        <div className="bg-background text-white pt-24 md:pt-52">
          <h1 className="text-center font-bold text-3xl mb-10">In Sekunden schnelle Online!</h1>
          <div className="flex flex-col gap-4 ">
            {gameFitureOffer.map((item: TOffer) => (
              <CardFitureOffer item={item} key={item.title} />
            ))}
          </div>
          <img src={wavesOne} alt="waves white" className="absolute" />
        </div>

        <div className=" flex flex-col pt-36 pb-20 gap-20 items-center text-white">
          <div className="text-center  font-semibold justify-center items-center pt-8 flex flex-col gap-4">
            <span className="text-yellow-400 -tracking-tight font-bold uppercase text-[18px]">überzeug dich selbst</span>
            <h1 className="text-[36px]">Unser Gamepanel</h1>
          </div>
          <div className="mx-4">
            <video controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="bg-slate-100 pt-20 pb-0 md:pb-4 ">
          <div className="text-center   font-semibold justify-center items-center pt-8 flex flex-col gap-4">
            <span className="text-yellow-500 -tracking-tight font-bold uppercase text-[18px]">Entwickelt für Wachstum und Leistung</span>
            <h1 className="text-[32px]">SCHNELL UND SICHER</h1>
          </div>
          <Container sx={{ mt: 10, display: "flex", gap: 4, pb: 5, justifyContent: "center", flexWrap: "wrap" }}>
            {fituresHosting.map((item: TFitureHosting, i: number) => (
              <FitureHosting item={item} key={item.title} i={i} />
            ))}
          </Container>
        </div>

        <FAQ />
        <img src={wavesOne} alt="waves blue" className="absolute" />
        <Testimonial />
      </div>
    </div>
  );
};

export default GameServer;
