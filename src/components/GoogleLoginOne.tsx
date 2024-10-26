import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import { GoogleLogin } from '@react-oauth/google'

const GoogleLoginOne = () => {
  const navigate = useNavigate()

  const [user, setUser ] = useContext(AuthContext);

  const handleGoogleLoginSuccess = (response: any) => {
    console.log(response);
    if (setUser) {
      setUser('googleuser');
    }
    let path = `/home`; 
    navigate(path);
  }

  const handleGoogleLoginFailure = () => {
    alert('Login Failed');
  }

  return (
    <div>
      <div className={'inputContainer'}>
          <GoogleLogin 
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
            />
        </div>
    </div>
  )
}

export default GoogleLoginOne