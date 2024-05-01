import React from 'react';

const countries = [
  { name: 'China', population: '1,397,897,720' },
  { name: 'India', population: '1,366,417,754' },
  { name: 'United States', population: '331,002,651' },
  { name: 'Indonesia', population: '273,523,615' },
  { name: 'Pakistan', population: '220,892,340' },
];

const App = () => {
  const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500'];
  
  return (
<div className="bg-gray-100 p-4 rounded-md">
      <ul>
        {countries.map((country, index) => (
    
          <li key={index} className="flex justify-between py-2  border-gray-300">
            <span w-1 h-1 className={`h-6 w-6 rounded-full ${colors[index % colors.length]}` }></span>
            <span className={`font-semibold rounded-full px-2 py-1`}>{country.name}</span>
            <span>{country.population}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
