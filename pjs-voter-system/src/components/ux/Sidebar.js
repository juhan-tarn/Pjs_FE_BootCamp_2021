import React, {useState} from 'react'
import HamburgerMenu from "react-hamburger-menu"

import './Sidebar.css';

import PjsLogo from '../../images/pjs_v3.png'

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  function handleClick(id) { // todo - 
  }
  
  function handleHamburgerClick(){
    setOpen(prevState => !prevState)
  }

  function handleClick() {
    this.setState({
        open: !this.state.open
    });
  }

    return (
      <div id="PJSSideBar" className={open ? 'slideIn' : 'slideOut'}>

        <div className="pjsMenuLogo">
          <img src={PjsLogo} alt="Pjs Logo" className="pjslogo"/>
        </div> 

        <HamburgerMenu
            isOpen={!open}
            menuClicked={()=>handleHamburgerClick()}
            width={22}
            height={18}
            strokeWidth={2}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.4}
            className="menu" />

            <div className="l1Menu">
              <p>Home</p>
            </div>

            <div className="l1Menu">
              <p>Voter</p>
              <ul className="sidebarMenu">
                <li className="sidebarMenuItem">
                  <p>Register Voter</p>
                </li>
                <li className="sidebarMenuItem">
                  <p>Add</p>
                </li>
              </ul>
            </div>

            <div className="l1Menu">
              <p>Election</p>
              <ul className="sidebarMenu">
                <li className="sidebarMenuItem">
                  <p>Stats</p>
                </li>
                <li className="sidebarMenuItem">
                  <p>Create Election</p>
                </li>
                <li className="sidebarMenuItem">
                  <p>Update Election</p>
                </li>
                <li className="sidebarMenuItem">
                  <p>Start Election</p>
                </li>
                <li className="sidebarMenuItem">
                  <p>Complete Election</p>
                </li>
              </ul>
            </div>
            
        </div>
    )
  };