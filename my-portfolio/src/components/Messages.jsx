import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Messages.css'; // for styling

const Messages = ({ onClose }) => {
  const [messages, setMessages] = useState([]);

useEffect(() => {
  const fetchMessages = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/contact');
      const unreadMessages = res.data.filter(msg => msg.status !== 'read');
      setMessages(unreadMessages);

    } catch (err) {
      console.error("Error fetching messages", err);
    }
  };

  fetchMessages();
}, []);



  const handleMarkAsRead = async (id) => {
  try {
    await axios.put(`http://localhost:5000/api/contact/${id}/read`);
    setMessages(messages.filter(msg => msg._id !== id));
  } catch (err) {
    console.error('Error marking message as read', err);
  }
};


  return (
    <div className="modal-backdrop">
      <div className="messages-container modal">
        <h2>📩 Received Messages</h2>
        <table className="messages-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg._id}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
                <td>{new Date(msg.createdAt).toLocaleString()}</td>
                <td>
                    <button onClick={() => handleMarkAsRead(msg._id)} className="delete-btn">Read</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="messages-actions">
          <button type="button" className="cancel-btn" onClick={onClose}>Close</button>
        </div>
      </div>
        
    </div>
  );
};

export default Messages;
