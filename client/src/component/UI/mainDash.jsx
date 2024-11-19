import React, { useState, useRef, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, searchOutline } from 'ionicons/icons';

const Topbar = () => {
  const [isActive, setIsActive] = useState(false);
  const listRef = useRef([]);

  // Handle menu toggle click
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  // Add event listeners on mount and cleanup on unmount
  useEffect(() => {
    listRef.current.forEach((item, index) => {
      item.addEventListener("mouseover", () => handleMouseOver(index));
    });

    return () => {
      listRef.current.forEach((item) => item.removeEventListener("mouseover", handleMouseOver));
    };
  }, []);

  return (
    <div className={`main ${isActive ? 'active' : ''}`}>
      <div className="topbar">
        <div className="toggle" onClick={handleToggle}>
          <IonIcon icon={menuOutline} />
        </div>

        <div className="search">
          <label>
            <input type="text" placeholder="Search here" />
            <IonIcon icon={searchOutline} />
          </label>
        </div>

        <div className="user">
          <img src="assets/imgs/customer01.jpg" alt="User" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
