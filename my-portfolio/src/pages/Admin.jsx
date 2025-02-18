import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import axios from 'axios';
import '../styles/App.css';

const Admin = () => {
  const { data, setData } = useContext(DataContext);
  const [formData, setFormData] = useState({
    intro: data.intro,
    bio: data.bio,
    skills: data.skills.join(', '),
    education: JSON.stringify(data.education, null, 2),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        ...formData,
        skills: formData.skills.split(',').map((skill) => skill.trim()),
        education: JSON.parse(formData.education),
      };
      await axios.post('/api/data', updatedData); // Update data in backend
      setData(updatedData);
      alert('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label>Intro</label>
          <input
            type="text"
            name="intro"
            value={formData.intro}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Skills (comma-separated)</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Education (JSON format)</label>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            rows="6"
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Admin;