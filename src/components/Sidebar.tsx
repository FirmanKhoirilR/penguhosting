import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/StateContext";
import { navbarLink } from "../utils/Dummydata";
import { TLink } from "../types/Types";
import { AiOutlineUserAdd } from "react-icons/ai";

const Sidebar = () => {
  const { toogleSidebar, setToogleSidebar, setLinkName, linkName }: any = useGlobalContext();

  return (
    <div
      className={`fixed ${
        toogleSidebar ? "translate-y-[0%]" : "translate-y-[-100%]"
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
      <Link to={"/login"} onClick={() => setLinkName("login")} className={` px-10  hover:bg-blue-600 font-normal tracking-tight transition duration-200 shadow-lg  py-4 text-white flex gap-1 items-center rounded-lg bg-blue-400 `}>
        <AiOutlineUserAdd size={20} />
        Login
      </Link>
    </div>
  );
};

export default Sidebar;
