import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import axios from 'axios';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

const GoogleLoginTwo = () => {
  const navigate = useNavigate()

  const [accessToken, setAccessToken] = useState("");
  const [user, setUser ] = useContext(AuthContext);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setAccessToken(codeResponse.access_token)
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
    () => {
        if (accessToken) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setUser(res.data.email);
                    let path = `/home`; 
                    navigate(path);
                })
                .catch((err) => console.log(err));
        }
    },
    [ accessToken ]
);

  return (
    <div>
      <button onClick={() => login()} >Sign in with Google </button>
    </div>
  )
}

export default GoogleLoginTwo