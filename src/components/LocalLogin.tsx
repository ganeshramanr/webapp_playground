import { useContext, useState } from 'react'
import { AuthContext } from '../AuthProvider'

const LocalLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [user, setUser ] = useContext(AuthContext);

  const handleLocalLogin = () => {
    // Set initial error values to empty
    setEmailError('')
    setPasswordError('')

    // Check if the user has entered both fields correctly
    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }

    // if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    //   setEmailError('Please enter a valid email')
    //   return
    // }

    // if ('' === password) {
    //   setPasswordError('Please enter your password')
    //   return
    // }

    // TEMPORARY AUTHENTICATION to check for my email
    // TODO: Add actual authentication logic later
    if(email !== 'ganesh') {
      alert('Invalid email or password, try again');
    } else {
      // FAKE SUCCESS CASE FOR NOW
      // Redirect to home page
      if (setUser) {
        setUser(email);
      }
      // let path = `/home`; 
      // navigate(path);
    }
  }

  return (
    <>
      <div>
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <div>
          <label className="errorLabel">{emailError}</label>
        </div>
      </div>
      <div>
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <div>
          <label className="errorLabel">{passwordError}</label>
        </div>
      </div>
      <div>
        <input className={'inputButton'} type="button" onClick={handleLocalLogin} value={'Log in'} />
      </div>
    </>
  )
}

export default LocalLogin