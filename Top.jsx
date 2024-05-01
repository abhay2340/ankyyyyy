import React from 'react'

function Top() {
  return (
    <>
    <div className="bg-white shadow-lg fixed top-0 left-64 w-full z-10">
    <div className="p-4 flex items-center justify-between">
      <h1 className="text-lg font-bold">Departments</h1>
    </div>
  </div>

  <div className="p-4  fixed top-16 left-64 w-full z-10">
    <div className="flex ml-4 items-center content-around">
      <input type="text" placeholder="Search department..." className="px-2 py-1 border w-2/3 border-gray-300 rounded-l" />
      <button className="bg-blue-500 text-white px-2 py-2 m-2 rounded-lg">Add Department+</button>
    </div>
  </div>
    </>
  )
}

export default Top