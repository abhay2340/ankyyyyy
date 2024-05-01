import React from 'react'

const departments = [
  { id: 1, name: 'HR', description: 'Human Resources department handles recruitment, employee relations, and training.' },
  { id: 2, name: 'IT', description: 'Information Technology department manages computer systems, networks, and software.' },
  { id: 3, name: 'Consulting', description: 'Consulting department provides strategic advice and solutions to clients.' },
  { id: 4, name: 'Support', description: 'Support department assists customers with technical issues and product inquiries.' },
  { id: 5, name: 'Staff', description: 'Staff department oversees administrative tasks and office operations.' },
];

function Department() {
  return (
    <div> <div className="p-8 mt-20 pt-24"> {/* Added pt-24 to push content below fixed navbar */}
    {/* Department Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {departments.map((department) => (
              <div key={department.id} className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-lg font-bold">{department.name}</h2>
              </div>
            ))}
          </div>
  </div></div>
  )
}

export default Department