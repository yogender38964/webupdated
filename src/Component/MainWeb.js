// src/Component/MainWeb.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer'; // Correct import
import ClientsList from './ClientsList';
import ServicesHome from './ServicesHome';
import Home from './Home';
import '../css/mainWeb.css'; // Import the animations CSS

const MainWeb = () => {
  // Create inView refs for each section with adjusted options
  const { ref: homeRef, inView: homeInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });
  const { ref: servicesHomeRef, inView: servicesHomeInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: clientsListRef, inView: clientsListInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <main>
      <div ref={homeRef} className={`pop-up ${homeInView ? 'active' : ''}`}>
        <Home />
      </div>
      <div ref={servicesHomeRef} className={`pop-up ${servicesHomeInView ? 'active' : ''}`}>
        <ServicesHome />
      </div>
      <div ref={clientsListRef} className={`pop-up ${clientsListInView ? 'active' : ''}`}>
        <ClientsList />
      </div>
    </main>
  );
};

export default MainWeb;
