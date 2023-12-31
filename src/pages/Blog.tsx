import { feedQuery } from "../hooks/userQuery";
import { client } from "../client";
import { Container } from "@mui/material";
import { CardBlog, Loading } from "../components";
import { IUser, TBlog } from "../types/Types";
import { Link, useNavigate } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";
import { useQuery } from "react-query";
import { useEffect, useRef } from "react";
import { blank } from "../assets";
import { useGlobalContext } from "../hooks/StateContext";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

const Blog = () => {
  const { user }: any = useGlobalContext();
  const navigate = useNavigate();
  // useNavigate hook for navigate to other page
  const { data, isLoading, isFetching, isSuccess } = useQuery("blogQuery", () => client.fetch(feedQuery), {
    refetchOnWindowFocus: false,

    // dont refetch if user in another tab
    staleTime: 3000,
    refetchInterval: 3000,
    // fresh the data in 3 second
  });

  const divRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={divRef} className="bg-white py-10">
      <Container>
        <div className="flex items-center justify-between">
          <h1 className="text-[56px] font-bold mb-10 border-b-8 border-yellow-500 w-[48px]">Blog</h1>
          {user ? (
            <Link to={`/post-blog`} className="flex gap-2 items-center mb-10 shadow-lg bg-blue-500 hover:bg-blue-600 py-2 md:px-3 px-2 rounded-full md:rounded-lg text-white">
              <span className="hidden md:block font-semibold"> Create Blog</span>
              <IoMdCreate size={25} />
            </Link>
          ) : (
            <GoogleLogin
              onSuccess={(res) => {
                const token: any = res.credential;
                const decodedToken = jwtDecode<IUser>(token);

                const { name, email, picture, sub } = decodedToken;
                localStorage.setItem("user", JSON.stringify({ name, email, picture, sub }));

                const doc: any = {
                  _id: sub,
                  _type: "user",
                  userName: name,
                  image: picture,
                  email: email,
                };

                client
                  .createIfNotExists(doc)
                  .then(() => {
                    navigate("/", { replace: true });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            />
          )}
        </div>
        {data?.length > 0 ? (
          isLoading && isFetching ? (
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
          )
        ) : (
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="font-bold text-2xl"> Didn't have Blog</h1>
            <img src={blank} alt="Didn't have blog " width={200} height={250} />
            <Link to={"/post-blog"} className="text-lg py-2 transition duration-300 hover:bg-yellow-500 hover: px-3 bg-blue-500 text-white rounded-lg mt-4 shadow-lg">
              Create Blog
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Blog;
