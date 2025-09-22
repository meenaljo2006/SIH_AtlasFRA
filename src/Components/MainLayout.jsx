import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import TopBar from './TopBar'; // <-- Import TopBar
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div>
      <header className="site-header">
        <TopBar />
        <Navbar />
      </header>
      <main className="main-content"> 
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;