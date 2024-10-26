
import { Outlet } from "react-router-dom"
import Header from "../layouts/Header"
import SideBar from "../layouts/SideBar"

function MainPage() {
  
  return (
    <div className="layout">
      <Header />
      <div className="container">
        <SideBar/>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainPage
