import React from 'react';
import "./sidenew.css";
import codeicon from "../../assets/codeicon.svg";
import codeverseLogo from "../../assets/codeverseLogo.svg";
import { IonIcon } from '@ionic/react';
import {  
  homeOutline, 
  peopleOutline, 
  chatbubbleOutline, 
  helpOutline, 
  settingsOutline, 
  lockClosedOutline, 
  logOutOutline 
} from 'ionicons/icons';

const menuItems = [
  { title: 'Dashboard', icon: homeOutline },
  { title: 'Customers', icon: peopleOutline },
  { title: 'Messages', icon: chatbubbleOutline },
  { title: 'Help', icon: helpOutline },
  { title: 'Settings', icon: settingsOutline },
  { title: 'Password', icon: lockClosedOutline },
  { title: 'Sign Out', icon: logOutOutline },
];

const Sidebar = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="#">
            <span className="icon">
              <img src={codeicon} className="w-10" alt="Logo" />
            </span>
            <span className="title">
              <img src={codeverseLogo} className="w-50" alt="Logo" />
            </span>
          </a>
        </li>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href="#">
              <span className="icon">
                <IonIcon icon={item.icon} />
              </span>
              <span className="title">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;