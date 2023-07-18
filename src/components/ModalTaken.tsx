import { useGlobalContext } from "../hooks/StateContext";
import { AiOutlineClose } from "react-icons/ai";
import { IDataDomain } from "../types/Types";
import moment from "moment";

const ModalTaken = ({ item }: IDataDomain) => {
  const { modelDomain, setModelDomain }: any = useGlobalContext();

  return (
    <div className={`fixed ${modelDomain ? "scale-100" : "scale-0"} transition duration-150 top-0 bottom-0 w-full px-2 flex-col justify-center items-center flex bg-black/40 z-10 gap-2`}>
      <button aria-label="buttonCloseModel" name="buttonCloseModel" onClick={() => setModelDomain((prev: boolean) => !prev)} type="button" className="bg-red-500 p-2 rounded-full">
        <AiOutlineClose size={25} />
      </button>
      <div className=" max-w-[700px] overflow-y-auto px-4 py-2 min-w-[300px] bg-white text-black flex flex-col items-start justify-around min-h-[50vh] rounded-lg gap-2">
        <h1>Domain: {item.domain_name}</h1>
        <p>Create: {moment(item.create_date).format("LL")}</p>
        <p>Email: {item.domain_registrar.email_address}</p>
        <p>Server: {item.domain_registrar.whois_server}</p>
        <p>Phone: {item.domain_registrar.phone_number}</p>
        <a href={item.domain_registrar.website_url} target="_blank">
          Website: {item.domain_registrar.website_url}
        </a>
        <p>Expired: {item.expiry_date}</p>
        <p>Updated: {moment(item.update_date).fromNow()}</p>
      </div>
    </div>
  );
};

export default ModalTaken;
