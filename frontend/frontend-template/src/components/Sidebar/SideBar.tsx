// SideBar.jsx
import React, { useState } from 'react';
import './SideBar.css';
import Dashboard1 from '../Dashboards/Dashboard1'
import bg2 from '../Assets/bg1008.jpg'
import logo111 from '../Assets/Logo111.svg'

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
          <button className='bn' onClick={() => { setMenu("1") }}>Power Consumption{menu === "1" ? <hr /> : <></>} </button>
        </div>
        <div className="element with-dropdown">
          <button className='bn' onClick={() => { setMenu("2") }}>Unit/Costs {menu === "2" ? <hr /> : <></>}</button>
          <div className="dropdown">
            <p onClick={() => { setMenu("3") }}>Unit {menu === "3" ? <hr /> : <></>}</p>
            <p onClick={() => { setMenu("4") }}>Costs {menu === "4" ? <hr /> : <></>}</p>
          </div>
        </div>
        <div className="element with-dropdown">
          <button className='bn' onClick={() => { setMenu("5") }}>Donut on Unit/Costs {menu === "5" ? <hr /> : <></>}</button>
          <div className="dropdown">
            <p onClick={() => { setMenu("6") }}>Dropdown Item 1 {menu === "6" ? <hr /> : <></>}</p>
            <p onClick={() => { setMenu("7") }}>Dropdown Item 2 {menu === "7" ? <hr /> : <></>}</p>
          </div>
        </div>
      </div>
      {/* Pass menu state to Dashboard1 */}
      <Dashboard1 menu={menu} />
    </div>
  );
};

export default SideBar;
