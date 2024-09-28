import React from 'react';
import '../css/services.css'; 

import scadaHeadworksImage from '../Image/scada.png';
import industrialControlsImage from '../Image/Industrial Controls.jpeg';
import systemAutomationImage from '../Image/Power-system-automation.jpg';
import upgradeMaintenanceImage from '../Image/RepairServices.jpg';

const Services = () => {
  return (
    <div>
      <div className="servicesHead">
        <h1>Our Services</h1>
      </div>
      <section className="services-section">
        <div className="container">
          <p>
            At Elbot Automation, we specialize in delivering tailored automation solutions designed to streamline your operations and boost your productivity. Our comprehensive services cover every aspect of automation from initial concept through to production, ensuring your system meets your specific needs and exceeds expectations.
          </p>

          <div className="services-content">
            <article id="scada" className="service-item">
              <div className="service-text">
                <h3>SCADA/HMI</h3>
                <p>
                  SCADA (Supervisory Control and Data Acquisition) and HMI (Human Machine Interface) systems are essential for modern manufacturing. They provide a comprehensive view of your entire operation, allowing for real-time monitoring, control, and data analysis. With SCADA/HMI, you can:
                </p>
                <ul>
                  <li>Visualize plant operations in real-time</li>
                  <li>Control machinery and processes from a central location</li>
                  <li>Analyze performance and historical data to optimize efficiency</li>
                  <li>Make informed decisions to improve operational processes</li>
                </ul>
              </div>
              <img src={scadaHeadworksImage} alt="SCADA/HMI" className="service-image" />
            </article>

            <article id="industrial-controls" className="service-item">
              <div className="service-text">
                <h3>Industrial Controls</h3>
                <p>
                  Our Industrial Controls service offers robust solutions for designing and integrating control systems for your machinery. We work with various industrial protocols and controllers, including Allen Bradley, Siemens, Omron, and Modbus, to provide:
                </p>
                <ul>
                  <li>Custom control systems tailored to your equipment</li>
                  <li>Integration with SQL databases for enhanced data handling</li>
                  <li>Automated equipment control and monitoring</li>
                  <li>Real-time data analysis and reporting</li>
                </ul>
              </div>
              <img src={industrialControlsImage} alt="Industrial Controls" className="service-image" />
            </article>

            <article id="system-automation" className="service-item">
              <div className="service-text">
                <h3>System Automation</h3>
                <p>
                  Our System Automation service is designed to transform your facility by automating processes and integrating new or existing equipment. Key benefits include:
                </p>
                <ul>
                  <li>Streamlined operations across the entire facility</li>
                  <li>Improved accuracy and consistency in production</li>
                  <li>Seamless integration with existing systems</li>
                  <li>Enhanced operational efficiency and reduced downtime</li>
                </ul>
              </div>
              <img src={systemAutomationImage} alt="System Automation" className="service-image" />
            </article>

            <article id="upgrade-maintenance" className="service-item">
              <div className="service-text">
                <h3>Upgrade, Maintenance, and Repair</h3>
                <p>
                  We offer comprehensive upgrade, maintenance, and repair services to keep your control systems running smoothly. Our services include:
                </p>
                <ul>
                  <li>Remote monitoring and diagnostics</li>
                  <li>Preventative maintenance to avoid potential issues</li>
                  <li>System upgrades to incorporate the latest technology</li>
                  <li>Emergency repairs to minimize downtime</li>
                </ul>
              </div>
              <img src={upgradeMaintenanceImage} alt="Upgrade, Maintenance, and Repair" className="service-image" />
            </article>
          </div>

          <div className="get-in-touch">
            <h3>Get in Touch</h3>
            <p>
              Ready to elevate your operations? Contact us today to discover how Elbot Automation can assist you in achieving your industrial automation and panel design goals. Our dedicated team is available to answer your queries, offer expert advice, and craft solutions that drive your success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
