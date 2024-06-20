"use client"
import React from 'react';
import { exit } from '@tauri-apps/api/process';
import { appWindow } from '@tauri-apps/api/window';

const TitleBar = () => {
  return (
    <div data-tauri-drag-region className="flex justify-end nav-title cursor-default select-none fixed top-0 left-0 right-0 z-50 text-white rounded-lg">
      <button className='bg-slate-700 hover:bg-slate-500 px-3 py-1' onClick={() => appWindow.minimize()}>-</button>
      <button className='bg-[#8C1C13] hover:bg-[#BF4342] px-3 py-1 rounded-tr-xl' onClick={() => exit()}>X</button>
    </div>
  );
};

export default TitleBar;