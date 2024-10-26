import { NavLink } from "react-router-dom"

const SideBar = () => {
  return (
    <div className="sidebar">
      <NavLink to='/home' className='nav-link'>Home</NavLink>
      <NavLink to='/integrations' className='nav-link'>Integrations</NavLink>
      <NavLink to='/openai' className='nav-link'>OpenAI</NavLink>
      <NavLink to='/geminiai' className='nav-link'>GeminiAI</NavLink>
      <NavLink to='/finnhub' className='nav-link'>Finnhub</NavLink>
      <NavLink to='/about' className='nav-link'>About</NavLink>
    </div>
  )
}

export default SideBar