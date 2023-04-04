import { Fragment, useState } from "react";
import "../styles/pages/signIn.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/apiCall";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
const SignIn = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleLogin = () => {
    login(dispatch, { username: user.username, password: user.password });
  };
  return (
    <Fragment>
      <Header />
      <div
        className="signIn"
        style={{
          backgroundImage: `url(https://lolstatic-a.akamaihd.net/rso-login-page/3.2.12/assets/lol_desktop_background_2x.jpg)`,
        }}
      >
        <div className="signIn__logo">
          <img src="/Logo/logo1.svg" alt="" />
        </div>
        <div className="sigIn__form">
          <form action="">
            <h1>LOGIN</h1>
            <div className="signIn__form__input">
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUser({
                    ...user,
                    ["username"]: e.target.value,
                  });
                }}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setUser({
                    ...user,
                    ["password"]: e.target.value,
                  });
                }}
              />
            </div>
          </form>
          <div className="signIn__login" onClick={() => handleLogin()}>
            Login
          </div>
          <div className="signIn__text">
            <Link to="/">Back to Homepage</Link>
            <a href="#">Create an account</a>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default SignIn;
