// App.js
import React from 'react';
import './App.css';
import HumanBody from './humanBody';

import Calendar from './calendar';
import Header from './header';
import Sidebar from './slidebar.';

function Dashboard() {
  return (
    <div className="dashboard">
       <Sidebar />
      <HumanBody />
      <Calendar />
    </div>
  );
}


export default Dashboard;
