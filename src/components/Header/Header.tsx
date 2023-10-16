import React from 'react';
import dripDropLogo from '../../assets/images/DripDropImage.jpg';

export const Header = () => {
  console.log('header component');

  return (
    <div
      className="
        flex
        items-center
        justify-center
        border
        border-solid
      border-dd-header-bottom-border
      "
    >
      <img alt="dripDropLogo" width="100" height="100" src={dripDropLogo} />
    </div>
  );
};
