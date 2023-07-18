import { CardPrice, FitureHosting, SearchDomain, Table } from "../components";
import { TCardPrice, TFitureHosting, TTable } from "../types/Types";
import { fituresHosting, paketeHosting, webHosting } from "../utils/Dummydata";
import { alarm, fast, wavesTwo, wavesOne } from "../assets";
import { Container } from "@mui/material";
import { useRef, useEffect } from "react";

const WebHosting = () => {
  const divRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <section ref={divRef} className="pb-20 bg-slate-100 mx-[6px]">
      <SearchDomain />
      <img src={wavesOne} alt="waves blue" className="absolute mx-[-6px]" />
      <div className="text-center mt-20 md:mt-48">
        <h1 className=" text-[30px] md:text-[36px] font-extrabold px-2 text-blue-400">Beginnen Sie mit günstigem Hosting von PenguHosting</h1>
        <p className="text-black/70">
          Bringen Sie Ihr Unternehmen online mit günstigem Hosting von PenguHosting. <br className="md:inline-block hidden" /> Genießen Sie Rabatte von bis zu 65% !
        </p>
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row mt-20 p-4 flex-wrap gap-8">
        {webHosting.map((item: TCardPrice) => (
          <CardPrice item={item} key={item.title} />
        ))}
      </div>
      <div className="text-center  font-semibold pt-8 flex flex-col gap-4">
        <span className="text-yellow-500 uppercase text-[18px]"> unsere features</span>
        <h1 className="text-[32px]">Was wir alles bieten</h1>
      </div>
      <div className="flex items-center mb-10 justify-center rounded-lg mt-16 overflow-hidden bg-white shadow-[0px_4px_8px_0px] shadow-black/40 [&>*:nth-child(1)]:min-w-[155px] max-w-[1000px] m-auto">
        {paketeHosting.map((item: TTable) => (
          <Table item={item} key={item.title} />
        ))}
      </div>
      <img src={wavesTwo} className="absolute -mx-[6px]" />
      <div className="bg-background pt-32 md:pt-40  -mx-[6px] text-white">
        <div className="text-center   font-semibold justify-center items-center pt-8 flex flex-col gap-4">
          <span className="text-yellow-500 font-bold uppercase text-[18px]">Schnelle VPS</span>
          <img src={alarm} alt="alarm" width={64} />
          <h1 className="text-[32px]">In Minuten Online..</h1>
        </div>
        <div className="mt-12 md:flex-row flex-col gap-4 text-white p-4 flex items-center  justify-evenly">
          <img src={fast} alt="Rocket Launching" className="w-[300px] md:w-[350px] h-[300px] md:h-[350px]" />
          <div className="max-w-[600px]">
            <h1 className="font-bold text-yellow-500 text-[26px] md:text-[28px]">Blitzschnelles Hosting sorgt für eine bessere Webseite.</h1>
            <div className="text-sm">
              <p className=" leading-7 my-2">Verleihen Sie Ihrem Online-Projekt einen Vorsprung und hosten Sie Ihre Website bei einem der herausragendem Webhosting-Anbieter.</p>
              <p>Schnelleres Hosting bedeutet ein reibungsloseres Besuchererlebnis und führt dazu, dass weniger Besucher Ihre Seite frühzeitig verlassen.</p>
            </div>
          </div>
        </div>
      </div>
      <img src={wavesOne} className="-mx-[6px] absolute" alt="waves blue" />
      <div className=" -mx-[6px] pt-20 md:pt-40 flex items-center flex-col justify-center">
        <div className="text-center   font-semibold justify-center items-center pt-8 flex flex-col gap-4">
          <span className="text-yellow-500 -tracking-tight font-bold uppercase text-[18px]">Entwickelt für Wachstum und Leistung</span>
          <h1 className="text-[32px]">SCHNELL UND SICHER</h1>
        </div>
        <Container sx={{ mt: 10, display: "flex", gap: 4, justifyContent: "center", flexWrap: "wrap" }}>
          {fituresHosting.map((item: TFitureHosting, i: number) => (
            <FitureHosting item={item} key={item.title} i={i} />
          ))}
        </Container>
      </div>
    </section>
  );
};

export default WebHosting;
