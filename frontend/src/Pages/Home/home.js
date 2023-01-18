import React from "react";
import Dashboard from "../../components/Content/dashboard";
import SideNav from "../../components/SideNav/sidenav";
import './home.css'

const HomePage = () => {
    return (
        <div className="home">
            <SideNav />
            <div className="home-contain">
                <Dashboard />
            </div>
        </div>
    );
}
export default HomePage;