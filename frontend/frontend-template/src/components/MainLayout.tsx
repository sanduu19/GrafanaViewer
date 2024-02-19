import React from "react"
import {Link, Outlet, redirect, useLocation} from "react-router-dom"
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import BGH from '../components/Assets/BG_Home.jpg'
import './Sidebar/Sidebar.css'
import forward from '../components/Assets/forward_2704716.png'
 


export function isLoggedIn() {
    if (localStorage.getItem("IsLoggedIn") === "LoggedIn" && (localStorage.getItem("id") !== "")) {
        throw redirect("/admin")
    }
    console.log(localStorage.getItem("IsLoggedIn"));
    return "Not LoggedIn Previously!"
}


export default function MainLayout() {
  const location = useLocation();
    
  
    return (
      <div>
        <div className="site-wrapper">
          <MainHeader />
          {location.pathname==='/' &&
          <div>
          <div
      className="Home"
      style={{
        backgroundImage: `url(${BGH})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
      }}
    > </div> 
      <div className="hometxt">
      <h1>"Empowering Insight, Illuminating Efficiency. Navigate the pulse of your operations with our embedded Grafana dashboard, where every watt tells a story of innovation and sustainability."</h1>
      </div>  <hr className="hhrr"/>
      <div className="homebttn">
      <Link to='/Dashboard'><button className="bbb">
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">View Dashboard <img src={forward} alt="" className="forward" /></span>
</button></Link></div>       
          </div> 
          }
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    );
  }