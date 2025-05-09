import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

export default function AdminPanel() {
  const [educations, setEducations] = useState([]);
  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    category: '',
    name: '',
    institute: '',
    period: '',
    description: ''
  });

  const [formDataPro, setFormDataPro] = useState({
    proCategory: '',
    proName: '',
    technologies: '',
    proPeriod: '',
    proDescription: ''
  });

  
  const [editingProId, setEditingProId] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [showProModal, setShowProModal] = useState(false);


  const fetchEducations = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/education');
      setEducations(res.data);
    } catch (err) {
      console.error('Error fetching educations:', err);
    }
  };

  const fetchProjects = async () => {
    try{
      const res = await axios.get('http://localhost:5000/api/projects');
      setProjects(res.data);
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
  };

  useEffect(() => {
    fetchEducations();
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProjectChange = (e) => {
    setFormDataPro({ ...formDataPro, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Only handle new education creation
      await axios.post('http://localhost:5000/api/education', formData);
      
      // Reset form and refresh data
      setFormData({ 
        category: '', 
        name: '', 
        institute: '', 
        period: '', 
        description: '' 
      });
      fetchEducations();
      
      alert('Education added successfully!');
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
      alert(`Add failed: ${err.response?.data?.message || err.message}`);
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      // Only handle new education creation
      await axios.post('http://localhost:5000/api/projects', formDataPro);
      
      // Reset form and refresh data
      setFormDataPro({ 
        proCategory: '', 
        proName: '', 
        technologies: '', 
        proPeriod: '', 
        proDescription: '' 
      });
      fetchProjects();
      
      alert('Project added successfully!');
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
      alert(`Add failed: ${err.response?.data?.message || err.message}`);
    }
  };

  const handleEditClick = (edu) => {
    setFormData({
      category: edu.category,
      name: edu.name,
      institute: edu.institute,
      period: edu.period,
      description: edu.description
    });
    setEditingId(edu._id);
    setShowModal(true);
  }

  const handleProjectEditClick = (pro) => {
    setFormDataPro({
      proCategory: pro.proCategory,
      proName: pro.proName,
      technologies: pro.technologies,
      proPeriod: pro.proPeriod,
      proDescription: pro.proDescription
    });
    setEditingProId(pro._id);
    setShowProModal(true);
  }
  
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Handle only updates
      await axios.put(`http://localhost:5000/api/education/${editingId}`, formData);
      
      // Reset form and refresh data
      setFormData({ 
        category: '', 
        name: '', 
        institute: '', 
        period: '', 
        description: '' 
      });

      setShowModal(false);
      setEditingId(null);
      fetchEducations();
      
      alert('Education updated successfully!');
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
      alert(`Update failed: ${err.response?.data?.message || err.message}`);
    }
  };

  const handleProjectUpdate = async (e) => {
    e.preventDefault();
    try {
      // Handle only updates
      await axios.put(`http://localhost:5000/api/projects/${editingProId}`, formDataPro);
      
      // Reset form and refresh data
      setFormDataPro({ 
        proCategory: '', 
        proName: '', 
        technologies: '', 
        proPeriod: '', 
        proDescription: '' 
      });

      setShowProModal(false);
      setEditingProId(null);
      fetchProjects();
      
      alert('Project updated successfully!');
    } catch (err) {
      console.error('Error:', err.response?.data || err.message);
      alert(`Update failed: ${err.response?.data?.message || err.message}`);
    }
  };


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/education/${id}`);
      fetchEducations();
    } catch (err) {
      console.error('Error deleting education:', err);
    }
  };

  const handleProjectDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.error('Error deleting project:', err);
    }
  };

  const categoryOptions = [
    'Higher Education',
    'Education',
    'Courses & Certifications'
  ];

  const projectCategoryOptions = [
    'UI/UX',
    'Web-Frontend',
    'Mobile-Frontend',
    'Web-Fullstack',
    'Mobile-Fullstack',
    'QA'
  ];

  return (
    <div className="admin-container">
      <h2 className="admin-title">🎓 Education Management Panel</h2>

      <form onSubmit={handleSubmit} className="admin-form">
        <h3 className="form-title">{editingId ? 'Edit Education' : 'Add New Education'}</h3>
        <div className="form-grid">
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select a Category</option>
            {categoryOptions.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>

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
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {educations.length > 0 ? (
              educations.map((edu) => (
                <tr key={edu._id}>
                  <td>{edu.eduId}</td>
                  <td>{edu.category}</td>
                  <td>{edu.name}</td>
                  <td>{edu.institute}</td>
                  <td>{edu.period}</td>
                  <td>{edu.description}</td>
                  <td>
                    <button onClick={() => handleEditClick(edu)} className="edit-btn">Edit</button>
                    <button onClick={() => handleDelete(edu._id)} className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="6" className="no-data">No data found</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Project Management Section */}
      <h2 className="admin-title">📁 Project Management Panel</h2>

      <form onSubmit={handleProjectSubmit} className="admin-form">
        <h3 className="form-title">{editingProId ? 'Edit Project' : 'Add New Project'}</h3>
        <div className="form-grid">
          <select name="proCategory" value={formDataPro.proCategory} onChange={handleProjectChange} required>
            <option value="">Select a Category</option>
            {projectCategoryOptions.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>

          {['proName', 'technologies', 'proPeriod', 'proDescription'].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formDataPro[field]}
              onChange={handleProjectChange}
              required
            />
          ))}
        </div>
        <button type="submit" className="submit-btn">
          {editingProId ? 'Update' : 'Add'} Projects
        </button>
      </form>

      <div className="admin-table-container">
      <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Project Name</th>
              <th>Technologies</th>
              <th>Period</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 ? (
              projects.map((pro) => (
                <tr key={pro._id}>
                  <td>{pro.proId}</td>
                  <td>{pro.proCategory}</td>
                  <td>{pro.proName}</td>
                  <td>{pro.technologies}</td>
                  <td>{pro.proPeriod}</td>
                  <td>{pro.proDescription}</td>
                  <td>
                    <button onClick={() => handleProjectEditClick(pro)} className="edit-btn">Edit</button>
                    <button onClick={() => handleProjectDelete(pro._id)} className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="7" className="no-data">No data found</td></tr>
            )}
          </tbody>
        </table>
      </div>


      {/* Modal for editing */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>Edit Education</h3>
            <form onSubmit={handleUpdate} className="modal-form">
              <select name="category" value={formData.category} onChange={handleChange} required>
                <option value="">Select a Category</option>
                {categoryOptions.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
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
              <div className="modal-actions">
                <button type="submit" className="submit-btn">Update</button>
                <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal for project editing */}
      {showProModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>Edit Project</h3>
            <form onSubmit={handleProjectUpdate} className="modal-form">
              <select name="category" value={formDataPro.category} onChange={handleProjectChange} required>
                <option value="">Select a Category</option>
                {projectCategoryOptions.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
              {['name', 'technologies', 'period', 'description'].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleProjectChange}
                  required
                />
              ))}
              <div className="modal-actions">
                <button type="submit" className="submit-btn">Update</button>
                <button type="button" className="cancel-btn" onClick={() => setShowProModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    
  );
}
