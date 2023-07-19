import { Container } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types/Types";
import { client } from "../client";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <Container>
        <form className="w-full flex flex-col justify-center items-center">
          Test
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
        </form>
      </Container>
    </div>
  );
};

export default Login;
