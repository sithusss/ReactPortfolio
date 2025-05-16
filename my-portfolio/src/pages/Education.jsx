import React, { useEffect, useState } from 'react';
//import { DataContext } from '../context/DataContext';
import axios from 'axios';
import '../styles/Education.css'; // Assuming you have a CSS file for styling


const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/education'); // Adjust base URL as needed
        setEducationData(res.data);
      } catch (err) {
        console.error('Failed to fetch education data:', err);
      }
    };

    fetchEducation();
  }, []);

  // Group data by category
  const groupByCategory = (educationList) => {
    const grouped = {};
    educationList.forEach(edu => {
      const category = edu.category || 'Uncategorized';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(edu);
    });
    return grouped;
  };

  const groupedData = groupByCategory(educationData);

  return (
    <div className="edu-container">
      <h1>Education</h1>

      {Object.keys(groupedData).map((category) => (
        <section key={category}>
          <h2>{category}</h2>
          <div className="edu-box-container">
            {groupedData[category].map((item, index) => (
              <div className="edu-box" key={index}>
                <h3>{item.name}</h3>
                <p className="edu-meta">{item.period} | {item.institute}</p>
                <p className="edu-description">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Education;
