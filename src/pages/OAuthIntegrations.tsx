
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import TwitterLogin from "react-twitter-login";
import "./OAuthIntegrations.css";

function OAuthIntegrations() {
  const [googleAccessToken, setGoogleAccessToken] = useState(sessionStorage.getItem("googleAccessToken"));
  const [linkedInAccessToken, setLinkedInAccessToken] = useState(sessionStorage.getItem("linkedInAccessToken"));
  const [twitterAccessToken, setTwitterAccessToken] = useState(sessionStorage.getItem("twitterAccessToken"));

  // TEMPORARY
  // const token = {
  //   oauth_token: '128981256-fW6dyxXP81OkuU8WgME2oCyrbqdqc7h31oCmXrkx',
  //   oauth_token_secret: '3GaHa6r85LOtRZztVqGsk8EUeNmGwT1BydpPkXDWvT7Fx',
  //   user_id: '128981256',
  //   screen_name: 'ganeshramanr'

  // }
  // const [twitterAccessToken, setTwitterAccessToken] = useState(token);
  // sessionStorage.setItem("twitterAccessToken", JSON.stringify(token));

  const navigate = useNavigate();

  const loginGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setGoogleAccessToken(codeResponse.access_token)
      sessionStorage.setItem("googleAccessToken", codeResponse.access_token);
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  const loginTwitter = (err: any, data: any) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Authenticated:', data);
      // Handle the authenticated user data
      setTwitterAccessToken(data);
      sessionStorage.setItem("twitterAccessToken", data);
    }
  };

  const { linkedInLogin } = useLinkedIn({
    clientId: '77g3pnwy4s0hy2',
    redirectUri: `${window.location.origin}/integrations`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      // alert(JSON.stringify(error));
      console.log(error);
    },
  });

  const navigateTo = (app: String) => {
    navigate("/" + app);
  }
  
  return (
        <div className="content2">
          {twitterAccessToken ?
            <button onClick={() => navigateTo('twitter')}>Visit Twitter</button> :
            <TwitterLogin
                authCallback={loginTwitter}
                consumerKey="xRKgaQ9dg9BOvmBIjErwyT4G8"
                consumerSecret="APCYDI5lCY2It53BTh55XTGad0oG6gITrOUjfQ7czrA2gXS1lq"
                buttonTheme="light" 
              />
          }
          <br></br>
          {googleAccessToken ?
            <button onClick={() => navigateTo('google')}>Visit Google</button> :
            <button onClick={() => loginGoogle()}>Connect Google</button>
          }
          <br></br>
          {linkedInAccessToken ?
            <button onClick={() => navigateTo('linkedin')}>Visit LinkedIn</button> :
            // <img
            //   onClick={linkedInLogin}
            //   src={linkedin}
            //   alt="Sign in with Linked In"
            //   style={{ maxWidth: '180px', cursor: 'pointer' }}
            // />
            <button onClick={() => linkedInLogin()}>Connect LinkedIn</button>
          }
          <br></br>
          <button>Connect Tiktok</button>
        </div>
  )
}

export default OAuthIntegrations
