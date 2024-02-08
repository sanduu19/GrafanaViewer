import React from 'react';
import Dashboard1 from '../Dashboards/Dashboard1';
import SideBar from '../Sidebar/SideBar';
import './DashboardWithSidebar.css'
import { useLocation } from 'react-router-dom';
import MainHeader from '../MainHeader';
import Footer from '../Footer';
import bgD from '../Assets/bg111.jpg'


const DashboardWithSidebar: React.FC = () => {
  const location= useLocation;
  return (
    <div>  
      <MainHeader/>
      <div className='dashboard-container' style={{backgroundImage:`url(${bgD})`, backgroundPosition: 'center', backgroundSize:'cover'}} >
     
      <SideBar />
      
    </div>
    
    </div>
   
  );
};

export default DashboardWithSidebar;