import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Intro = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">{data.intro}</h1>
      <p className="mt-4 text-gray-700">{data.bio}</p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Skills</h2>
        <ul className="list-disc ml-6">
          {data.skills.map((skill, index) => (
            <li key={index} className="text-gray-700">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Intro;