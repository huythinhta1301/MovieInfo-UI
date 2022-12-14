import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { SelectOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";
import { Typography } from "antd";
import "./static/Login.css";
import "./Login";
import "./Signup";
import lotte_logo from "./static/lottecine_logo.png";
import minion from "./static/minions-png-42200.png";
import Signup1 from "./Signup";
import Login from "./Login";

export const AuthContext = React.createContext();
const { Link } = Typography;

const IndexAuth = () => {
  const [isPanelRightActive, setIsPanelRightActive] = useState(false);

  const handleClickSignIn = () => {
    setIsPanelRightActive(false);
  };

  const handleClickSignUp = () => {
    setIsPanelRightActive(true);
  };

  const switchMode = () => {
    setIsPanelRightActive(!isPanelRightActive);
  };

  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

  const store = {
    setIsPanelRightActive,
    isPanelRightActive,
  };

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  //       scope: "email",
  //     });
  //   }

  //   gapi.load("client:auth2", start);
  // }, []);
  return (
    <AuthContext.Provider value={store}>
      <div className="auth-page">
        <Helmet>
          <title>Authentication</title>
          <meta name="description" content="React App authentication" />
        </Helmet>

        {isTabletOrDesktop ? (
          <div className="auth-page-wrapper">
            <div
              className={`auth-container ${
                isPanelRightActive ? "right-panel-active" : ""
              }`}
            >
              <div className="form-container sign-up-container">
                <Signup1 />
              </div>
              <div className="form-container sign-in-container">
                <Login />
              </div>

              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left bg-gradient">
                    <img src={lotte_logo} style={{ maxWidth: "100px" }} />
                    <h1>Lotte Cinema</h1>
                    <p>
                      If you already have an account with us let's sign in to
                      see something awesome!
                    </p>
                    <Button
                      shape="round"
                      onClick={handleClickSignIn}
                      icon={<SelectOutlined />}
                      size="large"
                    >
                      Use your exist account
                    </Button>
                  </div>
                  <div className="overlay-panel overlay-right bg-gradient">
                    <img src={lotte_logo} style={{ maxWidth: "100px" }} />
                    <h1>Lotte Cinema</h1>
                    <p>
                      If you don't have an account, let's enter your personal
                      details and start journey with us
                    </p>
                    <Button
                      shape="round"
                      onClick={handleClickSignUp}
                      icon={<SelectOutlined />}
                      size="large"
                    >
                      Create new account
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mobile-auth-warpper">
            {!isPanelRightActive ? (
              <>
                <Login />
                <div className="text-center" onClick={switchMode}>
                  Don't have an account? <Link>Sign up now.</Link>
                </div>
              </>
            ) : (
              <>
                <Signup1 />
                <div className="text-center" onClick={switchMode}>
                  Already have an account? <Link>Sign in now.</Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </AuthContext.Provider>
  );
};

export default IndexAuth;
