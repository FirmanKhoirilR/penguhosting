import { useState, createContext, useContext } from "react";

const StateContext = createContext({});
export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toogleSidebar, setToogleSidebar] = useState(false);
  const [active, setActive] = useState(null);
  const [searchDomain, setSearchDomain] = useState("");
  const [modelDomain, setModelDomain] = useState(false);
  const [linkName, setLinkName] = useState("Webhosting");
  return <StateContext.Provider value={{ toogleSidebar, setToogleSidebar, modelDomain, setModelDomain, searchDomain, setSearchDomain, active, setActive, linkName, setLinkName }}>{children}</StateContext.Provider>;
};

export const useGlobalContext = () => useContext(StateContext);
