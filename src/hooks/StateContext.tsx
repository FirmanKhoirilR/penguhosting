import { useState, createContext, useContext } from "react";

const StateContext = createContext({});
export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toogleSidebar, setToogleSidebar] = useState(false);
  const [active, setActive] = useState(null);
  const [searchDomain, setSearchDomain] = useState("");
  const [modelDomain, setModelDomain] = useState(false);
  const [linkName, setLinkName] = useState("Webhosting");
  const [loadingEmailSubmit, setLoadingEmailSubmit] = useState(false);
  const [formEmail, setFormEmail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formLogin, setFormLogin] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [alert, setAlert] = useState({
    type: "error",
    text: "",
    show: false,
  });
  const [user, setUser] = useState(null);

  const [formCreateBlog, setFormCreateBlog] = useState({
    title: "",
    about: "",
    description: "",
    loading: false,
    date: new Date(),
    imageAsset: null,
  });

  const [wrongImageType, setWrongImageType] = useState(false);

  return (
    <StateContext.Provider
      value={{
        toogleSidebar,
        formCreateBlog,
        setFormCreateBlog,
        wrongImageType,
        setWrongImageType,
        loadingEmailSubmit,
        formLogin,
        setFormLogin,
        user,
        setUser,
        alert,
        setAlert,
        setLoadingEmailSubmit,
        setToogleSidebar,
        modelDomain,
        setModelDomain,
        searchDomain,
        setSearchDomain,
        active,
        formEmail,
        setFormEmail,
        setActive,
        linkName,
        setLinkName,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalContext = (): any => useContext(StateContext);
