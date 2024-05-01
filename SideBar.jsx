import React from 'react'

function SideBar() {
  return (
    <div className="bg-gray-800 text-white w-64 flex flex-col">
    <div className="p-4">
      <img src="/path/to/logo.png" alt="Company Logo" className="h-10 mb-2" />
      <h1 className="text-xl font-bold">Company Name</h1>
    </div>
    <div className="flex-1">
      <nav className="flex flex-col mt-4">
        <a href="#dashboard" className="py-2 px-4 hover:bg-gray-700">Dashboard</a>
        <a href="#employees" className="py-2 px-4 hover:bg-gray-700">Employees</a>
        <a href="#departments" className="py-2 px-4 hover:bg-gray-700">Departments</a>
        <a href="#org-hierarchy" className="py-2 px-4 hover:bg-gray-700">Org Hierarchy</a>
      </nav>
    </div>
  </div>
  )
}

export default SideBar