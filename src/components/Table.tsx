import { ITable } from "../types/Types";

const Table = ({ item }: ITable) => {
  return (
    <div className="flex items-center font-semibold  bg-pink-500 flex-col justify-around w-full">
      <div className=" w-full text-center text-white py-4">
        <h1>{item.title}</h1>
      </div>
      <div className="flex bg-white w-full flex-col gap-2 items-center">
        <div className="bg-white py-3 text-[14px]">
          <p className="text-[12px] md:text-[14px]">{item.price}</p>
        </div>
        <div className="py-3 text-center w-full bg-slate-100">
          <p className="text-[12px] md:text-[14px]">{item.wordPress}</p>
        </div>
        <div className="py-3 text-center w-full bg-white">
          <p className="text-[12px] md:text-[14px]">{item.visit}</p>
        </div>
        <div className="py-3 text-center w-full bg-slate-100">
          <p className="text-[12px] md:text-[14px]">{item.storage}</p>
        </div>
        <div className="py-3 text-center w-full bg-white">
          <p className="text-[12px] md:text-[14px]">{item.cdn}</p>
        </div>
        <div className="py-3 text-center  items-center justify-center flex w-full bg-slate-100">
          <p className="text-[12px] md:text-[14px]">{item.googleCloud}</p>
        </div>
        <div className="py-3 text-center  items-center justify-center flex w-full bg-white">
          <p className="text-[12px] md:text-[14px]">{item.support}</p>
        </div>
        <div className="py-3 text-center  items-center justify-center flex w-full bg-slate-100">
          <p className="text-[12px] md:text-[14px]">{item.backup}</p>
        </div>
        <div className="py-3 text-center  items-center justify-center flex w-full bg-white">
          <p className="text-[12px] md:text-[14px]">{item.ssh}</p>
        </div>
        <div className="py-3 text-center  items-center justify-center flex w-full bg-slate-100">
          <p className="text-[12px] md:text-[14px]">{item.order}</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
