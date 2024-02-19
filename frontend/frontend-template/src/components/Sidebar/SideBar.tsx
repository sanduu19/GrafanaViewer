// SideBar.jsx
import React, { useState } from 'react';
import './SideBar.css';
import Dashboard1 from '../Dashboards/Dashboard1'
import bg2 from '../Assets/bg1008.jpg'
import logo111 from '../Assets/Logo111.svg'
import barc from '../Assets/bar-chart_3589813.png'
import unit from '../Assets/electric_11732820.png'
import cost from '../Assets/money-bag_9539498.png'
import donut from '../Assets/pie-chart_758777.png'
import uc from '../Assets/relation_12009170.png'

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
          <button className='bn' onClick={() => { setMenu("1") }}> <img src={barc} alt="" style={{width:'30px'}}/> Power Consumption</button>
        </div>
        <div className="element with-dropdown" >
          <button className='bn' style={{marginTop:'-70px'}}> <img src={uc} alt="" style={{width:'30px',marginLeft:'-60px'}}/>Unit/Costs</button>
          <div className="dropdown" style={{marginTop:'-20px', marginLeft:'15px'}}>
            <p onClick={() => { setMenu("2") }}> <img src={unit} alt="" /> Unit </p>
            <p onClick={() => { setMenu("3") }}> <img src={cost} alt="" /> Costs </p>
          </div>
        </div>
        <div className="element with-dropdown">
          <button className='bn' style={{marginTop:'-16px'}} ><img src={donut} alt="" style={{width:'30px'}} />Donut on Unit/Costs</button>
          <div className="dropdown" style={{marginTop:'-0px', marginLeft:'15px'}}>
            <p onClick={() => { setMenu("4") }}><img src={unit} alt="" />Unit </p>
            <p onClick={() => { setMenu("5") }}><img src={cost} alt="" />Cost </p>
          </div>
        </div>
      </div>
      {/* Pass menu state to Dashboard1 */}
      <Dashboard1 menu={menu} />
    </div>
  );
};

export default SideBar;
