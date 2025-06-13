import React from 'react';




const Sidebar = ({ onSelect }) => (
  <div className="sidebar">
    <button onClick={() => onSelect('home')}>Home</button>
    <button onClick={() => onSelect('watched')}>Watched</button>
    <button onClick={() => onSelect('liked')}>Liked</button>
  </div>
);
export default Sidebar;