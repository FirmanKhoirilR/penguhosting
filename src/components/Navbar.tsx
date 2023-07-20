import { Link, useLocation } from "react-router-dom";
import { navbarLink } from "../utils/Dummydata";
import Pengu from "../assets/logo.webp";
import { AiOutlineMenu, AiOutlineUserAdd, AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../hooks/StateContext";
import { TLink } from "../types/Types";
import { client } from "../client";
import { userQuery } from "../hooks/userQuery";
import { useEffect } from "react";

const Navbar = () => {
  const { linkName, user, setUser, setLinkName, toogleSidebar, setToogleSidebar }: any = useGlobalContext();
  const users: any = localStorage.getItem("user");
  const parseUser = JSON.parse(users);
  const location = useLocation();
  useEffect(() => {
    const query = userQuery(parseUser?.sub);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [location]);

  return (
    <nav className="p-3 flex items-center shadow-md sticky top-0 z-20 justify-between md:justify-around bg-white">
      <Link to={"/"} className="flex items-center" onClick={() => setLinkName("home")}>
        <img src={Pengu} alt="Shark" className="w-52 h-[60px]" />
      </Link>
      <div className="hidden md:flex items-center gap-6 lg:gap-10 font-semibold text-black/60 tracking-[0.001em]">
        {navbarLink.map((link: TLink) => (
          <Link
            key={link.url}
            to={`/${link.url}`}
            onClick={() => setLinkName(link.name)}
            className={`text-[14px] lg:text-[16px] hover:text-blue-400 transition duration-200 hover:border-blue-500 border-b border-transparent ${link.name === linkName ? "border-blue-500 text-blue-400" : ""}`}
          >
            {link.name}
          </Link>
        ))}
        {users || parseUser ? (
          <Link to={`/`}>
            <img loading="lazy" src={user?.image || parseUser?.picture} alt={user?.userName || parseUser?.name} height={40} width={40} className="rounded-full" />
          </Link>
        ) : (
          <Link
            to={"/login"}
            onClick={() => setLinkName("login")}
            className={` px-5 lg:px-8 hover:bg-blue-600 font-normal tracking-tight transition duration-200 shadow-lg ml-2 lg:ml-5 py-2 text-white hidden md:flex gap-1 items-center rounded-lg bg-blue-400 `}
          >
            <AiOutlineUserAdd size={20} />
            Login
          </Link>
        )}
      </div>
      <button type="button" onClick={() => setToogleSidebar((prev: boolean) => !prev)} className="p-2 md:hidden inline-block" aria-label="buttonMenu" name="buttonMenu">
        {toogleSidebar ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </button>
    </nav>
  );
};

export default Navbar;
