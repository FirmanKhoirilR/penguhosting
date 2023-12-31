import { Error, Loading, OptionDomain } from ".";
import { checkDomain } from "../api/DomainChecker";
import { useGlobalContext } from "../hooks/StateContext";
import { domain } from "../utils/Dummydata";
import { useQuery } from "react-query";

const SearchDomain = () => {
  const { searchDomain, setSearchDomain }: any = useGlobalContext();

  const { data, refetch, isLoading, isFetching, isSuccess, isError } = useQuery(["domainChecker", searchDomain], () => checkDomain(searchDomain), {
    refetchOnWindowFocus: false,
    // dont want to refresh for user in different tab
    staleTime: 60 * (60 * 1000),

    enabled: false,
    // trigger for refecth
    refetchInterval: 60 * (60 * 1000),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  return (
    <form onSubmit={handleSubmit} className="flex bg-background px-2 justify-center py-20 text-white flex-col">
      <div className="leading-8 md:leading-10 text-center">
        <span className="text-yellow-500 text-[18px] md:text-[26px] font-bold">DOMAIN KAUFEN</span>
        <h1 className="text-[24px] tracking-wide font-bold">Jede gute Website braucht eine Domain.</h1>
        <p className="text-white/70 text-[14px]"> Deine Domain hilft Menschen dabei, dich online zu finden und hinterlässt einen ersten Eindruck. Finde eine, die dich perfekt repräsentiert.</p>
      </div>
      <div className="w-full flex mt-10 justify-center items-center ">
        <input
          type="text"
          value={searchDomain}
          onChange={(e) => setSearchDomain(e.target.value)}
          placeholder="beispiel.com"
          className=" placeholder:text-sm placeholder:text-black/70 text-black w-[300px] md:min-w-[600px] py-3 md:py-4 outline-none px-4 rounded-l-full"
        />
        <button
          type="submit"
          disabled={searchDomain !== "" ? false : true}
          name="buttonSearch"
          aria-label="buttonSearch"
          className="py-[14px] font-semibold px-2 md:px-4 bg-gradient-to-r md:text-lg text-sm from-sky-300 hover:opacity-90 transition duration-200  rounded-r-full disabled:opacity-70 to-blue-500"
        >
          Suchen
        </button>
      </div>
      <div className="flex gap-5 md:gap-[44px] items-center justify-center mt-4">
        {domain.map((item) => (
          <p key={item.name} className="text-yellow-400 flex tracking-wide flex-col items-center font-semibold">
            {item.name}
            <span className="text-white">{item.price}</span>
          </p>
        ))}
      </div>
      <div className="flex gap-[44px] items-center justify-center mt-8  ">{isFetching && isLoading ? <Loading /> : isError ? <Error /> : isSuccess && <OptionDomain item={data} />}</div>
    </form>
  );
};

export default SearchDomain;
