// src/Component/ServicesHome.js
import React from 'react';
import '../css/servicesHome.css'; 

import scadaHeadworksImage from '../Image/scada.png';
import industrialControlsImage from '../Image/Industrial Controls.jpeg';
import systemAutomationImage from '../Image/Power-system-automation.jpg';

const ServicesHome = () => {
  return (
    <section className="services-home">
      <div className="container">
        <div className="servicesHome-content">
          <div className="heading-container">
            <div className="servicesHome-heading">
              <h1>Our Services</h1>
            </div>
            <div className="vertical-line"></div>
          </div>
          <div className="content">
            <p className="summary">
              From initial concept to final implementation, we are dedicated to crafting, constructing, and sustaining high-quality automation systems that drive your success. Whether your goals include minimizing downtime, enhancing quality, boosting efficiency and productivity, improving safety, or cutting energy costs, our professional team is here to provide the expertise and reliable service you need.
            </p>
          </div>
        </div>
        <div className="servicesHome-columns">
          <div className="column">
            <img src={scadaHeadworksImage} alt="SCADA/HMI" className="servicesHome-image" />
            <h3>SCADA/HMI</h3>
            <hr className="divider" />
            <p>
              Integrate single machine visibility or all facets of your manufacturing and control system.
            </p>
            <a href="/services#scada" className="read-more-button">READ MORE</a>
          </div>
          <div className="column">
            <img src={industrialControlsImage} alt="Industrial Controls" className="servicesHome-image" />
            <h3>Industrial Controls</h3>
            <hr className="divider" />
            <p>
              Design and integrate control systems and instrumentation for your industrial machines.
            </p>
            <a href="/services#industrial-controls" className="read-more-button">READ MORE</a>
          </div>
          <div className="column">
            <img src={systemAutomationImage} alt="System Automation" className="servicesHome-image" />
            <h3>System Automation</h3>
            <hr className="divider" />
            <p>
              Automate your entire facility or production line and integrate it with new or existing equipment.
            </p>
            <a href="/services#system-automation" className="read-more-button">READ MORE</a>
          </div>
        </div>
      </div>
      <div className="button-container">
          <a href="/services" className="view-more-button">View All Services</a>
        </div>
    </section>
  );
};

export default ServicesHome;
