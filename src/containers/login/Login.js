import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { UserSignIn } from "../../services";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import reactLogo from "../../assets/images/react.png";

const Login = () => {
  const [username, setUserName] = useState("kminchelle");
  const [password, setUserPassword] = useState("0lelplR");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    await UserSignIn({ username, password })
      .then((res) => {
        navigate("/admin");
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login-page center">
      <div className="card login-card">
        <div className="flex justify-content-center">
          <div className="center mb-24px">
            <img src={reactLogo} height={100}></img>
          </div>
          <div className="mb-32px">
            <h4 className="center ">Welcome to React Boiler Plate</h4>
          </div>

          <div className="row">
            <div className="mb-3">
              <label className="form-label required">Email</label>
              <InputText
                value={username}
                placeholder="Enter email address"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label required">Password</label>
              <div>
                <InputText
                  type="password"
                  className="w-100"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Button
                label="Login"
                className="btn btn-sm btn-primary w-100"
                loading={loading}
                onClick={login}
              />
            </div>
            <a
              className="center cursor-pointer fw-medium mt-16px"
              onClick={() => {
                window.open(
                  "https://github.com/adityaadhikari15/react-boiler-plate#readme"
                );
              }}
            >
              Read more about React boiler plate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
