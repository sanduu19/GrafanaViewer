// SideBar.jsx
import React, { useState } from 'react';
import './SideBar.css';
import Dashboard1 from '../Dashboards/Dashboard1'
import bg2 from '../Assets/bg1008.jpg'
import logo111 from '../Assets/Logo111.svg'
import barc from '../Assets/bar-chart_3589813.png'

const SideBar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [menu, setMenu] = useState("1");

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{backgroundImage:`url(${bg2})`, backgroundPosition: 'center', backgroundSize:'cover'}}>
      <div className="toggle-button" onClick={toggleSidebar}>
        &#9776;
      </div>
      <div className="sidebar-elements">
        <img className='logo111' src={logo111} alt="" />
        <div className="element">
          <button className='bn' onClick={() => { setMenu("1") }}> <img src={barc} alt="" style={{width:'30px'}}/> Power Consumption{menu === "1" ? <hr /> : <></>} </button>
        </div>
        <div className="element with-dropdown" >
          <button className='bn' style={{marginTop:'-70px'}}>Unit/Costs</button>
          <div className="dropdown" style={{marginTop:'-20px', marginLeft:'13px'}}>
            <p onClick={() => { setMenu("2") }}>Unit {menu === "3" ? <hr /> : <></>}</p>
            <p onClick={() => { setMenu("3") }}>Costs {menu === "4" ? <hr /> : <></>}</p>
          </div>
        </div>
        <div className="element with-dropdown">
          <button className='bn' style={{marginTop:'-16px'}} >Donut on Unit/Costs</button>
          <div className="dropdown" style={{marginTop:'-0px', marginLeft:'13px'}}>
            <p onClick={() => { setMenu("4") }}>Unit {menu === "6" ? <hr /> : <></>}</p>
            <p onClick={() => { setMenu("5") }}>Cost {menu === "7" ? <hr /> : <></>}</p>
          </div>
        </div>
      </div>
      {/* Pass menu state to Dashboard1 */}
      <Dashboard1 menu={menu} />
    </div>
  );
};

export default SideBar;
