import { feedQuery } from "../hooks/userQuery";
import { client } from "../client";
import { Container } from "@mui/material";
import { CardBlog, Loading } from "../components";
import { TBlog } from "../types/Types";
import { Link } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";
import { useQuery } from "react-query";

const Blog = () => {
  const { data, isLoading, isFetching, isSuccess } = useQuery("blogQuery", () => client.fetch(feedQuery), {
    refetchOnWindowFocus: false,
    staleTime: 3000,
    refetchInterval: 3000,
  });

  return (
    <div className="bg-white py-10">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-[56px] font-bold mb-10 border-b-8 border-yellow-500 w-[48px]">Blog</h1>
          <Link to={`/post-blog`} className="flex gap-2 items-center mb-10 bg-blue-500 hover:bg-blue-600 py-2 md:px-3 px-2 rounded-full md:rounded-lg text-white">
            <span className="hidden md:block font-semibold"> Create Blog</span>
            <IoMdCreate size={25} />
          </Link>
        </div>
        {isLoading && isFetching ? (
          <div className="flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          isSuccess &&
          data && (
            <div className="flex flex-col gap-4">
              {data?.map((item: TBlog) => (
                <CardBlog key={item?._id} item={item} />
              ))}
            </div>
          )
        )}
      </Container>
    </div>
  );
};

export default Blog;
