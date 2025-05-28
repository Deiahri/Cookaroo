import React, { useState } from "react";
import ReactIcon from '../../assets/react.svg';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { useColorTheme } from "../../hooks/useColorTheme";
import { sleep } from "../../utils/tools";
import { useNavigate } from "react-router-dom";

const logoUrl = ReactIcon;

const Login: React.FC = () => {
  const { setLoading } = useColorTheme();
  const navigate = useNavigate();
  const [loginDisabled, setLoginDisabled] = useState(false);

  const onLoginButtonPress = async () => {
    setLoginDisabled(true);
    await sleep(200);
    setLoading(true);
    await sleep(1000);
    setLoading(false);
    setLoginDisabled(false);
    sleep(300);
    navigate('/onboarding');
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#fafafa",
      }}
    >
      <img
        src={logoUrl}
        alt="Logo"
        style={{
          width: "50vw",
          height: "50vw",
          objectFit: "contain",
          display: "block",
        }}
      />
      <div style={{ height: "2rem" }} />
      <div style={{ width: "70%", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <div style={{opacity: loginDisabled ? 0.5 : 1, width: '100%'}}>
          <GoogleLoginButton onClick={onLoginButtonPress}/>
        </div>
        <div style={{opacity: loginDisabled ? 0.5 : 1, width: '100%'}}>
          <FacebookLoginButton onClick={onLoginButtonPress}/>
        </div>
      </div>
    </div>
  );
};

export default Login;