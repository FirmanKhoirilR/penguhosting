import { useGlobalContext } from "../hooks/StateContext";
import { Faq } from "../utils/Dummydata";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQ = () => {
  const { active, setActive }: any = useGlobalContext();

  return (
    <div className="bg-background flex flex-col px-6 md:px-0 items-center py-24 text-white">
      <div className="text-center font-semibold pt-8 flex flex-col gap-4">
        <span className="text-yellow-400 uppercase text-[18px]">Oft gestelle fragen</span>
        <h1 className="text-[32px]">FAQ</h1>
      </div>
      <div className="faq mt-14 mb-10 flex flex-col gap-2 ">
        {Faq.map((item, i: number) => (
          <div onClick={() => setActive(i)} onDoubleClickCapture={() => setActive(null)} className="max-w-[1000px] p-2 flex flex-col cursor-pointer gap-4 pb-1 border-b border-blue-300/70" key={item.answer}>
            <div className="flex justify-between items-center">
              <h3 className="text-[1rem] md:text-[1.2rem] font-semibold">{item.question}</h3>
              {active === i ? <AiOutlineMinus size={24} /> : <AiOutlinePlus size={24} />}
            </div>
            <div className={`text-slate-300 text-sm  leading-7 transition duration-500 ${active === i ? "opacity-100 max-h-[300px] " : "opacity-0 max-h-0"} overflow-hidden py-2`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
