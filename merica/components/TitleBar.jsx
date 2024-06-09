"use client"
import React from 'react';
import { exit }  from '@tauri-apps/api/process';

const TitleBar = () => {
  const handleCloseClick = async () => {
    const confirmation = window.confirm('Are you sure you want to close the app?');
    if (confirmation) {
      await exit();
    }
  };

  return (
    <>
        <button className='bg-[#8C1C13] hover:bg-[#BF4342] text-white' onClick={handleCloseClick}>Close App</button>
    </>
  );
};

export default TitleBar;
