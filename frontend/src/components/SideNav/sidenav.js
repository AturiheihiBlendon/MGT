import React from "react";
import './sidenav.css'

const SideNav = () => {
    return(
        <div className="side-bar">
            <div className="logo">
                <li>LOGO</li>
            </div>

            <div className="navigation-links">
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
                <li className="list">
                    <span className="material-symbols-outlined icon">dashboard</span><span className="span">Dashboard</span>
                    
                </li>
                
                <li className="list">
                <span className="material-symbols-outlined icon">motorcycle</span><span className="span">Bikes Mgt</span>
                    
                </li>

                <li className="list">
                <span className="material-symbols-outlined icon">group</span><span className="span">Riders</span>
                    
                </li>

                <li className="list">
                <span className="material-symbols-outlined icon">payments</span><span className="span">Payments</span>
                    
                </li>

                <li className="list">
                <span className="material-symbols-outlined icon">location_on</span><span className="span">Location</span>
                    
                </li>

                <li className="list">
                <span className="material-symbols-outlined icon">admin_panel_settings</span><span className="span">Admin</span>
                    
                </li>
            </ul>
            </div>
            {/* <div className="dropdown pb-4">
                <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="#" alt="Name" width="60" height="60" className="rounded-circle"/>
                        <span class="d-none d-sm-inline mx-1">User</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a class="dropdown-item" href="/">Sign out</a></li>
                </ul>
                            
            </div> */}
        </div>
    );
}

export default SideNav