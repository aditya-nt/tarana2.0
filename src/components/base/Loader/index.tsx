import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
      <ScaleLoader />
    </div>
  );
};

export default Loader;
