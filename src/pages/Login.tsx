import { Container } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types/Types";
import { client } from "../client";
import { useGlobalContext } from "../hooks/StateContext";
import { FaUserCircle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { isSignup, setIsSignup, formLogin, setFormLogin, setWrongImageLogin }: any = useGlobalContext();

  const uploadImage = (e: React.InputHTMLAttributes<HTMLImageElement> | any) => {
    const { type, name } = e.target.files[0];

    if (type === "image/png" || type === "image/jpeg" || type === "image/jpg" || type === "svg") {
      setWrongImageLogin(false);
      client.assets
        .upload("image", e.target.files[0], {
          contentType: type,
          filename: name,
        })
        .then((document) => {
          setFormLogin({ ...formLogin, imageAsset: document });
        })
        .catch((err) => console.log("Console", err));
    } else {
      setWrongImageLogin(true);
    }
  };

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify({ name: formLogin.userName, email: formLogin.email, picture: formLogin.imageAsset?.url }));
  };

  return (
    <form onSubmit={handleSubmitLogin} className="w-full flex bg-white flex-col justify-center items-center">
      <Container sx={{ py: 5 }}>
        <div className="flex flex-col justify-center items-center gap-3">
          {isSignup ? (
            <>
              <div className="w-40 rounded-full overflow-hidden mx-auto relative bg-slate-100 h-40">
                {formLogin.imageAsset ? (
                  <>
                    <img src={formLogin.imageAsset?.url} loading="lazy" alt="background" className="w-full  rounded-lg" />
                  </>
                ) : (
                  <>
                    <input type="file" onChange={uploadImage} required className="h-full absolute z-10 pt-40 w-full" name="upload-image" />
                    <button aria-label="people" name="profile" type="button" className=" p-2  z-0 inset-[54px] absolute">
                      <FaUserCircle size={40} className="text-sky-500" />
                    </button>
                  </>
                )}
              </div>
              <div className="flex font-semibold flex-col gap-3 w-full max-w-[450px]">
                <label className="text-sm text-black/70">Your UserName</label>
                <input
                  required
                  type="text"
                  value={formLogin.userName}
                  onChange={(e) => setFormLogin({ ...formLogin, userName: e.target.value })}
                  placeholder="Username"
                  className="font-normal py-2 px-4 outline-none bg-slate-100 rounded-lg"
                />
              </div>
              <div className="flex font-semibold flex-col gap-3 w-full max-w-[450px]">
                <label className="text-sm text-black/70">Your Email</label>
                <input required type="email" value={formLogin.email} onChange={(e) => setFormLogin({ ...formLogin, email: e.target.value })} placeholder="Email" className="font-normal py-2 px-4 outline-none bg-slate-100 rounded-lg" />
              </div>
              <div className="flex font-semibold flex-col gap-3 w-full max-w-[450px]">
                <label className="text-sm text-black/70">Your Password</label>
                <input
                  required
                  type="password"
                  value={formLogin.password}
                  onChange={(e) => setFormLogin({ ...formLogin, password: e.target.value })}
                  placeholder="Password"
                  className="font-normal py-2 px-4 outline-none bg-slate-100 rounded-lg"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex font-semibold flex-col gap-3 w-full max-w-[450px]">
                <div className="w-40 rounded-full overflow-hidden mx-auto relative bg-slate-100 h-40">
                  {formLogin.imageAsset ? (
                    <>
                      <img src={formLogin.imageAsset?.url} loading="lazy" alt="background" className="w-full  rounded-lg" />
                    </>
                  ) : (
                    <>
                      <input type="file" onChange={uploadImage} required className="h-full absolute z-10 pt-40 w-full" name="upload-image" />
                      <button aria-label="people" name="profile" type="button" className=" p-2  z-0 inset-[54px] absolute">
                        <FaUserCircle size={40} className="text-sky-500" />
                      </button>
                    </>
                  )}
                  <button aria-label="people" name="profile" type="button" className=" p-2  z-0 inset-[54px] absolute">
                    <FaUserCircle size={40} className="text-sky-500" />
                  </button>
                </div>
                <label className="text-sm text-black/70">Your UserName</label>
                <input
                  required
                  type="text"
                  value={formLogin.userName}
                  onChange={(e) => setFormLogin({ ...formLogin, userName: e.target.value })}
                  placeholder="Username"
                  className="font-normal py-2 px-4 outline-none bg-slate-100 rounded-lg"
                />
              </div>
              <div className="flex font-semibold flex-col gap-3 w-full max-w-[450px]">
                <label className="text-sm text-black/70">Your Email</label>
                <input required type="email" value={formLogin.email} onChange={(e) => setFormLogin({ ...formLogin, email: e.target.value })} placeholder="Email" className="font-normal py-2 px-4 outline-none bg-slate-100 rounded-lg" />
              </div>
              <div className="flex font-semibold flex-col gap-3 w-full max-w-[450px]">
                <label className="text-sm text-black/70">Your Phone</label>
                <input
                  required
                  type="tel"
                  pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                  value={formLogin.phone}
                  onChange={(e) => setFormLogin({ ...formLogin, phone: e.target.value })}
                  placeholder="+(88) 888 8888"
                  className="font-normal py-2 px-4 outline-none bg-slate-100 rounded-lg"
                />
              </div>
              <div className="flex font-semibold flex-col gap-3 w-full max-w-[450px]">
                <label className="text-sm text-black/70">Your Password</label>
                <input
                  required
                  type="password"
                  value={formLogin.password}
                  onChange={(e) => setFormLogin({ ...formLogin, password: e.target.value })}
                  placeholder="Password"
                  className="font-normal py-2 px-4 outline-none bg-slate-100 rounded-lg"
                />
              </div>

              <div className="flex font-semibold flex-col gap-3 w-full max-w-[450px]">
                <label className="text-sm text-black/70">Confirm Password</label>
                <input
                  required
                  type="password"
                  value={formLogin.confirmPassword}
                  onChange={(e) => setFormLogin({ ...formLogin, confirmPassword: e.target.value })}
                  placeholder="Confirm Password"
                  className="font-normal py-2 px-4 outline-none bg-slate-100 rounded-lg"
                />
              </div>
            </>
          )}
          <button type="button" onClick={() => setIsSignup((prev: boolean) => !prev)} name="buttonSignup" aria-label="buttonSighup" className="my-2 text-black/60 border-b hover:text-black/80 hover:border-black/80 border-black/60">
            {isSignup ? "Don't have an account?" : "Already have an account?"}
          </button>
          <button type="submit" name="buttonSubmit" aria-label="buttonSubmit" className="my-2 w-[260px] rounded-xl hover:bg-yellow-500 transition duration-300 shadow-lg text-white font-semibold py-2 bg-sky-500 px-4 ">
            Submit
          </button>
          <div>
            <GoogleLogin
              onSuccess={(res) => {
                const token: any = res.credential;
                const decodedToken = jwtDecode<IUser>(token);

                const { name, email, picture, sub } = decodedToken;
                localStorage.setItem("user", JSON.stringify({ name, email, picture, sub }));

                const doc: any = {
                  _id: sub,
                  _type: "user",
                  userName: name,
                  image: picture,
                  email: email,
                };

                client
                  .createIfNotExists(doc)
                  .then(() => {
                    navigate("/", { replace: true });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            />
          </div>
        </div>
      </Container>
    </form>
  );
};

export default Login;
