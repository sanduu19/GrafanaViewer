import React from "react"
import {Link, Outlet, redirect, useLocation} from "react-router-dom"
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import bg100 from '../components/Assets/dashboard.jpg'



export function isLoggedIn() {
    if (localStorage.getItem("IsLoggedIn") === "LoggedIn" && (localStorage.getItem("id") !== "")) {
        throw redirect("/admin")
    }
    console.log(localStorage.getItem("IsLoggedIn"));
    return "Not LoggedIn Previously!"
}


export default function MainLayout() {
    const location = useLocation();
    const grafanaDashboardUrl = 'https://snapshots.raintank.io/dashboard/snapshot/VRrBg9waqzPawqYICwTtLYWklfX8IvVk';
  
    return (
      <div className="dashboard" style={{backgroundImage:`url(${bg100})`, backgroundPosition: 'center', backgroundSize:'cover'}}>
        <div className="site-wrapper">
          <MainHeader />
          {location.pathname === '/' && (
            <div className="iframess">
              
                <iframe
                  src={grafanaDashboardUrl}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Grafana Dashboard"
                  className="iframe"
                />
                
              
            </div>
          )}
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    );
  }