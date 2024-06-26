import React from 'react';
import './Services.css';
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Problem Solving",
      description: "Expert assistance with Python programming problems and projects.",
    },
    {
      id: 2,
      title: "Django Development",
      description: "Building web applications using the Django framework.",
    },
   
   
    {
      id: 3,
      title: "Websites Development",
      description: "Creating interactive user interfaces with React.js.",
    },
    
  
    {
      id: 17,
      title: "Shopify Store ",
      description: "Developing custom Shopify stores for international or national markets.",
    },
    {
      id: 9.5,
      title: "SEO",
      description: "Unlock your website's potential with our expert SEO strategies. Elevate your online presence today!",
    },
   
    {
      id: 8,
      title: "Data Analysis",
      description: "Analyzing and interpreting business data to derive insights.",
    },
    {
        id: 6.5,
        title: "Sales Dashboard",
        description: "Transform data into growth. Real-time insights, proactive decisions.",
      },
      {
        id: 6.5,
        title: "Bussiness Analysis",
        description: "Transforming data into strategic decisions with Business Analysis.",
      },
   
     
   
     
    {
      id: 10,
      title: "Final Year Projects",
      description: "Assistance with final projects for Master's degree programs abroad.",
    },
    {
        id: 11,
        title: "Master's Projects",
        description: "Support with Postgraduate-level projects and assignments.",
      },
    {
      id: 22,
      title: "Bachelor's Projects",
      description: "Support with undergraduate-level projects and assignments.",
    },
   
    {
        id: 15,
        title: "MATLAB - MathWorks",
        description: "Assistance with MATLAB programming and mathematical computing tasks.",
      },
      
  ];

  return (
    <div className="services-container">
      <h1 className='heading'>Our Services</h1>
      <div className="services">
        {services.map(service => (
          <div key={service.id} className="service">
            <h2 className='title'> {service.title}</h2>
            <p className='p'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
