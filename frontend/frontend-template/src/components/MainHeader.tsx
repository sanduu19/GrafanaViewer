import React from "react"
import { NavLink } from "react-router-dom"
import '../css/MainHeader.css'
import logo111 from '../../src/components/Assets/Logo111.svg'


export default function MainHeader() {
    const activeStyles = {
        fontWeight: "bold",
        color: "#32d4e9"
    }

    return (
        <div className="Navbar" >
            
            <ul><img className='logo1111' src={logo111} alt="" />
                <li><NavLink
                    to="/" className='towhite'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Home
                </NavLink></li>
                <li><NavLink
                    to="/Dashboard" className='towhite'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Dashboard
                </NavLink></li>
                <li><NavLink
                    to="/login" className='towhite'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Admin Login
                </NavLink></li>
                <li><NavLink
                    to="/register" className='towhite'
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Admin Registration
                </NavLink></li>
                
                
                
            </ul>
        </div>
    )
}
