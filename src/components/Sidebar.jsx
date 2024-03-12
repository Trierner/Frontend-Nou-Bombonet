import React from "react";
import Sidebarheader from "./Sidebar-header";
import Sidebarmenu from "./Sidebar-menu";

function Sidebar() {
    return (
        <div className="sidebar">
            <Sidebarheader />
            <Sidebarmenu />
        </div>
    )
}

export default Sidebar;