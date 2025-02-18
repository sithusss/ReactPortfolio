import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Education = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Education</h1>
      <div className="mt-8">
        {data.education.map((edu, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold">{edu.degree}</h2>
            <p className="text-gray-700">{edu.institution}</p>
            <p className="text-gray-500">{edu.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;