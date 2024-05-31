import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/mqkrorqy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact-page">
      <div className="about-me">
        <h2 className='about_heading'>About Me</h2>
        <p className='p'><strong>Name:</strong> Umar Murtaza</p>
        <p className='p'><strong>Email:</strong> <a href="mailto:Umer@systemheuristics.com">Umerc21061@gmail.com</a></p>
        <p className='p'><strong>Phone:</strong> +923114648875</p>
        <p className='p'><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/umar-murtaza-/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/umar-murtaza-/</a></p>
        <p className='p'><strong>GitHub:</strong> <a href="https://github.com/Umar21061" target="_blank" rel="noopener noreferrer">https://github.com/Umar21061</a></p>
        <p className='p'><strong>Address:</strong> Lahore, Pakistan</p>
      </div>
      <div className="contact-container">
        <h2 className='contact-heading'>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
