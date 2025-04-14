import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

export default function AdminPanel() {
  const [educations, setEducations] = useState([]);
  const [formData, setFormData] = useState({
    eduId: '',
    categoryNo: '',
    name: '',
    institute: '',
    period: '',
    description: ''
  });
  const [editingId, setEditingId] = useState(null);

  const fetchEducations = async () => {
    const res = await axios.get('/api/education');
    setEducations(res.data);
  };

  useEffect(() => {
    fetchEducations();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`/api/education/update/${editingId}`, formData);
      setEditingId(null);
    } else {
      await axios.post('/api/education', formData);
    }
    setFormData({ eduId: '', categoryNo: '', name: '', institute: '', period: '', description: '' });
    fetchEducations();
  };

  const handleEdit = (edu) => {
    setFormData(edu);
    setEditingId(edu._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/education/delete/${id}`);
    fetchEducations();
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/api/edu-categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);


  return (
    <div className="admin-container">
      <h2 className="admin-title">🎓 Education Management Panel</h2>

      <form onSubmit={handleSubmit} className="admin-form">
        <h3 className="form-title">{editingId ? 'Edit Education' : 'Add New Education'}</h3>
        <div className="form-grid">
          {['name', 'institute', 'period', 'description'].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleChange}
              required
            />
            
          ))}
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select a Category</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat._id}>
                {cat.catName}
              </option>
            ))}
          </select>

        </div>
        <button type="submit" className="submit-btn">
          {editingId ? 'Update' : 'Add'} Education
        </button>
      </form>

      <div className="admin-table-container">
        <h3 className="table-title">📋 Education List</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Name</th>
              <th>Institute</th>
              <th>Period</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {educations.map((edu) => (
              <tr key={edu._id}>
                <td>{edu.eduId}</td>
                <td>{edu.categoryNo}</td>
                <td>{edu.name}</td>
                <td>{edu.institute}</td>
                <td>{edu.period}</td>
                <td>
                  <button onClick={() => handleEdit(edu)} className="edit-btn">Edit</button>
                  <button onClick={() => handleDelete(edu._id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
            {educations.length === 0 && (
              <tr><td colSpan="6" className="no-data">No data found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
