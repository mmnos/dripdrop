import React from 'react';
import dripDropLogo from '../../assets/images/DripDropImage.jpg';

export const Header = () => {
  console.log('header component');

  return (
    <div className="flex items-center justify-center">
      <img alt="dripDropLogo" width="100" height="100" src={dripDropLogo} />
    </div>
  );
};
