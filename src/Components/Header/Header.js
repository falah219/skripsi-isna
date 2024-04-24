
//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

  const [activeItem, setActiveItem] = useState('Home');

  const handleClick = (itemName) => {
    setActiveItem(itemName);
  };

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <NavLink to="/">

              </NavLink>
                <MenuItem
                  active={activeItem === "Home"}
                  icon={<FiHome />}
                  onClick={() => handleClick("Home")}
                >
                  Home
                </MenuItem>              
              
              <MenuItem
                active={activeItem === "Category"}
                icon={<FaList />}
                onClick={() => handleClick("Category")}
              >
                Category
              </MenuItem>
              <MenuItem
                active={activeItem === "Favourite"}
                icon={<FaRegHeart />}
                onClick={() => handleClick("Favourite")}
              >
                Favourite
              </MenuItem>
              <MenuItem
                active={activeItem === "Author"}
                icon={<RiPencilLine />}
                onClick={() => handleClick("Author")}
              >
                Author
              </MenuItem>
              <MenuItem
                active={activeItem === "Settings"}
                icon={<BiCog />}
                onClick={() => handleClick("Settings")}
              >
                Settings
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
