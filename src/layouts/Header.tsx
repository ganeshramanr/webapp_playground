import { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../AuthProvider"
import { googleLogout } from '@react-oauth/google';

const Header = () => {
  const [user, setUser ] = useContext(AuthContext);
  const navigate = useNavigate()

  const logOut = () => {
    googleLogout();
    setUser(null);
    navigate("/");
} ;
  return (
    <div className="header">
      <div className="logo">Sample React App</div>
      {/* <div className="title">
          Welcome {user}
          <button onClick={logOut}>Log out</button>
      </div> */}
      <div>
          Welcome {user}
      </div>
    </div>
  )
}

export default Header