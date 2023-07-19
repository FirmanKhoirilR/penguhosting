import moment from "moment";
import { IBlog } from "../types/Types";
import { FcCalendar } from "react-icons/fc";
import { urlFor } from "../client";
import { AiOutlineDownload } from "react-icons/ai";

const CardBlog = ({ item }: IBlog) => {
  return (
    <div className="w-full group relative flex flex-col p-2 mx-2 min-w-[350px] max-w-[700px]">
      <img src={urlFor(item?.image?.asset?.url).width(700).url()} loading="lazy" alt={item?.postedBy?.userName} className="min-w-[350px] max-w-[700px] rounded-lg h-[400px]" />
      <a download href={`${item?.image?.asset?.url}?dl=`} onClick={(e) => e.stopPropagation()} className="absolute p-2 bg-white transition duration-300 rounded-full opacity-0 group-hover:opacity-100 m-2 z-10">
        <AiOutlineDownload size={25} />
      </a>
      <div className="flex py-2 items-center gap-2 md:gap-6 justify-between">
        <div className="py-2 flex items-center gap-2">
          <img src={item?.postedBy?.image} alt={item?.postedBy?.userName} loading="lazy" className="w-8 h-8 rounded-full" />
          <h1 className="capitalize text-[12px] md:text-base font-semibold ">{item?.postedBy?.userName}</h1>
        </div>
        <div className="my-2 flex items-center gap-2">
          <FcCalendar size={20} />
          <p className="text-sm font-semibold text-black/70">{moment(item?.createdAt).format("LLL")}</p>
        </div>
      </div>
      <div className="font-semibold flex flex-col gap-3">
        <h1 className="text-xl">{item?.title}</h1>
        <p className="text-black/70 text-sm">{item?.description}</p>
      </div>
    </div>
  );
};

export default CardBlog;
