import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { UserSignIn } from "../../services";
import "./login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("kminchelle");
  const [password, setUserPassword] = useState("0lelplR");
  const navigate = useNavigate();

  const login = async () => {
    await UserSignIn({ username, password })
      .then((res) => {
        navigate("/admin");
      })
      .catch(() => {});
  };

  return (
    <div className="login-page center">
      <div className="card login-card">
        <div className="flex justify-content-center">
          <div className="center mb-24px">
            <img src="https://dev.bidbetty.com/assets/media/logos/logo-bidbetty.png "></img>
          </div>
          <h4 className="center mb-32px">Sign In to BidBetty</h4>
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
              <button className="btn btn-sm btn-primary w-100" onClick={login}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
