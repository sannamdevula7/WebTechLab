import React from 'react';
// import sections
import Home1 from '../components/sections/Home1';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Tfeed from '../components/sections/Tfeed';

const Home = () => {

  return (
    <>
      <Home1 className="illustration-section-01" />
      <Tfeed />
      <FeaturesTiles />
      
    </>
  );
}

export default Home;