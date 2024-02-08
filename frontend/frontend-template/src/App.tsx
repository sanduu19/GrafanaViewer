import "./App.css"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
} from "react-router-dom"
import Splash, { loader as splashLoader } from "./components/Splash"
import AdminLogin, { loader as loginLoader } from "./components/AdminLogin"
import AdminRegistration, {
  loader as registrationLoader,
} from "./components/AdminRegistration"
import AdminPanel from "./components/AdminPanal"
import MainLayout from "./components/MainLayout"
import AdminLayout from "./components/AdminLayout"

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import '../node_modules/primeflex/primeflex.css'
import { Button } from 'primereact/button';
import axios from "axios";
import Keycloak from "keycloak-js";
import { httpClient } from "./HttpClient.js"
import { BrowserRouter,Routes} from "react-router-dom"
import Sidebar from "./components/Sidebar/SideBar"
import SideBar from "./components/Sidebar/SideBar"
import Dashboard1 from "./components/Dashboards/Dashboard1"
import MainHeader from "./components/MainHeader"
import DashboardWithSidebar from "./components/DashboardWithSidebar/DashboardWithSidebar"

let initOptions ={
  url: 'http://localhost:8080',
  realm: 'master',
  clientId: 'grafana_FE'
}

let kc = new Keycloak(initOptions);

kc.init({
  onLoad: 'login-required',
  checkLoginIframe: true,
  pkceMethod: 'S256'
}).then((auth) => {
  console.log('Keycloak initialized:', auth);

  if (!auth) {
    window.location.reload();
  } else {
    console.info('Authenticated');
    console.log('auth', auth);
    console.log('Keycloak', kc);
    console.log('Access Token', kc.token);


    // Update: Use template literals for Authorization header
    httpClient.defaults.headers.common['Authorization'] = `Bearer ${kc.token}`;

    kc.onTokenExpired = () => {
      console.log('Token expired');
    }
  }
}, () => {
  console.error('Authentication Failed');
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
    
        
    

        <Route path="/dashboard" element={<DashboardWithSidebar />} />
      <Route path="/" element={<MainLayout />}>
      
        <Route index element={<Splash />} loader={splashLoader} />
        <Route path="login" element={<AdminLogin />} loader={loginLoader} />
        <Route
          path="register"
          element={<AdminRegistration />}
          loader={registrationLoader}
        />
        
      </Route>
      
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminPanel />} />
      </Route>
    </>,
  ),
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Button
        onClick={() => {
          kc.logout({ redirectUri: 'http://localhost:5173/' });
        }}
        className="m-1 custom-btn-style"
        label="logout"
        severity="danger"
      />
    </>
  );
}


export default App
