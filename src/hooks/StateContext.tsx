import { useState, createContext, useContext } from "react";

const StateContext = createContext({});
export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toogleSidebar, setToogleSidebar] = useState(false);
  // for toogle sidebar
  const [active, setActive] = useState(null);
  //
  const [searchDomain, setSearchDomain] = useState("");

  // for search a Domain
  const [modelDomain, setModelDomain] = useState(false);
  // for popup modalDomain
  const [linkName, setLinkName] = useState("");
  // for active link navbar
  const [loadingEmailSubmit, setLoadingEmailSubmit] = useState(false);
  // loading after email submit
  const [isSignup, setIsSignup] = useState(false);
  // condition if user is signin or signup
  const [user, setUser] = useState(null);
  // data user
  const [wrongImageLogin, setWrongImageLogin] = useState(false);
  // if the type of image login is wrong
  const [wrongImageType, setWrongImageType] = useState(false);
  // if the type of image blog type is wrong
  const [formEmail, setFormEmail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // this is for colleting the data after user input email in contact page
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
  // this is for colleting the data after user input email in login page
  const [alert, setAlert] = useState({
    type: "error",
    text: "",
    show: false,
  });
  // showing alert after submitting all form Email
  const [formCreateBlog, setFormCreateBlog] = useState({
    title: "",
    about: "",
    description: "",
    loading: false,
    date: new Date(),
    imageAsset: null,
  });

  //  get the data input and creating a blog after submitting

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
