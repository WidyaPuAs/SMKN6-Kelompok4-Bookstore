import Bar from '../nav/navbar';
import { useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom';
<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

const Halaman_Admin = () => {
  const navigate = useNavigate();
  
    return (
      <div>
        <Bar />
        
      </div>
    )
}

export default Halaman_Admin;