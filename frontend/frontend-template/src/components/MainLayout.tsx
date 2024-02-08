import React from "react"
import {Link, Outlet, redirect, useLocation} from "react-router-dom"
import MainHeader from "./MainHeader";
import Footer from "./Footer";



export function isLoggedIn() {
    if (localStorage.getItem("IsLoggedIn") === "LoggedIn" && (localStorage.getItem("id") !== "")) {
        throw redirect("/admin")
    }
    console.log(localStorage.getItem("IsLoggedIn"));
    return "Not LoggedIn Previously!"
}


export default function MainLayout() {
    
  
    return (
      <div>
        <div className="site-wrapper">
          <MainHeader />
          
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    );
  }