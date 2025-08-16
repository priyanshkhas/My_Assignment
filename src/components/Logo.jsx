// import React from 'react'

// const Logo = ({width = '100px'}) => {
//   return (
//     <div>
//        <div>IIIT NAGPUR</div>
//     </div>
//   )
// }

// export default Logo


import React from 'react';
import logoImg from '../assets/logo.png'; // adjust path if needed

const Logo = ({ width = '100px' }) => {
  return (
    <div>
      <img 
        src={logoImg} 
        alt="IIIT Nagpur Logo" 
        style={{ width }} 
      />
    </div>
  );
};

export default Logo;
