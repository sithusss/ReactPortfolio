//import React, { useContext, useState } from 'react';
//import { DataContext } from '../context/DataContext';
import '../styles/Education.css'; // Assuming you have a CSS file for styling
import React from 'react';

/*const Education = () => {
  const { data } = useContext(DataContext);

  // Group data by category
  const groupByCategory = (educationList) => {
    const grouped = {};
    educationList.forEach(edu => {
      const category = edu.category?.catName || 'Uncategorized';
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(edu);
    });
    return grouped;
  };

  const groupedEducation = groupByCategory(data.education || []);
  const [expandedCategory, setExpandedCategory] = useState({});

  const toggleExpand = (categoryName) => {
    setExpandedCategory(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-10">Education</h1>

      {Object.keys(groupedEducation).map(categoryName => {
        const items = groupedEducation[categoryName];
        const showAll = expandedCategory[categoryName];
        const displayItems = showAll ? items : items.slice(0, 3);

        return (
          <div key={categoryName} className="mb-10">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">{categoryName}</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayItems.map((edu, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-gray-600"><strong>Organization:</strong> {edu.institution}</p>
                  <p className="text-gray-500"><strong>Duration:</strong> {edu.duration}</p>
                  <p className="text-gray-700 mt-2">{edu.description}</p>
                </div>
              ))}
            </div>

            {items.length > 3 && (
              <div className="mt-3 text-right">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => toggleExpand(categoryName)}
                >
                  {showAll ? 'Show Less' : 'Read More...'}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Education;*/

const Education = () => {
  const sampleData = {
    higherEducation: [
      {
        title: 'BSc in Computer Science',
        year: '2018 - 2022',
        organization: 'University of Example',
        description: 'Studied core computer science subjects including data structures, algorithms, and software engineering.'
      }
    ],
    education: [
      {
        title: 'Advanced Level (A/L)',
        year: '2016 - 2018',
        organization: 'Example High School',
        description: 'Completed secondary education in science stream with distinctions.'
      },
      {
        title: 'Ordinary Level (O/L)',
        year: '2011 - 2016',
        organization: 'Example Secondary School',
        description: 'Completed junior secondary education with strong academic performance.'
      }
    ],
    certifications: [
      {
        title: 'React Development Bootcamp',
        year: '2024',
        organization: 'Udemy',
        description: 'Hands-on training in React.js, including hooks and state management.'
      },
      {
        title: 'Python for Data Science',
        year: '2023',
        organization: 'Coursera',
        description: 'Learned data analysis using pandas, numpy, and matplotlib.'
      },
      {
        title: 'AI in Practice',
        year: '2023',
        organization: 'edX',
        description: 'Explored machine learning techniques and neural networks.'
      },
      {
        title: 'Git & GitHub Mastery',
        year: '2022',
        organization: 'LinkedIn Learning',
        description: 'Mastered version control with Git and GitHub.'
      },
      {
        title: 'Intro to Web Development',
        year: '2022',
        organization: 'freeCodeCamp',
        description: 'Covered HTML, CSS, and JavaScript basics.'
      },
      {
        title: 'Leadership Essentials',
        year: '2021',
        organization: 'Skillshare',
        description: 'Developed communication and team leadership skills.'
      }
    ]
  };

  const renderBoxes = (data) =>
    data.slice(0, 3).map((item, index) => (
      <div className="edu-box" key={index}>
        <h3>{item.title}</h3>
        <p className="edu-meta">{item.year} | {item.organization}</p>
        <p className="edu-description">{item.description}</p>
      </div>
    ));

  return (
    <div className="edu-container">
      <h1>Education</h1>

      <section>
        <h2>Higher Education</h2>
        <div className="edu-box-container">{renderBoxes(sampleData.higherEducation)}</div>
        <p className="read-more">Read more...</p>
      </section>

      <section>
        <h2>Education</h2>
        <div className="edu-box-container">{renderBoxes(sampleData.education)}</div>
        <p className="read-more">Read more...</p>
      </section>

      <section>
        <h2>Courses & Certifications</h2>
        <div className="edu-box-container">{renderBoxes(sampleData.certifications)}</div>
        <p className="read-more">Read more...</p>
      </section>
    </div>
  );
};

export default Education;
