import { Container } from "@mui/material";
import { gameFitureOffer, gameMaster } from "../utils/Dummydata";
import { CardFitureOffer, CardGame, FAQ, Testimonial } from "../components";
import { wavesOne, wavesTwo } from "../assets";
import { TOffer } from "../types/Types";

const GameServer = () => {
  return (
    <div className=" text-black ">
      <div className="bg-background text-white">
        <div className="text-center py-2 px-1 font-bold">
          <h1 className="text-[34px] md:text-[46px] text-yellow-500"> Blitzschnelle Einrichtung & Leistung</h1>
          <span className="text-[20px] md:text-[24px]"> Mit unseren Eiskalten Servern</span>
        </div>
        <Container sx={{ display: "flex", justifyContent: "center", gap: 2, py: 4, flexDirection: { md: "row", xs: "column" }, flexWrap: "wrap" }}>
          {gameMaster.map((item) => (
            <CardGame key={item.name} item={item} />
          ))}
        </Container>
        <img src={wavesOne} alt="waves blue" className="absolute" />
      </div>

      <div className="bg-slate-100 pt-24 md:pt-52">
        <div className="flex flex-col gap-4 md:[&>*:nth-child(2)]:flex-row-reverse">
          {gameFitureOffer.map((item: TOffer) => (
            <CardFitureOffer item={item} key={item.title} />
          ))}
        </div>
        <img src={wavesTwo} alt="waves white" className="absolute" />
      </div>
      <div className="bg-purple-900">
        <Testimonial />
      </div>

      <FAQ />
    </div>
  );
};

export default GameServer;
