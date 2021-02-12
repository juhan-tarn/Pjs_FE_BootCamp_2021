import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import './Sidebar.css';

import PjsLogo from '../../images/pjs_v3.png'

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  
    return (
      <div id="PJSSideBar" className={open ? 'slideIn' : 'slideOut'}>

        <div className="pjsMenuLogo">
          <img src={PjsLogo} alt="Pjs Logo" className="pjslogo"/>
        </div> 

        {/* <HamburgerMenu
            isOpen={!open}
            menuClicked={()=>handleHamburgerClick()}
            width={22}
            height={18}
            strokeWidth={2}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.4}
            className="menu" /> */}

            <div className="l1Menu">
              <p><Link to="/">Home</Link></p>
            </div>

            <div className="l1Menu">
              <p>Voters</p>
              <ul className="sidebarMenu">
                <li className="sidebarMenuItem">
                  <p><Link to="/register-voter">Register Voter</Link></p>
                </li>
                <li className="sidebarMenuItem">
                  <p><Link to="/voter-table">Voter List</Link></p>
                </li>
              </ul>
            </div>

            <div className="l1Menu">
              <p>Elections</p>
              <ul className="sidebarMenu">          
                <li className="sidebarMenuItem">
                  <p><Link to="/elections-table">All Elections</Link></p>
                </li>
                <li className="sidebarMenuItem">
                  <p><Link to="/create-election">Create Election</Link></p>
                </li>
                <li className="sidebarMenuItem">
                  <p><Link to="/elections-stats">Statistics</Link></p>
                </li>
              </ul>
            </div>

            <div className="l1Menu">
              <p>Voting</p>
              <ul className="sidebarMenu">              
                <li className="sidebarMenuItem">
                  <p><Link to="/capture-vote">Caste a vote</Link></p>
                </li>
              </ul>
            </div>            
            
        </div>
    )
  };
