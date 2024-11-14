import React from 'react';
import HealthCheck from './health-check';

const Header: React.FC = () => {
  return (
    <header className="flex items-center flex-shrink-0 h-16 bg-stone-400 justify-between p-4">
      <h1 className='text-2xl'>Warehouse</h1>
      <HealthCheck />
    </header>
  );
};

export default Header;
