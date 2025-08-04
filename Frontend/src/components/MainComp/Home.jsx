import React from 'react';
import HomePage from './HomePage';
import MedicinesGridPage from './MedicinesGridPage';
import ProfileDisplay from '../Profile/ProfileDisplay'; 
import Particles from '../Ui/Particles';

function Home() {
  return (
    <>
      {/* Background particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={['#60a5fa', '#3b82f6']}
          particleCount={800}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      
      <div className="relative z-10">
        <HomePage />
        <MedicinesGridPage />
        <ProfileDisplay />
      </div>
    </>
  );
}

export default Home;
