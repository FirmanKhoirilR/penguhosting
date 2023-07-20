import { Container } from "@mui/material";
import { agbDesc } from "../utils/Dummydata";
import { useEffect, useRef } from "react";

const AGB = () => {
  const divRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: "smooth", top: 0 });
  }, []);

  return (
    <div ref={divRef} className="bg-zinc-100 w-full flex flex-col items-center px-2 font-semibold py-10">
      <Container sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <h1 className="text-[56px] font-bold mb-10 border-b-8 border-yellow-500 w-[48px]">AGB</h1>
        {agbDesc.map((item) => (
          <div key={item.title} className="text-start">
            <h1 className="mb-2 text-[20px]">{item.title}</h1>
            <p className="text-black/70 tracking-[0.01em]">{item.desc}</p>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default AGB;
