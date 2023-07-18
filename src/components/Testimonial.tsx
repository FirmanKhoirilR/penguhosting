import { AiFillStar } from "react-icons/ai";
import { testimonial } from "../utils/Dummydata";
import { TTestimonial } from "../types/Types";

const Testimonial = () => {
  return (
    <div className="w-full bg-black/40 text-white px-2 md:px-4 min-h-[50vh] pb-14 pt-28">
      <div className="text-center font-semibold pt-8 flex flex-col gap-4">
        <span className="text-yellow-200 uppercase text-[18px]"> Kundenbewertungen </span>
        <h1 className="text-[32px]">Was unser Kunden sagen</h1>
      </div>

      <div className=" flex  mt-10 relative overflow-x-auto scrollbar scrollbar-none scr w-full text-black gap-4 p-4">
        {testimonial.map((item: TTestimonial, i: number) => (
          <div key={i} className="p-4 rounded-sm flex select-none flex-col justify-between bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-6 lg:mb-0 min-w-[400px] min-h-[300px]">
            <div>
              <h5 className="mb-2 font-bold uppercase tracking-tight">{item.title}</h5>
              <ul className="mb-6 flex justify-start text-sky-500">
                <AiFillStar size={17} />
                <AiFillStar size={17} />
                <AiFillStar size={17} />
                <AiFillStar size={17} />
                <AiFillStar size={17} />
              </ul>
            </div>
            <p className="text-sm text-black mb-4">{item.description}</p>
            <p className=" text-sky-600 capitalize  font-bold text-[16px] ">- {item.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
