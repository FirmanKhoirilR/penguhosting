import { Container } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../client";
import { blogDetail } from "../hooks/userQuery";
import { TBlog } from "../types/Types";
import { Error, Loading } from "../components";
import { FcCalendar } from "react-icons/fc";
import moment from "moment";

const DetailBlog = () => {
  const { id } = useParams();

  const detailBlog = blogDetail(id);

  const { data, isSuccess, isLoading, isError, isFetching } = useQuery(["detailBlog", id], () => client.fetch(detailBlog), {
    refetchOnWindowFocus: false,
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (1000 * 60),
  });

  return (
    <div className="bg-white">
      <Container sx={{ display: "flex", flexDirection: "column", gap: 2, py: 4 }}>
        {isLoading && isFetching ? (
          <Loading />
        ) : isError ? (
          <Error />
        ) : (
          isSuccess && (
            <>
              {data?.map((item: TBlog) => (
                <div className="flex flex-col gap-4" key={item._id}>
                  <img src={urlFor(item?.image?.asset?.url).width(900).url()} alt={item?.postedBy.userName} className="h-[450px] w-full rounded-lg" loading="lazy" />
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <img src={item?.postedBy.image} alt={item?.postedBy?.userName} loading="lazy" className="w-8 h-8 rounded-full" />
                      <h1 className="capitalize text-[18px] md:text-base font-semibold ">{item?.postedBy?.userName || "Klimentz"}</h1>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FcCalendar size={20} />
                      <p className="text-sm font-semibold text-black/70">{moment(item?.createdAt).format("LL")}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 mt-4">
                    <h1 className="text-xl font-semibold">{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </>
          )
        )}
      </Container>
    </div>
  );
};

export default DetailBlog;
