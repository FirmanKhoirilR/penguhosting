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
  const [isSignup, setIsSignup] = useState(false);

  const [formLogin, setFormLogin] = useState({
    userName: "",
    image: "",
    _id: "",
    email: "",
    phone: "",
    imageAsset: null,
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

  const [wrongImageLogin, setWrongImageLogin] = useState(false);
  const [wrongImageType, setWrongImageType] = useState(false);

  return (
    <StateContext.Provider
      value={{
        toogleSidebar,
        wrongImageLogin,
        setWrongImageLogin,
        isSignup,
        setIsSignup,
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
