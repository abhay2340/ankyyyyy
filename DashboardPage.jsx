import React from 'react';
import SideBar from './SideBar';
import Top from './Top';
import Department from './Department';
const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
    <SideBar/>

      {/* Main Content */}
      <div className="flex-1 flex-col bg-gray-100">
        {/* Fixed Navbar */}
       <Top/>

        {/* Main Section */}
       <Department/>
      </div>
    </div>
  );
};

export default DashboardPage;
