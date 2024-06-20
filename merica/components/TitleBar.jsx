"use client"
import React from 'react';
import { exit } from '@tauri-apps/api/process';
import { appWindow, LogicalPosition } from '@tauri-apps/api/window';

const TitleBar = () => {
    const [isDragging, setIsDragging] = React.useState(false);
    const [offsetX, setOffsetX] = React.useState(0);
    const [offsetY, setOffsetY] = React.useState(0);
  
    const handleMouseDown = (event) => {
      setIsDragging(true);
      console.log('Started Dragging')
      const { clientX, clientY } = event;
      setOffsetX(event.clientX - window.screenX);
      setOffsetY(event.clientY - window.screenY);
    };
  
    const handleMouseUp = () => {
      console.log("Cancel Drag")
      setIsDragging(false);
    };
  
    const handleMouseMove = (event) => {
      if (isDragging) {
        const newX = event.clientX - offsetX;
        const newY = event.clientY - offsetY;
        window.moveTo(newX, newY);
      }
    };
  
    return (
      <div data-tauri-drag-region className="flex nav-title cursor-default justify-end select-none fixed top-0 left-0 right-0 z-50 text-white rounded-lg">
        <span className='full-width-span text-center' unselectable='on'>OE Guide</span>
        <button className='bg-slate-700 hover:bg-slate-500 px-3 py-1' onClick={() => appWindow.minimize()}>-</button>
        <button className='bg-[#8C1C13] hover:bg-[#BF4342] px-3 py-1' onClick={() => exit()}>X</button>
      </div>
    );
};
  

export default TitleBar;