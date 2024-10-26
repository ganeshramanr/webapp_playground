
import { useState } from "react"
import Header from "../layouts/Header"
import { useGoogleLogin } from '@react-oauth/google';
import { Outlet, useNavigate } from "react-router-dom";

function MainPage2() {
  const [googleAccessToken, setGoogleAccessToken] = useState("");

  const navigate = useNavigate()

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setGoogleAccessToken(codeResponse.access_token)
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  const navigateTo = (app: String) => {
    navigate("/" + app);
  }
  
  return (
    <div className="layout">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default MainPage2
