import { IFitureHosting } from "../types/Types";

const FitureHosting = ({ item }: IFitureHosting) => {
  return (
    <div className="w-[300px] flex-col gap-3 h-[260px] rounded-lg flex items-center md:text-start text-center md:items-start py-4 px-6 justify-start bg-slate-100 shadow-[0px_2px_4px_1px] shadow-black/10">
      <span data-aos="zoom-in-up" className="p-4 bg-blue-300 rounded-full text-white">
        {item.icon}
      </span>
      <h1 className="font-semibold tracking-wide text-black/90">{item.title}</h1>
      <p className="text-sm text-slate-600">{item.desc}</p>
    </div>
  );
};

export default FitureHosting;
