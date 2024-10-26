import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

import './LoginPage.css'
import LocalLogin from '../components/LocalLogin'
import GoogleLoginOne from '../components/GoogleLoginOne'
import GoogleLoginTwo from '../components/GoogleLoginTwo'

const LoginPage = () => {

  const navigate = useNavigate()

  const [user, setUser ] = useContext(AuthContext);

  
  useEffect(() => {
    if(user) {
      navigate('/home');
    }
  }, [user]);


  return (
    <div className="mainContainer">
      <div className={'loginContainer'}>
        <div className={'titleContainer'}>
          <div>Finnhub</div>
        </div>
        <LocalLogin />
        <br/>
        <GoogleLoginOne />
        <br/>
        <GoogleLoginTwo />
        <br/>
      </div>
    </div>
  )
}

export default LoginPage