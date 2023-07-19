import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/StateContext";
import { navbarLink } from "../utils/Dummydata";
import { TLink } from "../types/Types";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useEffect } from "react";
import { userQuery } from "../hooks/userQuery";
import { client } from "../client";
const Sidebar = () => {
  const { toogleSidebar, setUser, user, setToogleSidebar, setLinkName, linkName }: any = useGlobalContext();

  const users: any = localStorage.getItem("user");
  const parseUser = JSON.parse(users);

  useEffect(() => {
    const query = userQuery(parseUser?.sub);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  return (
    <div
      className={`fixed ${
        toogleSidebar ? "translate-y-[0%]" : "translate-y-[-120%]"
      } transition duration-700 top-[76px] z-10 flex md:hidden flex-col items-center justify-around min-h-[50vh] w-full bg-white  font-semibold text-black/60 tracking-[0.001em]`}
    >
      {navbarLink.map((link: TLink) => (
        <Link
          key={link.url}
          to={`/${link.url}`}
          onClick={() => {
            setLinkName(link.name);
            setToogleSidebar((prev: boolean) => !prev);
          }}
          className={`text-[14px] lg:text-[16px] hover:text-blue-400 transition duration-200 hover:border-blue-500 border-b border-transparent ${link.name === linkName ? "border-blue-500 text-blue-400" : ""}`}
        >
          {link.name}
        </Link>
      ))}
      {users || user ? (
        <Link to="/">
          <img loading="lazy" src={user?.image || parseUser?.picture} alt={user?.userName || parseUser?.name} height={40} width={40} className="rounded-full" />
        </Link>
      ) : (
        <Link
          to={"/login"}
          onClick={() => {
            setLinkName("login");
            setToogleSidebar((prev: boolean) => !prev);
          }}
          className={` px-5 lg:px-8 hover:bg-blue-600 font-normal tracking-tight transition duration-200 shadow-lg ml-2 lg:ml-5 py-2 text-white flex md:hidden gap-1 items-center rounded-lg bg-blue-400 `}
        >
          <AiOutlineUserAdd size={20} />
          Login
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
