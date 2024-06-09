"use client"
import React from 'react';
import { exit }  from '@tauri-apps/api/app';

const TitleBar = () => {
  const handleCloseClick = async () => {
    const confirmation = window.confirm('Are you sure you want to close the app?');
    if (confirmation) {
      await exit();
    }
  };

  return (
    <button onClick={handleCloseClick}>Close App</button>
  );
};

export default TitleBar;
