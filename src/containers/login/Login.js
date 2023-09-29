import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { SetToken, ToastrService, UserSignIn } from "../../services";
import "./login.scss";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setUserPassword] = useState("");
  // ToastrService.error("Guest name is required", "Error");

  login = async () => {
    await UserSignIn({ username, password })
      .then((res) => {
        console.log(res);
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
