import { Container } from "@mui/material";
import { wavesOne, wavesTwo } from "../assets";
import { FAQ, FitureHosting, SearchDomain, Table, Testimonial } from "../components";
import { TFitureHosting, TTable } from "../types/Types";
import { fituresHosting, paketeDomainHosting } from "../utils/Dummydata";

const Domain = () => {
  return (
    <div>
      <SearchDomain />
      <img src={wavesOne} alt="waves blue" className="absolute" />

      <div className="bg-slate-100">
        <div className="pt-48 text-center font-bold">
          <span className="text-yellow-500 font-semibold">DOMAIN NAMEN</span>
          <h1 className="text-[27px] md:text-[37px]">Wieso du ein Domain Namen brauchst?</h1>
          <p className="text-black/70 font-normal">Eine Domain schafft Vertrauen und Professionalität.</p>
        </div>
        <Container sx={{ py: 8 }}>
          <div className="flex items-center justify-center rounded-lg overflow-hidden shadow-[0px_4px_8px_0px] shadow-black/40 max-w-[1000px] m-auto">
            {paketeDomainHosting.map((item: TTable) => (
              <Table item={item} key={item.title} only={true} />
            ))}
          </div>
        </Container>
        <img src={wavesTwo} alt="waves white" className="absolute" />
      </div>
      <Testimonial />
      <FAQ />

      <div className="flex flex-col gap-10 pt-20 md:pt-40 bg-blue-50">
        <div className="text-center   font-semibold justify-center items-center pt-8 flex flex-col gap-4">
          <span className="text-yellow-500 -tracking-tight font-bold uppercase text-[18px]">Entwickelt für Wachstum und Leistung</span>
          <h1 className="text-[32px]">SCHNELL UND SICHER</h1>
        </div>
        <Container sx={{ display: "flex", gap: 4, pb: 5, justifyContent: "center", flexWrap: "wrap" }}>
          {fituresHosting.map((item: TFitureHosting, i: number) => (
            <FitureHosting item={item} key={item.title} i={i} />
          ))}
        </Container>
      </div>
      <img src={wavesTwo} alt="waves white" className="absolute" />
      <div className="text-center flex gap-10 flex-col font-extrabold pt-20 md:pt-40 pb-10 uppercase  text-white bg-black/30">
        <h1 className="text-[26px] md:text-[46px] transition duration-300 hover:text-yellow-500">werde teil der penguhosting community</h1>
        <div className="">
          <a
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

export default Domain;
