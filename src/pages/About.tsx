import { Container } from "@mui/material";
import { wavesOne } from "../assets";
import { useRef, useEffect } from "react";

const About = () => {
  const divRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div ref={divRef}>
      <div className="text-center bg-black/30 p-10 px-1 font-bold">
        <h1 className="text-[34px] md:text-[46px] text-yellow-400 font-extrabold tracking-wide uppercase">Über uns</h1>
        <span className="text-[20px] md:text-[38px] text-white">Nicht nur Gutes Design sondern auch Leistungstarke Server</span>
      </div>
      <div className="bg-background font-semibold text-start">
        <Container sx={{ py: 10, display: "flex", justifyContent: "space-around", flexDirection: "column", gap: 2 }}>
          <span className="text-[26px] md:text-[32px] font-bold text-yellow-500">Wer steckt hinter penguhosting?</span>
          <div className="flex flex-col gap-4 text-white/80">
            <h1 className="text-white text-[22px]">Zwei Informatiker die Hochqualitatives Hosting anbieten möchten.</h1>
            <p className="text-sm leading-8">
              Wir, Kliment und Sebastian von Penguhosting, waren die Situation leid. Bei den meisten Hosting-Anbietern ist man an lange Verträge gebunden, es gibt keine Option für Prepaid, das Design ist völlig unübersichtlich, und man
              findet sich nirgends zurecht. Daher haben wir uns dazu entschieden, Penguhosting zu gründen, um all die Fehler, die andere Hosting-Anbieter machen, zu korrigieren und richtig zu machen. Wir lernen jeden Tag was neues und
              versuchen Penguhosting täglich zu verbessern!
            </p>
          </div>
        </Container>
        <img src={wavesOne} alt="waves White" className="absolute w-full" />
      </div>
      <div className="text-center flex gap-10 flex-col font-extrabold pt-20 md:pt-40 pb-10 uppercase  text-white bg-black/30">
        <h1 className="text-[26px] md:text-[46px] transition duration-300 hover:text-yellow-500">werde teil der penguhosting community</h1>
        <div>
          <a
            target="_blank"
            href="https://discord.gg/rxRhb7msbs"
            className="py-4 px-6 mb-4 rounded-lg bg-gradient-to-r  hover:bg-blue-600 transition duration-300 to-sky-400  from-blue-500 text-[25px] hover:text-white/70 tracking-wide md:text-[26px] shadow-lg"
          >
            starte jetzt
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
