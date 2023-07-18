import { IFitureHosting } from "../types/Types";
import { motion } from "framer-motion";

const FitureHosting = ({ item, i }: IFitureHosting) => {
  return (
    <div className="w-[300px] flex-col gap-3 h-[260px] rounded-lg flex items-center md:text-start text-center md:items-start py-4 px-6 justify-start bg-slate-100 shadow-[0px_2px_4px_1px] shadow-black/10">
      <motion.span whileInView={{ scale: [0, 1] }} transition={{ duration: 0.6, delay: i * 0.4 }} className="p-4 bg-blue-300 rounded-full text-white">
        {item.icon}
      </motion.span>
      <h1 className="font-semibold tracking-wide text-black/90">{item.title}</h1>
      <p className="text-sm text-slate-600">{item.desc}</p>
    </div>
  );
};

export default FitureHosting;
