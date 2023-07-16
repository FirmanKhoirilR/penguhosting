import { Container } from "@mui/material";
import { SlBasket } from "react-icons/sl";
import { AiFillInfoCircle } from "react-icons/ai";

import { IDataDomain } from "../types/Types";
import { domain } from "../utils/Dummydata";

const OptionDomain = ({ item }: IDataDomain) => {
  const domainOption = item.domain_name.split(".");
  console.log(`${domainOption[0]}`);
  return (
    <Container>
      <div className={`flex items-center justify-between gap-1 mb-6 rounded-xl md:mx-4 ${item.domain_registered === "no" ? "bg-green-400" : "bg-red-500"} py-2 px-4 md:px-6`}>
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-sm">{item.domain_name}</h1>
          <span>{item.domain_registered === "no" ? "is avaiable" : "is already taken"}</span>
        </div>
        {item.domain_registered === "no" ? (
          <>
            <button className="flex items-center rounded-xl text-black px-4 gap-2 bg-white transition duration-300 hover:bg-yellow-400 hover:bg- py-2" type="button" name="buttonPurchase" aria-label="buttonPurchase">
              <SlBasket size={20} />
              Purchase
            </button>
          </>
        ) : (
          <div className="flex items-center gap-2 md:gap-4">
            <button className="flex items-center rounded-xl text-red-500 hover:bg-white/70 transition duration-300  px-2 md:px-4 gap-2 font-semibold bg-white hover:bg- py-2" type="button" name="buttonPurchase" aria-label="buttonPurchase">
              <AiFillInfoCircle size={20} />
              <span className="md:inline-block hidden">Who Taken</span>
            </button>
            <button className="flex items-center rounded-xl text-black hover:bg-yellow-400 transition duration-300 px-2 md:px-4 gap-2 bg-lime-400 py-2" type="button" name="buttonPurchase" aria-label="buttonPurchase">
              <SlBasket size={20} />
              <span className="md:inline-block hidden">Purchase</span>
            </button>
          </div>
        )}
      </div>

      <h1 className="text-center font-bold tracking-wide text-white hover:text-yellow-500">More Options</h1>
      <div className="w-full flex flex-col items-center gap-4 justify-between mt-4">
        {domain.map((iteem) => (
          <div className="flex gap-1 w-full mx-4 text-lg justify-between items-center" key={iteem.name}>
            {item.domain_name === `${domainOption[0]}${iteem.name}` ? null : (
              <>
                <div className="text-sm flex items-center gap-1">
                  <h1 className=" font-semibold">
                    {domainOption[0]}
                    {iteem.name}
                  </h1>
                  <span>is avaiable!</span>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-yellow-400">{iteem.price}</p>
                  <button
                    className="flex items-center rounded-xl text-black px-4 gap-2 hover:bg-white transition duration-300 bg-yellow-400 font-semibold text-sm hover:bg- py-2"
                    type="button"
                    name="buttonPurchase"
                    aria-label="buttonPurchase"
                  >
                    <SlBasket size={20} />
                    Purchase
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OptionDomain;
